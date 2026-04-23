"use client";

import * as React from "react";
import { useDropzone, type DropzoneOptions } from "react-dropzone";
import { Upload, X, FileVideo, FileImage } from "lucide-react";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";
import { Alert, AlertDescription } from "@/components/ui/alert";

export type FileAccept = "image" | "video" | "image-or-video";

const acceptMap: Record<FileAccept, DropzoneOptions["accept"]> = {
  image: { "image/*": [] },
  video: { "video/*": [] },
  "image-or-video": { "image/*": [], "video/*": [] },
};

export interface FileUploadProps {
  accept?: FileAccept;
  maxSize?: number;
  maxFiles?: number;
  onUpload: (files: File[]) => Promise<void> | void;
  disabled?: boolean;
  className?: string;
}

interface PreviewFile {
  file: File;
  url: string;
  type: "image" | "video";
}

export function FileUpload({
  accept = "image",
  maxSize = 10 * 1024 * 1024,
  maxFiles = 1,
  onUpload,
  disabled = false,
  className,
}: FileUploadProps) {
  const [previews, setPreviews] = React.useState<PreviewFile[]>([]);
  const [uploading, setUploading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: acceptMap[accept],
    maxSize,
    maxFiles,
    disabled: disabled || uploading,
    onDrop: async (accepted, rejected) => {
      setError(null);
      if (rejected.length > 0) {
        const err = rejected[0].errors[0];
        if (err.code === "file-too-large") {
          setError(
            `ファイルサイズが大きすぎます（最大 ${Math.round(maxSize / 1024 / 1024)}MB）`,
          );
        } else if (err.code === "too-many-files") {
          setError(`ファイルは最大 ${maxFiles} 個までです`);
        } else {
          setError("対応していないファイル形式です");
        }
        return;
      }
      if (accepted.length === 0) return;

      const newPreviews = accepted.map<PreviewFile>((file) => ({
        file,
        url: URL.createObjectURL(file),
        type: file.type.startsWith("video/") ? "video" : "image",
      }));
      setPreviews(newPreviews);

      try {
        setUploading(true);
        await onUpload(accepted);
      } catch {
        setError("アップロードに失敗しました");
      } finally {
        setUploading(false);
      }
    },
  });

  function removePreview(index: number) {
    setPreviews((prev) => {
      URL.revokeObjectURL(prev[index].url);
      return prev.filter((_, i) => i !== index);
    });
  }

  React.useEffect(() => {
    return () => {
      previews.forEach((p) => URL.revokeObjectURL(p.url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed px-6 py-10 text-center transition-colors",
          isDragActive
            ? "border-primary bg-[color:var(--color-primary)]/5"
            : "border-border hover:border-primary/50 hover:bg-surface-subtle",
          (disabled || uploading) && "cursor-not-allowed opacity-50",
        )}
      >
        <input {...getInputProps()} />
        {uploading ? (
          <Spinner size="lg" color="primary" />
        ) : (
          <>
            <Upload className="size-8 text-muted-foreground" />
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-foreground">
                {isDragActive
                  ? "ここにドロップ"
                  : "クリックまたはドラッグ＆ドロップ"}
              </p>
              <p className="text-xs text-muted-foreground">
                {accept === "image" && "画像ファイル"}
                {accept === "video" && "動画ファイル"}
                {accept === "image-or-video" &&
                  "画像・動画ファイル"} （最大{" "}
                {Math.round(maxSize / 1024 / 1024)}MB）
              </p>
            </div>
          </>
        )}
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {previews.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {previews.map((preview, i) => (
            <div
              key={i}
              className="relative size-24 overflow-hidden rounded-md border border-border"
            >
              {preview.type === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={preview.url}
                  alt={preview.file.name}
                  className="size-full object-cover"
                />
              ) : (
                <div className="flex size-full flex-col items-center justify-center gap-1 bg-surface-subtle">
                  <FileVideo className="size-6 text-muted-foreground" />
                  <span className="max-w-full truncate px-1 text-xs text-muted-foreground">
                    {preview.file.name}
                  </span>
                </div>
              )}
              <button
                type="button"
                aria-label="削除"
                onClick={() => removePreview(i)}
                className="absolute right-1 top-1 flex size-5 items-center justify-center rounded-full bg-foreground/70 text-background hover:bg-foreground"
              >
                <X className="size-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { FileImage, FileVideo };

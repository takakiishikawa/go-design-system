import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StepperStep {
  title: string;
  description?: string;
  status?: "completed" | "current" | "upcoming";
}

export interface StepperProps {
  steps: StepperStep[];
  currentStep?: number;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Stepper({
  steps,
  currentStep,
  orientation = "horizontal",
  className,
}: StepperProps) {
  const resolvedSteps = steps.map(
    (
      step,
      i,
    ): StepperStep & { status: "completed" | "current" | "upcoming" } => {
      if (step.status) return { ...step, status: step.status };
      const idx = currentStep ?? 0;
      if (i < idx) return { ...step, status: "completed" };
      if (i === idx) return { ...step, status: "current" };
      return { ...step, status: "upcoming" };
    },
  );

  if (orientation === "vertical") {
    return (
      <ol className={cn("flex flex-col", className)}>
        {resolvedSteps.map((step, i) => (
          <li key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <StepIndicator status={step.status} index={i} />
              {i < resolvedSteps.length - 1 && (
                <div
                  className={cn(
                    "mt-1 w-0.5 flex-1",
                    step.status === "completed" ? "bg-primary" : "bg-border",
                  )}
                  style={{ minHeight: "2rem" }}
                />
              )}
            </div>
            <div className="pb-6 pt-0.5">
              <StepLabel step={step} />
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className={cn("flex w-full items-start", className)}>
      {resolvedSteps.map((step, i) => (
        <li key={i} className="flex flex-1 items-center">
          <div className="flex flex-col items-center gap-2">
            <StepIndicator status={step.status} index={i} />
            <StepLabel step={step} centered />
          </div>
          {i < resolvedSteps.length - 1 && (
            <div
              className={cn(
                "mx-2 mb-6 h-0.5 flex-1",
                step.status === "completed" ? "bg-primary" : "bg-border",
              )}
            />
          )}
        </li>
      ))}
    </ol>
  );
}

function StepIndicator({
  status,
  index,
}: {
  status: "completed" | "current" | "upcoming";
  index: number;
}) {
  if (status === "completed") {
    return (
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Check className="size-4" strokeWidth={2.5} />
      </div>
    );
  }
  if (status === "current") {
    return (
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-primary/20">
        <span className="text-sm font-semibold">{index + 1}</span>
      </div>
    );
  }
  return (
    <div className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-border bg-background text-muted-foreground">
      <span className="text-sm font-semibold">{index + 1}</span>
    </div>
  );
}

function StepLabel({
  step,
  centered,
}: {
  step: StepperStep;
  centered?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-0.5",
        centered && "items-center text-center",
      )}
    >
      <p
        className={cn(
          "text-sm font-medium",
          step.status === "upcoming"
            ? "text-muted-foreground"
            : "text-foreground",
        )}
      >
        {step.title}
      </p>
      {step.description && (
        <p className="text-xs text-muted-foreground">{step.description}</p>
      )}
    </div>
  );
}

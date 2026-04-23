"use client";

import { useState } from "react";
import { DatePicker, DateRangePicker } from "@takaki/go-design-system";
import type { DateRange } from "@takaki/go-design-system";
import { PageHeader, DemoSection } from "@/app/ui/demo-section";

export default function DatePickerPage() {
  const [single, setSingle] = useState<Date | undefined>();
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="DatePicker / DateRangePicker"
        description="日付・期間を選択するポップオーバー型ピッカー。date-fns の日本語ロケールを使用。"
        import="import { DatePicker, DateRangePicker } from '@takaki/go-design-system'"
      />

      <DemoSection title="DatePicker — 単一日付">
        <div className="flex flex-col gap-2">
          <DatePicker value={single} onChange={setSingle} />
          {single && (
            <p className="text-xs text-muted-foreground">
              選択: {single.toLocaleDateString("ja-JP")}
            </p>
          )}
        </div>
      </DemoSection>

      <DemoSection title="DateRangePicker — 期間選択">
        <div className="flex flex-col gap-2">
          <DateRangePicker value={range} onChange={setRange} />
          {range?.from && (
            <p className="text-xs text-muted-foreground">
              選択: {range.from.toLocaleDateString("ja-JP")}
              {range.to && ` 〜 ${range.to.toLocaleDateString("ja-JP")}`}
            </p>
          )}
        </div>
      </DemoSection>

      <DemoSection title="disabled">
        <DatePicker disabled placeholder="選択不可" />
      </DemoSection>
    </div>
  );
}

import * as React from "react";
import type { ColumnDef } from "@tanstack/react-table";

import { SectionCards, type SectionCardsProps } from "./section-cards";
import { ChartArea, type ChartAreaProps } from "./chart-area";
import { DataTable } from "./data-table";

export interface DashboardPageProps {
  /** KPIカード群 */
  cards?: SectionCardsProps["cards"];
  /** エリアチャートの設定 */
  chart?: ChartAreaProps;
  /** データテーブルの設定 */
  table?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: ColumnDef<any>[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
    searchable?: boolean | { columnId: string; placeholder?: string };
    pageSize?: number;
    emptyMessage?: string;
  };
  /** ページ固有のカスタムセクションを自由に追加 */
  children?: React.ReactNode;
}

export function DashboardPage({
  cards,
  chart,
  table,
  children,
}: DashboardPageProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* KPIカード */}
      {cards && cards.length > 0 && <SectionCards cards={cards} />}

      {/* エリアチャート */}
      {chart && (
        <div className="px-4 lg:px-6">
          <ChartArea {...chart} />
        </div>
      )}

      {/* データテーブル */}
      {table && (
        <div className="px-4 lg:px-6">
          <DataTable
            columns={table.columns}
            data={table.data}
            searchable={table.searchable}
            pageSize={table.pageSize}
            emptyMessage={table.emptyMessage}
          />
        </div>
      )}

      {/* カスタムセクション */}
      {children && <div className="px-4 lg:px-6">{children}</div>}
    </div>
  );
}

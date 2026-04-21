"use client"

import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  SearchIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export interface DataTableProps<TData> {
  columns: ColumnDef<TData>[]
  data: TData[]
  /** 検索ボックスを表示し、指定したカラム ID でフィルタリング */
  searchable?: boolean | { columnId: string; placeholder?: string }
  pageSize?: number
  /** ページサイズ選択肢（省略時: [10, 20, 50]） */
  pageSizeOptions?: number[]
  /** 空時のメッセージ */
  emptyMessage?: string
  /** 行クリック時のコールバック。指定すると行が cursor-pointer になる */
  onRowClick?: (row: TData) => void
}

export function DataTable<TData>({
  columns,
  data,
  searchable = false,
  pageSize = 10,
  pageSizeOptions = [10, 20, 50],
  emptyMessage = "データがありません",
  onRowClick,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize,
  })

  const searchColumnId =
    typeof searchable === "object" ? searchable.columnId : undefined
  const searchPlaceholder =
    typeof searchable === "object" ? (searchable.placeholder ?? "検索...") : "検索..."

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters, columnVisibility, pagination },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const searchValue = searchColumnId
    ? (table.getColumn(searchColumnId)?.getFilterValue() as string) ?? ""
    : ""

  return (
    <div className="flex flex-col gap-4">
      {/* 検索バー */}
      {searchable && searchColumnId && (
        <div className="relative max-w-xs">
          <Label htmlFor="data-table-search" className="sr-only">
            {searchPlaceholder}
          </Label>
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="data-table-search"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) =>
              table.getColumn(searchColumnId)?.setFilterValue(e.target.value)
            }
            className="pl-9"
          />
        </div>
      )}

      {/* テーブル */}
      <div className="overflow-hidden rounded-lg border border-border">
        <Table>
          <TableHeader className="sticky top-0 z-10 bg-muted">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                  onClick={onRowClick ? () => onRowClick(row.original) : undefined}
                  className={onRowClick ? "cursor-pointer hover:bg-muted/50 active:bg-muted transition-colors" : undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* ページネーション */}
      <div className="flex items-center justify-between gap-4 text-sm">
        <div className="text-muted-foreground hidden lg:block">
          {table.getFilteredRowModel().rows.length} 件中{" "}
          {table.getState().pagination.pageIndex *
            table.getState().pagination.pageSize +
            1}
          –
          {Math.min(
            (table.getState().pagination.pageIndex + 1) *
              table.getState().pagination.pageSize,
            table.getFilteredRowModel().rows.length
          )}{" "}
          件を表示
        </div>

        <div className="ml-auto flex items-center gap-4">
          {/* ページサイズ選択 */}
          <div className="hidden items-center gap-2 lg:flex">
            <Label htmlFor="page-size" className="text-sm font-medium whitespace-nowrap">
              表示件数
            </Label>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(v) => table.setPageSize(Number(v))}
            >
              <SelectTrigger className="w-20" id="page-size">
                <SelectValue />
              </SelectTrigger>
              <SelectContent side="top">
                {pageSizeOptions.map((size) => (
                  <SelectItem key={size} value={`${size}`}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* ページ番号 */}
          <span className="font-medium">
            {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
          </span>

          {/* ナビゲーションボタン */}
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="hidden size-8 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              aria-label="最初のページ"
            >
              <ChevronsLeftIcon className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label="前のページ"
            >
              <ChevronLeftIcon className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label="次のページ"
            >
              <ChevronRightIcon className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hidden size-8 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              aria-label="最後のページ"
            >
              <ChevronsRightIcon className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

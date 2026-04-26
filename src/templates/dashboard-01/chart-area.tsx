The fix wraps both formatter paths in lambdas at line 203:

```tsx
// Before (type mismatch — passing (string) => string directly):
labelFormatter={tooltipLabelFormatter ? tooltipLabelFormatter : (v) => xTickFormatter(v as string)}

// After (matches (label: ReactNode, ...) => ReactNode):
labelFormatter={
  tooltipLabelFormatter
    ? (label) => tooltipLabelFormatter(label as string)
    : (label) => xTickFormatter(label as string)
}
```

`labelFormatter` expects `(label: ReactNode, payload: ...) => ReactNode`, so passing `(value: string) => string` directly fails. Wrapping in a lambda that accepts `label` (typed as `ReactNode` by inference) and casts internally satisfies the type contract without changing the public `ChartAreaProps` API.
All errors fixed. Here's what changed:

- **Lines 117/122 (`payload`/`label` missing)**: Replaced `React.ComponentProps<typeof RechartsPrimitive.Tooltip>` with an explicit props type using `TooltipPayloadItem[]` — recharts' generic `Tooltip` props don't survive the `forwardRef` `Omit<..., "ref">` transformation cleanly.
- **Lines 187–189 (implicit `any` in callbacks)**: Added explicit `(item: TooltipPayloadItem, index: number)` annotations on the `.filter`/`.map` callbacks.
- **Line 264 (`Pick<LegendProps, "payload" | "verticalAlign">` constraint)**: Replaced with a manually typed `payload?: LegendPayloadItem[]` and `verticalAlign?: "top" | "middle" | "bottom"` — newer recharts versions don't expose those keys as string-indexable in `LegendProps`.
- **Lines 275/289–290 (`length`/`filter` on `{}`)**: Resolved by the `LegendPayloadItem[]` fix above; `payload` is now a proper array type.
- **`item.value.toLocaleString()`**: Changed to `String(item.value).toLocaleString()` since `value` can be `number | string | Array<...>`, not guaranteed to have `.toLocaleString` directly on the union.
import * as React from "react";

/**
 * Controlled/uncontrolled パターンを統一するフック。
 * value が外から渡されていれば controlled、未定義なら内部 state で管理する。
 */
export function useControlledState<T>(
  controlledValue: T | undefined,
  defaultValue: T,
): readonly [T, (next: T) => void] {
  const [internalValue, setInternalValue] = React.useState<T>(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const setValue = React.useCallback(
    (next: T) => {
      if (controlledValue === undefined) {
        setInternalValue(next);
      }
    },
    [controlledValue],
  );

  return [value, setValue] as const;
}

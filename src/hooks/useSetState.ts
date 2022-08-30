import { useCallback, useState } from 'react';

const isFunction = (patch: Function | Record<string, any> | null): boolean => {
  return typeof patch === 'function';
};

export type SetState<S extends Record<string, any>> = <K extends keyof S>(
  state: Pick<S, K> | null | ((prevState: Readonly<S>) => Pick<S, K> | S | null)
) => void;

/**
 * 管理 object 类型 state 的 Hooks，可合并更新。
 * @param initialState
 * @returns
 */
export const useSetState = <S extends Record<string, any>>(initialState: S | (() => S)): [S, SetState<S>] => {
  const [state, setState] = useState<S>(initialState);

  const setMergeState = useCallback((patch: Record<string, any> | null | Function) => {
    setState((prevState) => {
      const newState = isFunction(patch) ? (patch as Function)(prevState) : patch;

      return newState ? { ...prevState, ...newState } : prevState;
    });
  }, []);

  return [state, setMergeState];
};

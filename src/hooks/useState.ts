import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * 可以获取更新完的最新state
 * @export
 * @template T
 * @param {T} initialState
 * @return {*}  {([T, Function, T | null])}
 */
export function useRefState<T>(initialState: T): [T, Function, T | null] {
  const ref = useRef<T | null>(null);
  const [state, setState] = useState(() => {
    // 初始化
    const value = typeof initialState === 'function' ? initialState() : initialState;
    ref.current = value;
    return value;
  });

  const setValue = useCallback((newState: T) => {
    if (typeof newState === 'function') {
      setState((prevState: T) => {
        const ret = newState?.(prevState);
        ref.current = ret;
        return ret;
      });
    } else {
      ref.current = newState;
      setState(newState);
    }
  }, []);

  return [state, setValue, ref.current];
}

/**
 * useState的回调获取最新的state
 * @export
 * @template T
 * @param {T} state
 * @return {*}  {any[]}
 */
export function useCallbackState<T>(state: T): [T, Function] {
  const callBackRef = useRef<Function | null>(null);
  const [data, setData] = useState<T>(state);
  useEffect(() => {
    callBackRef?.current!(data);
  }, [data]);

  return [
    data,
    function (newState: T, cb: Function) {
      callBackRef.current = cb;
      setData(newState);
    },
  ];
}

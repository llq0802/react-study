import { useCallback, useRef, useState } from 'react';

/**
 * 可以立即获取更新完最新state的值
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

  return [state, setValue, ref?.current];
}

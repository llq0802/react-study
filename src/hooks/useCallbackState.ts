import { useState, useRef, useEffect } from 'react';

/**
 * useState的回调获取最新的state
 * @export
 * @template T
 * @param {T} state
 * @return {*}  { [T, Function]}
 */
export function useCallbackState<T>(state: T): [T, Function] {
  const callBackRef = useRef<Function | null>(null);
  const [data, setData] = useState<T>(state);
  useEffect(() => {
    callBackRef?.current?.(data);
  }, [data]);

  return [
    data,
    function (newState: T, cb: Function) {
      callBackRef.current = cb;
      setData(newState);
    },
  ];
}

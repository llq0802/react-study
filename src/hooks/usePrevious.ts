import { useRef } from 'react';

export type ShouldUpdateFunc<T> = (prev: T | undefined, next: T) => boolean;

const defaultShouldUpdate = <T>(a?: T, b?: T) => !Object.is(a, b);

/**
 * 保存上一次状态的 Hook。
 * @param state
 * @param shouldUpdate
 * @returns
 */
function usePrevious<T>(state: T, shouldUpdate: ShouldUpdateFunc<T> = defaultShouldUpdate): T | undefined {
  const prevRef = useRef<T>();
  const curRef = useRef<T>();

  // 不相等时
  if (shouldUpdate(curRef.current, state)) {
    prevRef.current = curRef.current;
    curRef.current = state;
  }

  return prevRef.current;
}

export default usePrevious;

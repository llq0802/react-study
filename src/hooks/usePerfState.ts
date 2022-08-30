import { useCallback, useRef, useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';

function useRafState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
function useRafState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];

/**
 * 用法与useState一致 用于性能优化
 * @param initialState
 * @returns
 */
function useRafState<S>(initialState?: S | (() => S)) {
  const ref = useRef(0);
  const [state, setState] = useState(initialState);

  const setRafState = useCallback((value: S | ((prevState: S) => S)) => {
    window.cancelAnimationFrame(ref.current);
    ref.current = requestAnimationFrame(() => {
      setState(value as SetStateAction<S | undefined>);
    });
  }, []);

  useEffect(() => {
    return () => {
      window.cancelAnimationFrame(ref.current);
    };
  }, []);

  return [state, setRafState] as const;
}

export default useRafState;

import React, { useState, useCallback } from "react";
import useUnmountedRef from "./useUnmountedRef";

/** 组件已经卸载则不更新的 useState */
function useSafeState<T>(initialState: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>];

function useSafeState<T = undefined>(): [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
];

function useSafeState(initialState?) {
  const [state, setState] = useState(initialState);

  /** 当前组件是否卸载 */
  const unmountedRef = useUnmountedRef();

  /** 设置State */
  const handleSetState = useCallback(nVal => {
    /** 组件卸载就不再更新 */
    if (unmountedRef.current) return;
    setState(nVal);
  }, []);

  return [state, handleSetState] as const;
}

export default useSafeState;

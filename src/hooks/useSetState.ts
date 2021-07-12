import React, { useState } from "react";

/** 设置对象的 useState */
function useSetState<T>(
  initialState: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>, () => void];

function useSetState<T = undefined>(): [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>,
  () => void
];

function useSetState(obj?) {
  const [value, setValue] = useState(obj);

  /** 设置 - Value */
  const handleSetValue = nVal => {
    setValue(oVal => ({ ...oVal, ...nVal }));
  };

  /** 重置 - Value */
  const handleResetValue = () => {
    setValue(obj);
  };

  return [value, handleSetValue, handleResetValue] as const;
}

export default useSetState;

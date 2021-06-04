import { useState } from 'react';

type ReturnType<T> = [T, (nVal: Partial<T>) => void, () => void];

/** 
 * 设置State
 * @param {object} object - 设置的值
 */
const useSetState = <T extends object = {}>(obj: T): ReturnType<T> => {
  const [value, setValue] = useState<T>(obj);

  /** 设置 - Value */
  const handleSetValue = (nVal: Partial<T>): void => {
    setValue(oVal => ({ ...oVal, ...nVal }));
  };

  /** 重置 - Value */
  const handleResetValue = () => {
    setValue(obj);
  };

  return [value, handleSetValue, handleResetValue];
};

export default useSetState;

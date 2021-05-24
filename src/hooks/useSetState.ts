import { useState } from 'react';

type ReturnType<T> = [T, (nVal: Partial<T>) => void];

const useSetState = <T extends object = {}>(obj: T): ReturnType<T> => {
  const [value, setValue] = useState<T>(obj);

  const handleSetValue = (nVal: Partial<T>): void => {
    setValue(oVal => ({ ...oVal, ...nVal }));
  };

  return [value, handleSetValue];
};

export default useSetState;

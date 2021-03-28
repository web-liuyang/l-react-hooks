import { useEffect } from 'react';

const useUnmount = (callback: Function) => {
  useEffect(() => {
    return () => {
      callback();
    };
  }, []);
};

export default useUnmount;

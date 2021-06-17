import { useEffect } from 'react';

/**
 * 卸载时触发的函数
 * @param {callback} callback - 触发的回调
 */
const useUnmount = (callback: Function): void => {
  useEffect(() => {
    return () => {
      callback();
    };
  }, []);
};

export default useUnmount;

import { useEffect } from 'react';

/**
 * 页面首次渲染时触发的函数
 */
const useMount = (callback: Function): void => {
  useEffect(() => {
    callback();
  }, []);
};

export default useMount;

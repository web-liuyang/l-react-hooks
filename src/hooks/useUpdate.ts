import { useEffect, useRef } from 'react';

/**
 * 数据更新时触发的函数
 * @param {callback} callback - 触发的回调
 * @param {*[]} deps - 监听变化的数组值
 */
const useUpdate = (callback: Function, deps: any[]): void => {
  const isFirst = useRef(false);
  useEffect(() => {
    if (!isFirst.current) {
      isFirst.current = true;
    } else {
      callback();
    }
  }, deps);
};

export default useUpdate;

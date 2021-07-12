import { useEffect, useRef } from "react";
import { Callback } from "../types";

/** 依赖时更新触发 - 不包括初始加载 */
function useUpdate(callback: Callback, deps: any[]): void;

function useUpdate(callback: Callback, deps: any[]): void {
  const isFirst = useRef(false);
  useEffect(() => {
    if (!isFirst.current) {
      isFirst.current = true;
    } else {
      callback();
    }
  }, [...deps]);
}

export default useUpdate;

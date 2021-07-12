import { useEffect } from "react";
import { Callback } from "../types";

/** 组件挂载时触发 */
function useMount(callback: Callback): void;

function useMount(callback: Callback): void {
  useEffect(() => {
    callback();
  }, []);
}

export default useMount;

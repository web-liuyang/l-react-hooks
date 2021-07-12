import { useEffect } from "react";
import { Callback } from "../types";
import usePersistCallback from "./usePersistCallback";

/** 组件卸载时触发 */
function useUnmount(callback: Callback): void;

function useUnmount(callback: Callback): void {
  const persistCallback = usePersistCallback(callback);

  useEffect(
    () => () => {
      persistCallback();
    },
    []
  );
}

export default useUnmount;

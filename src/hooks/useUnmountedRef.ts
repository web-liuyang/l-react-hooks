import React, { useRef } from "react";
import useUnmount from "./useUnmount";

/** 当前组件是否卸载 */
function useUnmounted(): React.MutableRefObject<boolean>;

function useUnmounted(): React.MutableRefObject<boolean> {
  /** 是否卸载 */
  const isUnmount = useRef<boolean>(false);

  useUnmount(() => {
    isUnmount.current = true;
  });

  return isUnmount;
}

export default useUnmounted;

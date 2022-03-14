import { useRef } from "react";
import { Callback } from "../types";

/** 持久化函数 */
function usePersistCallback<T extends Callback>(callback: T): T;

function usePersistCallback<T extends Callback>(callback: T): T {
  /** 回调函数 保存 */
  const cbRef = useRef<T>(callback);
  /** 赋值为最新的回调 */
  cbRef.current = callback;

  /** 创建持久化 回调函数 */
  const persistCallbackRef = useRef<T>();

  // 持久化 回调函数不存在
  if (!persistCallbackRef.current) {
    // 把值赋值为保存的回调函数的执行结果
    persistCallbackRef.current = function (...args) {
      return cbRef.current!.apply(this, args);
    } as T;
  }

  return persistCallbackRef.current;
}

export default usePersistCallback;

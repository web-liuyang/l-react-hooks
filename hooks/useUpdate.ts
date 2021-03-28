import React, { useEffect, useRef } from "react";

const useUpdate = (callback: Function, deps: any[]) => {
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

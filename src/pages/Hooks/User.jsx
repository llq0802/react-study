import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle, memo } from 'react';

const User = (props, ref) => {
  const [count, setCount] = useState(1);
  const userRef = useRef(1);
  useEffect(() => {
    // userRef.current = count;
    // props.onGetCount(count);

    return () => {
      // console.log('user组件销毁');
    };
  }, [props.i]);

  useImperativeHandle(ref, () => ({
    setCount,
    count: userRef.current,
  }));
  return <h1>User-{props.i}</h1>;
};

export default memo(forwardRef(User));

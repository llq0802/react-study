import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle, memo } from 'react';

const User = (props, ref) => {
  const [count, setCount] = useState(1);
  const userRef = useRef(1);
  console.log('User ');
  useEffect(() => {
    console.log('User-useEffect', count);
    userRef.current = count;
    props.onGetCount(count);
  }, [count]);
  useImperativeHandle(ref, () => ({
    setCount,
    count: userRef.current,
  }));
  return <h1>User-{count}</h1>;
};

export default memo(forwardRef(User));

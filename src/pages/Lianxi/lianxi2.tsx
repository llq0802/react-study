import { Button } from 'antd';
import { useCallbackState, usePersistFn, usePrevious, useSetState } from 'rc-use-hooks';
import React from 'react';

const Lianxi2 = () => {
  const [count, setCount] = useCallbackState<number>(0);
  const [userData, setUserData] = useSetState<Record<string, any>>({});
  const date = Date.now();
  const prevDate = usePrevious(date);

  const handleBtnClick = usePersistFn(() => {
    setCount(count + 1, (newCount) => {
      console.log('newCount ', newCount);
    });
  });

  return (
    <div>
      <div>
        {count} - {prevDate}-{date}
      </div>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
      <Button onClick={handleBtnClick}>点击useCallbackState</Button>
      <Button
        onClick={() =>
          setUserData({
            name: 'llq',
            age: 25,
          })
        }
      >
        点击useSetState
      </Button>
    </div>
  );
};

export default Lianxi2;

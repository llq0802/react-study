import React, { useEffect, useState } from 'react';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';
import { MButton, Title, MInput } from './Styled';
import FixedSizeList2 from '../../components/FixedSizeList2';
import { Button } from 'antd';
import './index.scss';
// console.log('MButton', MButton);
// console.log('Title', Title.styledComponentId);

const Lxian = () => {
  console.log('组件更新 ');

  useEffect(() => {
    // setCount(count + 1);
    // setFlag(flag + 2);
    // console.log('useEffect');
    // console.log(document.querySelector(`.${MInput.styledComponentId}`));
  }, []);
  useUpdateEffect(() => {
    console.log('useUpdateEffect');
  }, []);

  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(99);

  async function handleClick() {
    // setTimeout(() => {
    //   setCount(count + 1);
    //   setFlag(flag + 2);
    // });

    // Promise.resolve().then(() => {
    //   setCount(count + 1);
    //   setFlag(flag + 2);
    // });

    await asy();
    setCount(count + 1);
    setFlag(flag + 2);
  }

  function asy() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(99);
      }, 3000);
    });
  }

  return (
    <div>
      <div className="classNamecard">
        <div className="container">789</div>
      </div>
      <Title>Title</Title>
      <MButton>Button</MButton>
      <MInput type="number" />

      <hr />

      <Button onClick={handleClick}>798798</Button>

      <hr />
      <FixedSizeList2 containerHeight={300} itemCount={5000} itemHeight={50}>
        {Itemc}
      </FixedSizeList2>
    </div>
  );
};

export default Lxian;

function Itemc({ style, index }) {
  return (
    <div
      className="item"
      style={{
        ...style,
        backgroundColor: index % 2 === 0 ? 'burlywood' : 'cadetblue',
        // backgroundColor: 'cadetblue',
      }}
    >
      {index}
    </div>
  );
}

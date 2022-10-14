import React, { useEffect } from 'react';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';
import { MButton, Title, MInput } from './Styled';

// console.log('MButton', MButton);
// console.log('Title', Title.styledComponentId);

const Lxian = () => {
  useEffect(() => {
    console.log('useEffect');

    console.log(document.querySelector(`.${MInput.styledComponentId}`));
  }, []);

  useUpdateEffect(() => {
    console.log('useUpdateEffect');
  }, []);

  return (
    <div>
      <Title>Title</Title>
      <MButton>Button</MButton>
      <MInput type="number" />
    </div>
  );
};

export default Lxian;

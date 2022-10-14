import styled from 'styled-components';

const MButton = styled.button`
  background: red;
  font-size: 20px;
  color: #fff;
`;

const JC = styled(MButton)`
  background: #888;
  font-size: 14px;
  line-height: 1;
`;

const Title = JC.withComponent('div');

const MInput = styled.input.attrs((props: Record<string, string>) => ({
  // 定义静态 props
  className: 'btn',
  type: props.type || 'text',
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

export { MButton, Title, MInput };

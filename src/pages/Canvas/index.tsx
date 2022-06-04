import React, { Component, useState, useEffect, useRef } from 'react';
import { TreeSelect, Row, Col, Space, Divider, Checkbox, Button, Select, Drawer } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import DrawCanvas from './DrawCanvas';
interface Options {
  label: string;
  value: string;
  disabled?: boolean;
}
const optionsWithDisabled: Array<Options> = [
  { label: '111', value: '1' },
  { label: '222', value: '2' },
  { label: '333', value: '3' },
  { label: '444', value: '4' },
  { label: '555', value: '5' },
  { label: '666', value: '6' },
  { label: '777', value: '7' },
];
let checkedValues = ['5', '6', '7'];
const Index = () => {
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState<Options[]>(optionsWithDisabled);
  const [value, setValue] = useState<CheckboxValueType[]>();
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  useEffect(() => {
    const arr = [...list];
    if (checkedValues.includes('1')) {
      const i = arr.findIndex((item) => item.value === '7');
      arr[i].disabled = true;
      setList([...arr]);
    } else if (checkedValues.includes('7')) {
      const i = arr.findIndex((item) => item.value === '1');
      arr[i].disabled = true;
      setList([...arr]);
    } else {
      setList((res) =>
        res.map((item) => ({
          ...item,
          disabled: false,
        }))
      );
    }
    // setValue(checkedValues);
  }, []);

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checkedValues', checkedValues);
    setValue(checkedValues);
    const arr = [...list];
    if (checkedValues.includes('1')) {
      const i = arr.findIndex((item) => item.value === '7');
      arr[i].disabled = true;
      setList([...arr]);
    } else if (checkedValues.includes('7')) {
      const i = arr.findIndex((item) => item.value === '1');
      arr[i].disabled = true;
      setList([...arr]);
    } else {
      setList((res) =>
        res.map((item) => ({
          ...item,
          disabled: false,
        }))
      );
    }

    // let filterArr = list.filter((item) => !checkedValues.includes(item.value));
    /**多选框限制选择的数量 */
    // if (checkedValues.length === 3) {
    //   let res = list.map((item) => {
    //     if (checkedValues.includes(item.value)) {
    //       return {
    //         ...item,
    //         disabled: false,
    //       };
    //     }
    //     return {
    //       ...item,
    //       disabled: true,
    //     };
    //   });
    //   setList(res);
    //   return;
    // }
    // setList((res) =>
    //   res.map((item) => ({
    //     ...item,
    //     disabled: false,
    //   }))
    // );
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        打开 Canvas
      </Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div> 多选框互斥操作</div>
      <Checkbox.Group options={list} onChange={onChange} defaultValue={checkedValues} />

      <Drawer title="DrawCanvas" destroyOnClose onClose={onClose} visible={visible} width={1300}>
        <DrawCanvas imgUrl="/img.png" />
      </Drawer>
    </>
  );
};

export default Index;

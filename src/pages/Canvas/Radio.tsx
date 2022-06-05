import React, { Key, useMemo, useState, forwardRef, useImperativeHandle, ForwardRefRenderFunction } from 'react';
import { Button, message, Radio, Space } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { RectType } from './data';

type RadioOption = {
  label: string;
  value: string | number;
  disabled?: boolean;
};
const list = [
  { label: '设备 A', value: 1 },
  { label: '设备 B', value: 2 },
  { label: '设备 C', value: 3 },
  { label: '设备 D', value: 4 },
] as const;
interface PropsType {
  curPoint: RectType[];
  putImageData?(): void;
}
interface RefType {
  setHadPointList?(): void;
}

const App: ForwardRefRenderFunction<RefType, PropsType> = ({ curPoint, putImageData }, ref) => {
  const [value, setValue] = useState<number>(0);
  const [hadPointList, setHadPointList] = useState<Record<string, any>[]>([]);
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const handleBtnClick = () => {
    if (curPoint.length !== 1) {
      message.error('避免选择重复区域');
      setValue(0);
      putImageData?.();
      return;
    }
    if (!value) {
      message.error('请选择关联设备');
      return;
    }
    const cur = hadPointList.find((item) => item.boxId === curPoint[0].boxId);
    if (cur) {
      message.error('当前围栏已被关联');
      setValue(0);
      putImageData?.();
      return;
    }
    const arr = [...curPoint] as Record<string, any>[];
    arr[0].title = list.find((item) => item.value === value)!.label;
    // console.log('hadPointList', hadPointList);
    setHadPointList([...hadPointList, ...arr]);
    setValue(0);
    putImageData?.();
  };

  useImperativeHandle(
    ref,
    (): RefType => ({
      setHadPointList: () => setHadPointList([]),
    })
  );

  return (
    <>
      <Radio.Group onChange={onChange} value={value} style={{ width: '100%', display: 'flex' }}>
        <Space direction="vertical" style={{ width: '100%', display: 'flex' }}>
          {useMemo(
            () =>
              list.map((item: RadioOption) => (
                <Radio key={item.value} value={item.value}>
                  {item.label}
                </Radio>
              )),
            []
          )}
        </Space>
      </Radio.Group>
      {curPoint.length > 0 && (
        <Button type="primary" onClick={handleBtnClick}>
          确定
        </Button>
      )}

      <>
        {useMemo(
          () =>
            hadPointList.map((item) => (
              <div key={item.boxId}>
                {item.boxId}号围栏 - {item.title}
              </div>
            )),
          [hadPointList]
        )}
      </>
    </>
  );
};

export default forwardRef(App);

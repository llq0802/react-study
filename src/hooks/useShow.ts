import _cloneDeep from 'lodash/cloneDeep';
import { RefObject, useImperativeHandle, useRef } from 'react';

export declare type ShowInstance<T = any> = {
  show: (record: T) => void;
  hide: (data?: any) => void;
  getData: () => any;
};
export declare type ShowInstanceRef<T = any> = RefObject<ShowInstance<T>>;

export declare type OptionsType<T> = {
  /** show触发事件 */
  onShow: (record: T) => void;
  /** 格式化record */
  onFormart?: (record: T) => T;
  /** hide触发事件 */
  onHide?: (data?: any) => void;
};

/**
 * 父调用子组件方法，并传值
 * @param funcRef ref对象
 * @param options { onShow, onFormart, onHide }
 * @returns T 传输的数据
 * -- deprecated
 */
export default function useShow(funcRef: ShowInstanceRef, options: OptionsType<any>) {
  const ref = useRef({});
  const callBackRef = useRef();
  let onShow = options.onShow,
    onFormart = options.onFormart,
    onHide = options.onHide;

  const onCallback = function onCallback(e) {
    callBackRef.current = e;
  };

  useImperativeHandle(funcRef, function () {
    return {
      show: function show(record) {
        ref.current = _cloneDeep(record); // 深拷贝，避免值被修改，造成异常
        onShow(ref.current);
      },
      hide: function hide(data) {
        if (onHide) onHide(data);
      },
      getData: function getData() {
        //传给父子间的数据
        return callBackRef.current;
      },
    };
  });
  return {
    record: onFormart ? onFormart(ref.current) : ref.current,
    onCallback: onCallback,
  };
}

// 父组件用法
// const claimModalRef= useRef<ShowInstance>(null),
// claimModalRef.current?.show(record)
// claimModalRef.current?.hide({})
// const childData =  claimModalRef.current?.getData();  父组件通过getData函数获取子组件的数据

/* <Child modalRef={claimModalRef}/> */
// 子组件用法  record为父组件给子组件的数据   onCallback子组件给父组件传的数据
// const { record, onCallback } = useShow(modalRef, { onShow: () => setVisible(true) });

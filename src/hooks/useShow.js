import _cloneDeep from 'lodash/cloneDeep';
import { useImperativeHandle, useRef } from 'react';
/**
 * 父调用子组件方法，并传值
 * @param funcRef ref对象
 * @param options { onShow, onFormart, onHide }
 * @returns T 传输的数据
 * -- deprecated
 */
export default function useShow(funcRef, options) {
  const ref = useRef({});
  const callBackRef = useRef();
  const onShow = options.onShow,
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

// // 父组件
// const claimModalRef useRef<ShowInstance>(null),
// claimModalRef.current?.show({})
// // 子组件
// const { record = {} } = useShow(modalRef, { onShow: () => setVisible(true) });

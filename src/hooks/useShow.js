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
  var ref = useRef({});
  var callBackRef = useRef();
  var onShow = options.onShow,
    onFormart = options.onFormart,
    onHide = options.onHide;

  var onCallback = function onCallback(e) {
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
        return callBackRef.current;
      },
    };
  });
  return {
    record: onFormart ? onFormart(ref.current) : ref.current,
    onCallback: onCallback,
  };
}

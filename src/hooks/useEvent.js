function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

import { useRef, useEffect } from 'react';
import _cloneDeep from 'lodash/cloneDeep';
import _uniqueId from 'lodash/uniqueId';
export var EventInstance = function EventInstance() {
  var _this = this;

  _classCallCheck(this, EventInstance);

  this.subscriptions = [];

  this.emit = function (val, actionType) {
    _this.subscriptions.forEach(function (subscription) {
      // 未传入actionType 全部执行
      if (actionType === undefined) {
        var values = _cloneDeep(val);

        subscription.record = values;
        subscription.func(values);
        return;
      } // 仅执行匹配的方法

      if (actionType === subscription.type) {
        var _values = _cloneDeep(val);

        subscription.record = _values;
        subscription.func(_values);
      }
    });
  };

  this.useSubscription = function (callback, actionType) {
    var _this$subscriptions$f;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    var callbackRef = useRef(_uniqueId('_Subscription')); // eslint-disable-next-line react-hooks/rules-of-hooks

    useEffect(function () {
      _this.subscriptions.push({
        id: callbackRef.current,
        func: callback,
        type: actionType,
      });

      return function () {
        _this.subscriptions = _this.subscriptions.filter(function (sub) {
          return sub.id !== callbackRef.current;
        });
      };
    }, []);
    return (
      ((_this$subscriptions$f = _this.subscriptions.find(function (s) {
        return s.id === callbackRef.current;
      })) === null || _this$subscriptions$f === void 0
        ? void 0
        : _this$subscriptions$f.record) || {}
    );
  };
};
/**
 * 组件消息订阅方式传值
 * @returns
 */

export default function useEvent() {
  var ref = useRef();

  if (!ref.current) {
    ref.current = new EventInstance();
  }

  return ref.current;
}

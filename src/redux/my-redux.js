/*
 * @Author: your name
 * @Date: 2021-12-27 14:21:47
 * @LastEditTime: 2021-12-27 16:11:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-react\src\redux\my-redux.js
 */
import React, { Component, PureComponent, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

let MyContext = createContext();
let { Provider } = MyContext;

export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };
  render() {
    const stroe = this.props.store;
    return <Provider value={{ stroe }}>{this.props.children}</Provider>;
  }
}
export function connect(mapState = (state) => state, mapDispatch = (dispatch) => dispatch) {
  return (UiComponent) => {
    return class UU extends Component {
      static contextType = MyContext;

      componentDidMount() {
        const { store } = this.context; // 从 Context 中拿到 store 对象
        this.state = { ...store };
        this.stateProps = mapState(store.getState());
        let dispatchProps;
        if (typeof mapDispatch === 'function') {
          dispatchProps = mapDispatch(store.dispatch);
        } else {
          dispatchProps = {};
          Object.keys(mapDispatch).forEach((itemKey) => {
            let actionCreator = mapDispatch[itemKey];
            dispatchProps[itemKey] = (...args) => {
              store.dispatch(actionCreator(...args));
            };
          });
        }
        this.dispatchProps = dispatchProps;
        store.subscribe(() => {
          mapState(store.getState());
        });
      }
      render() {
        return <UiComponent {...this.stateProps} {...this.dispatchProps} />;
      }
    };
  };
}

/*
 * @Author: your name
 * @Date: 2021-09-16 15:10:30
 * @LastEditTime: 2021-09-23 16:46:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-react\src\redux\actions\count.js
 */
/* 
	该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from '../constant';

//同步action，就是指action的值为Object类型的一般对象
export const increment = (data) => ({ type: INCREMENT, data });
export const decrement = (data) => ({ type: DECREMENT, data });

//异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(increment(data));
        resolve(data);
      }, time);
    });
  };
};

// export const incrementAsync = (data, time) => {
//   return new Promise((resolve) => {
//     return (dispatch) => {
//       setTimeout(() => {
//         dispatch(increment(data));
//         resolve(1);
//       }, time);
//     };
//   });
// };

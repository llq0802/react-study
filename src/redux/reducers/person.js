/*
 * @Author: your name
 * @Date: 2021-09-10 16:41:22
 * @LastEditTime: 2021-09-10 17:19:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \my-react\src\redux\reducers\person.js
 */
import { ADD_PERSON } from '../constant';

//初始化人的列表
const initState = [{ id: '001', name: '浏览器', age: 18 }];

export default function personReducer(preState = initState, action) {
  // console.log('personReducer@#@#@#');
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON: //若是添加一个人
      //preState.unshift(data) //此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了。
      return [data, ...preState];
    default:
      return preState;
  }
}

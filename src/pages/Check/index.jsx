import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { TreeSelect, Row, Col, Space, Divider, Checkbox } from 'antd';
import './index.scss'
const options = [
  { label: '苹果', value: '1', checked: false },
  { label: '香蕉', value: '2', checked: false },
  { label: '西瓜', value: '3', checked: false },
];


const arrs = [
  {
    id: '1',
    title: '题目一',
    type: 1,
    list: [
      { label: '单选一1', value: '1', checked: false },
      { label: '单选二2', value: '2', checked: false },
      { label: '单选三3', value: '3', checked: false },
    ]
  },
  {
    id: '2',
    title: '题目二',
    type: 2,
    list: [
      { label: '多选一1', value: '1', checked: false },
      { label: '多选二2', value: '2', checked: false },
      { label: '多选三3', value: '3', checked: false },
      { label: '多选四4', value: '4', checked: false },
    ]
  },
  {
    id: '3',
    title: '题目三',
    type: 1,
    list: [
      { label: '单选一', value: '1', checked: false },
      { label: '单选二', value: '2', checked: false },
      { label: '单选三', value: '3', checked: false },
    ]
  },
  {
    id: '4',
    title: '题目四',
    type: 1,
    list: [
      { label: '多选一', value: '1', checked: false },
      { label: '多选二', value: '2', checked: false },
      { label: '多选三', value: '3', checked: false },
    ]
  },


]





const Index = (props) => {
  const [arr, setArr] = useState(arrs)
  const [list, setList] = useState(options)
  const onChange = (e, value, index, checked) => {
    console.log(e.target.checked, value, index, checked);
    const newoptions = list.map(option => ({
      ...option,
      checked: false
    }))
    newoptions[index].checked = !checked
    setList(newoptions)
  }

  const handleRchange = (e, index, i, checked) => {
    console.log(checked, index, i);

    setArr((arr) => {
      const newArr = arr[index].list.map(item => ({
        ...item,
        checked: false
      }))
      newArr[i].checked = !checked
      arr[index].list = newArr
      return [...arr]
    })

  }
  return (
    <>
      {list.map((menber, i) => (
        <Checkbox
          key={menber.value}
          checked={menber.checked}
          onChange={(e) => onChange(e, menber.value, i, menber.checked)}>
          {menber.label}
        </Checkbox>
      ))}

      <Divider />

      <div style={{ border: '1px solid dashed' }} >
        {




          // arr.map((item, index) => (
          //   <div key={item.id} className='item_box'>
          //     {
          //       item.type === 1 && (
          //         <>
          //           <div>
          //             <span>单选-{'序号-' + index + 1}</span>
          //             <span>{item.title}</span>
          //           </div>
          //           {item.list.map((menber, i) => (
          //             <Checkbox key={menber.value}
          //               checked={menber.checked}
          //               onChange={(e) => handleRchange(e, index, i, menber.checked)}>
          //               {menber.label}
          //             </Checkbox>
          //           ))}
          //         </>

          //       )
          //     }
          //     {
          //       item.type === 2 && (
          //         <>
          //           <div>
          //             <span>多选-{'序号-' + index + 1}</span>
          //             <span>{item.title}</span>
          //           </div>
          //           {item.list.map((menber, i) => (
          //             <Checkbox key={menber.value} >
          //               {menber.label}
          //             </Checkbox>
          //           ))}
          //         </>)
          //     }
          //   </div>
          // ))






          arr.map((item, index) => {
            if (item.type === 1) {
              return <div key={index}>
                <div>
                  <span>单选-{'序号-' + index + 1}</span>
                  <span>{item.title}</span>
                </div>
                {item.list.map((menber, i) => (
                  <Checkbox key={menber.value}
                    checked={menber.checked}
                    onChange={(e) => handleRchange(e, index, i, menber.checked)}>
                    {menber.label}
                  </Checkbox>
                ))}
              </div>
            } else {
              return <div key={index}>
                <div>
                  <span>多选-{'序号-' + index + 1}</span>
                  <span>{item.title}</span>
                </div>
                {item.list.map((menber, i) => (
                  <Checkbox key={menber.value} >
                    {menber.label}
                  </Checkbox>
                ))}
              </div>

            }

          })
        }
      </div>


    </>
  )
}
export default Index




// const handleSubmit = async () => {
//   const apiFileUpload = async () => { }
//   const fileList = []
//   //并行
//   fileList = fileList.map((item) => {
//     const formdata = new FormData();
//     formdata.append('file', item.files);
//     return apiFileUpload(item.ptContentId, formdata).then(() => {
//       console.log('当前这项上传完成');
//     });
//   });
//   await Promise.all(fileList);

//   //串行
//   for (let i = 0; i < fileList.length; i++) {
//     const formdata = new FormData();
//     formdata.append('file', item.files);
//     await apiFileUpload(item.ptContentId, formdata)
//   }
//   console.log(99);


//   //串行
//   const requestList = [];
//   fileList.forEach((item) => {
//     let fn = () => {
//       const formdata = new FormData();
//       formdata.append('file', item.files);
//       apiFileUpload(item.ptContentId, formdata);
//     };
//     requestList.push(fn);
//   });
//   let i = 0;
//   const send = async () => {
//     if (i >= requestList.length) {
//       console.log('串行传完了');
//       return;
//     }
//     await requestList[i]();
//     i++;
//     send();
//   };
//   send();
// }
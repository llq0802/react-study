import React, { key, FC, Component, useEffect, useState, createContext, useContext, useRef, forwardRef, useImperativeHandle } from 'react'
import { Button } from 'antd'
// const CountContext = createContext([{ age: 20 }])
// export default function A(props) {
//   let [count, setCount] = useState(77)
//   let ref = useRef()
//   console.log(ref);
//   // let s = useContext(CountContext)
//   // console.log(s);
//   return (
//     <CountContext.Provider value={count}>
//       <B ref={ref} />
//     </CountContext.Provider>


//   )
// }


// const B = forwardRef(function (props, ref) {
//   const inputRef = useRef();
//   useImperativeHandle(ref, () => ({
//     focus: () => {
//       inputRef.current.focus();
//     },
//     say: () => {
//       console.log('say');
//     },
//     value: 1
//   }));
//   let count = useContext(CountContext)
//   console.log(count);
//   const getList = () => {

//   }
//   return (
//     <>
//       <h2>
//         {count}
//       </h2>
//       <input type="text" ref={inputRef} />
//     </>
//   )

// })


// export default function Counter(props) {
//   const [count, setCount] = useState(0);
//   const prevCountRef = useRef();
//   ;
//   useEffect(() => {
//     prevCountRef.current = count
//     console.log('  prevCountRef.current', count);
//   });
//   console.log(777);

//   const add = () => {
//     // prevCountRef.current = count + 1

//     // setTimeout(() => {
//     setCount(count => {
//       console.log(123);
//       return count + 1
//     });
//     // })
//     console.log('current', prevCountRef.current);


//   }

//   return <button onClick={() => add()}>点我</button>;
// }

let params = 1
export default function Counte() {
  const aa = useRef(0)
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log(111);
  }, [params]);
  const handleClick = () => {
    params += 1
    aa.current += 1
    setCount(aa.current)
    console.log(count);
    console.log(aa.current);
  }


  return (<h1 onClick={() => handleClick()}>Now: {count},{aa.current} {params}</h1>)
}

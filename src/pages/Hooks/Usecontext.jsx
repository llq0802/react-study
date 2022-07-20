import React, {
  useMemo,
  key,
  FC,
  Component,
  useEffect,
  useState,
  createContext,
  useContext,
  useRef,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from 'react';
import { Button } from 'antd';
import Child from './Child';
import User from './User';
import Marquee from '../../components/Marquee/Marquee.jsx';

function Usecontext() {
  const [i, setI] = useState(99);
  const userRef = useRef();
  const handleClick = () => {
    console.log('userRefcurrent', userRef.current.count);
    userRef.current.setCount((i) => i + 1);
  };
  console.log('Usecontext');

  const onGetCount = useCallback((vals) => {
    console.log(' onGetCount', vals);
    // setI(vals);
  }, []);

  useEffect(() => {
    console.log('Usecontext-useEffect', userRef.current.count);

    // setI((i) => i);
  }, [userRef]);
  return (
    <>
      <div>Usecontext</div>
      <div>i-{i}</div>

      <Button type="primary" onClick={handleClick}>
        点击count
      </Button>

      <div>Usecontext-{userRef.current?.count}</div>

      <hr />
      <User ref={userRef} onGetCount={onGetCount}></User>
    </>
  );
}

export default Usecontext;

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

// export default function Counte({ age = 20 }) {
//   const [count, setCount] = useState(() => age * 2);
//   const [isMounted, setIsMounted] = useState(false);

//   const list = useMemo(() =>

//     age

//     , [age])

//   if (count === 0) {
//     setCount(999)
//   }

//   useEffect(() => {
//     setTimeout(() => {
//       setIsMounted(true);
//     }, 1000)
//   }, []);
//   console.log('Counte');
//   // let cc = useMemo(() => count + 2, [count])
//   // useEffect(() => {
//   //   const init = () => {
//   //     console.log('init');
//   //   }
//   //   init()
//   // }, []);
//   // const handleClick = () => {
//   //   // setCount(count + 2)
//   //   // console.log(cc);
//   //   ps++
//   //   console.log(ps);
//   // }

//   return (
//     <>
//       {
//         isMounted ?
//           (
//             <>
//               <Button>点击</Button>
//               <h1>{count}</h1>
//               <Marquee>
//                 <h2>784815</h2>
//                 <h2>12345</h2>
//               </Marquee>
//             </>

//           )
//           : '加载中'
//       }

//     </>
//   )

// }

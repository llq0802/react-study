import React, { Component, useEffect, useState, createContext, useContext, useRef, forwardRef, useImperativeHandle } from 'react'
const CountContext = createContext()

// export default function A(props) {
//   let [count, setCount] = useState(77)
//   let ref = useRef()
//   console.log(ref);
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
//     }
//   }));
//   let count = useContext(CountContext)
//   console.log(inputRef);
//   return (
//     <>
//       <h2>
//         {count}
//       </h2>
//       <input type="text" ref={inputRef} />
//     </>
//   )

// })


export default function Counter(props) {
  console.log(props);
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  console.log(1, prevCountRef);
  console.log(11, count);
  useEffect(() => {
    prevCountRef.current = count;
    console.log(2, prevCountRef);

  });
  function me() {
    console.log('onClick');
    setCount(count + 1)
  }
  const prevCount = prevCountRef.current;
  console.log(3, prevCount);
  console.log(4, count);
  return <h1 onClick={() => setCount(count + 1)}>Now: {count}, before: {prevCount}</h1>;
}





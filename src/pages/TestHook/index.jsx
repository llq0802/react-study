import React, { useEffect, useLayoutEffect, Component } from 'react'
import List from 'rc-virtual-list';
import VirtualList from 'react-tiny-virtual-list';



const data = ['A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C', 'D', 'E', 'F',];

const Listw = () => {

  return (
    <List data={data} height={200} itemHeight={30} itemKey="id" disabled>
      {(item, index, props) => <div style={{ marginBottom: 20, height: 50 }} > {item} - {index} -</div>}
    </List >)


  // return (
  //   <VirtualList
  //     width={500}
  //     itemCount={data.length}
  //     itemSize={50} // Also supports variable heights (array or function getter)
  //     height={600}
  //     renderItem={({ index, style }) =>
  //       <div key={index} style={style} >
  //         Letter: {data[index]}, Row: #{index}
  //       </div>
  //     }
  //   />
  // )
}


export default Listw















// export default function () {
//   console.log(777);

//   useEffect(() => {
//     console.log('useEffect1');
//   }, [])
//   useEffect(() => {
//     console.log('useEffect2');
//   }, [])
//   useLayoutEffect(() => {
//     console.log('useLayoutEffect');
//   }, [])
//   console.log(999);

//   return (
//     <><div>index</div><Son></Son></>
//   )
// }

// const Son = () => {
//   console.log('10');
//   useEffect(() => {
//     console.log('Son-useEffect');
//   }, [])
//   return (<div>
//     son
//   </div>)
// }






import React, { useEffect, useLayoutEffect, Component, useRef, useState } from 'react';
import List from 'rc-virtual-list';
import VirtualList from 'react-tiny-virtual-list';
import { Tabs, Button } from 'antd';

const { TabPane } = Tabs;

// const data = [
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
// ];

// const Listw = () => {
//   return (
//     <List data={data} height={200} itemHeight={30} itemKey="id" disabled>
//       {(item, index, props) => (
//         <div style={{ marginBottom: 20, height: 50 }}>
//           {' '}
//           {item} - {index} -
//         </div>
//       )}
//     </List>
//   );

//   // return (
//   //   <VirtualList
//   //     width={500}
//   //     itemCount={data.length}
//   //     itemSize={50} // Also supports variable heights (array or function getter)
//   //     height={600}
//   //     renderItem={({ index, style }) =>
//   //       <div key={index} style={style} >
//   //         Letter: {data[index]}, Row: #{index}
//   //       </div>
//   //     }
//   //   />
//   // )
// };

// export default Listw;
// useEffect 是异步执行的，而useLayoutEffect是同步执行的。
// useEffect 的执行时机是浏览器完成渲染之后，而 useLayoutEffect 的执行时机是浏览器把内容真正渲染到界面之前，和 componentDidMount 等价
export function Son1() {
  useEffect(() => {
    console.log('Son1');
  }, []);
  // useEffect(() => {
  //   console.log('useEffect2');
  // }, []);
  // useLayoutEffect(() => {
  //   console.log('useLayoutEffect', document.querySelector('.mycontainer'));
  // }, []);
  // console.log(999);

  return <h1>Son1</h1>;
}

export const Son2 = () => {
  useEffect(() => {
    console.log('Son2');
  }, []);
  return <h1>Son2</h1>;
};
export const Son3 = () => {
  useEffect(() => {
    console.log('Son3');
  }, []);
  return <h1>Son3</h1>;
};

const initialPanes = [
  { title: 'Tab-1', content: <Son1 />, key: '1' },
  { title: 'Tab 2', content: <Son2 />, key: '2' },
  {
    title: 'Tab 3',
    content: <Son3 />,
    key: '3',
    closable: false,
  },
];

const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState(initialPanes[0].key);
  const [panes, setPanes] = useState(initialPanes);
  const newTabIndex = useRef(0);

  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const add = () => {
    // const Sons = `Son${panes.length + 1}`;

    const newActiveKey = `${panes.length + 1}`;
    setPanes([
      ...panes,
      {
        title: `Tab-${panes.length + 1}`,
        content: <Son2 />,
        key: newActiveKey,
      },
    ]);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: string) => {
    const targetIndex = panes.findIndex((pane) => pane.key === targetKey);
    const newPanes = panes.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);
    }
    setPanes(newPanes);
  };

  const onEdit = (targetKey: string, action: 'add' | 'remove') => {
    if (action === 'remove') {
      remove(targetKey);
    }
  };

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button onClick={add}>ADD</Button>
      </div>

      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
        tabBarGutter={16}
        destroyInactiveTabPane={true}
        // renderTabBar={(props, DefaultTabBar) => {
        //   console.log(props);
        //   console.log(DefaultTabBar);
        //   return <span>789</span>;
        // }}
      >
        {panes.map((pane) => (
          <TabPane tab={pane.title} key={pane.key}>
            {/* {activeKey === pane.key && pane.content} */}
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
    </>
  );
};

export default App;

import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { TreeSelect, Row, Col, Space, Divider, Tree, } from 'antd';

import { DownOutlined, CarryOutOutlined } from '@ant-design/icons';

// function updateTreeData(list, key, children) {
//   return list.map(node => {
//     if (node.key === key) {
//       return {
//         ...node,
//         children,
//       };
//     }
//     if (node.children) {
//       return {
//         ...node,
//         children: updateTreeData(node.children, key, children),
//       };
//     }
//     return node;

//   });
// }
// const Index = (props) => {
//   const [treeData, setTreeData] = useState < Omit < DefaultOptionType, 'label' > [] > ([
//     { id: 1, pId: 0, value: '1', title: 'Expand to load' },
//     { id: 2, pId: 0, value: '2', title: 'Expand to load' },
//     { id: 3, pId: 0, value: '3', title: 'Tree Node', isLeaf: true },
//   ]);
//   const ref = useRef(null)
//   useEffect(() => {
//   }, [])
//   const onChange = (e) => {
//     console.log('onChange', e);
//   }
//   const getCount = (value) => {
//   }
//   const onDropdownVisibleChange = (open) => {
//     console.log('onDropdownVisibleChange', open);
//   }
//   const onLoadData = (res) => {
//     console.log('onLoadData', res);
//     const { key, children } = res;
//     return new Promise(resolve => {
//       if (children) {
//         resolve();
//         return;
//       }
//       setTimeout(() => {
//         setState(origin => (
//           {
//             treeData: updateTreeData(origin.treeData, key, [
//               { title: 'Child Node', key: `${key}-0`, value: `${key}-0` },
//               { title: 'Child Node', key: `${key}-1`, value: `${key}-1`, isLeaf: true },
//             ]),
//             currentValue: origin.currentValue
//           }
//         )

//         );
//         resolve();
//       }, 500);

//     });

//   }

//   const Node = <TreeSelect
//     dropdownRender={(originNode, props) => {
//       return originNode
//     }}
//     showSearch={false}
//     labelInValue
//     allowClear
//     multiple
//     style={{ width: '100%' }}
//     placeholder="Please select"
//     treeData={treeData}
//     onChange={onChange}
//     loadData={onLoadData}
//     onDropdownVisibleChange={onDropdownVisibleChange}
//   />


//   return (
//     <>
//       {
//         Node
//       }
//       <Divider />
//       <Child ref={ref} getCount={getCount}></Child>
//     </>
//   )
// }
// export default Index




// const HD = (props, ref) => {
//   const [count, setCount] = useState(999)
//   const inputRef = useRef(null)
//   useImperativeHandle(ref, () => (
//     {
//       getLsit: function () {
//         return count
//       },
//       count: count,
//       input: inputRef?.current

//     }
//   ))

//   useEffect(() => {
//     props.getCount(count)
//   }, [])
//   const handleBtnClick = () => {
//     console.log('handleBtnClick');
//     setCount(count + 1)
//   }

//   return <>
//     <h1 >计数: {count}</h1>
//     <input type="text" ref={inputRef} />
//     <button onClick={handleBtnClick}>点击</button>
//   </>
// }
// const Child = forwardRef(HD)





const treeData: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            selectable: true,//设置节点是否可被选中
            disableCheckbox: true,//禁掉 checkbox
          },
          {
            checkable: false, // 是否展示 checkbox
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
      },
    ],
  },
];

const App: React.FC = () => {
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys,);
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys,);
  };

  return (
    <Tree
      checkable
      checkStrictly
      showLine
      blockNode
      showIcon={<CarryOutOutlined />}
      switcherIcon={<DownOutlined />}
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
    />
  );
};

export default App;
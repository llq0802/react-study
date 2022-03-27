import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { TreeSelect, Row, Col, Space, Divider, } from 'antd';



function updateTreeData(list, key, children) {
  return list.map(node => {
    if (node.key === key) {
      return {
        ...node,
        children,
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children),
      };
    }
    return node;

  });
}
const Index = (props) => {
  let i = 0
  const [state, setState] = useState({})
  const ref = useRef(null)
  useEffect(() => {
    // console.log(treeData);
    console.log(ref);
    return () => {
      // i = 0
    }
  }, [state.treeData])
  const onChange = (e) => {
    console.log(e);

    setState((state) => {
      return {
        ...state,
        currentValue: e
      }

    })
  }
  const getCount = (value) => {
    console.log(value);
  }
  const onDropdownVisibleChange = (open) => {
    if (open && i === 0) {
      setTimeout(() => {
        setState(
          {
            treeData: [
              { title: '一级1', key: '0', value: '0', isLeaf: false },
              { title: '一级2', key: '1', value: '1', isLeaf: false },
              { title: '一级3', key: '2', value: '2', isLeaf: true },
            ],
            currentValue: []
          }
        )
      }, 500)
    } else {
      i += 1
    }
  }
  const onLoadData = (res) => {
    console.log('onLoadData', res);
    const { key, children } = res;
    return new Promise(resolve => {
      if (children) {
        resolve();
        return;
      }
      setTimeout(() => {
        setState(origin => (
          {
            treeData: updateTreeData(origin.treeData, key, [
              { title: 'Child Node', key: `${key}-0`, value: `${key}-0` },
              { title: 'Child Node', key: `${key}-1`, value: `${key}-1`, isLeaf: true },
            ]),
            currentValue: origin.currentValue
          }
        )

        );
        resolve();
      }, 500);

    });

  }

  const Node = true ? <TreeSelect
    dropdownRender={(originNode, props) => {
      if (!state.treeData?.length) {
        return <div style={{ textAlign: 'center', height: 50, marginTop: 20 }}>加载中...</div>
      }
      return originNode
    }}
    showSearch={false}
    value={state.currentValue}
    labelInValue
    allowClear
    multiple
    style={{ width: '100%' }}
    placeholder="Please select"
    treeData={state.treeData}
    onChange={onChange}
    loadData={onLoadData}
    onDropdownVisibleChange={onDropdownVisibleChange}
  />
    :
    <TreeSelect
      dropdownRender={(originNode, props) => {
        console.log(state.treeData);
        if (!state.treeData?.length) {
          return <div style={{ textAlign: 'center', height: 50, marginTop: 20 }}>加载中...</div>
        }
        return originNode
      }}
      showSearch={false}
      defaultValue={
        [
          {
            label: '一级',
            value: '0'
          },
          {
            label: '二级',
            value: '1'
          }
        ]
      }
      value={state.currentValue}
      labelInValue
      treeLine
      allowClear
      multiple
      style={{ width: '100%' }}
      placeholder="Please select"
      treeData={state.treeData}
      onChange={onChange}
      loadData={onLoadData}
      onDropdownVisibleChange={onDropdownVisibleChange}
    />

  return (
    <>
      {
        Node
      }
      <Divider />
      <Child ref={ref} getCount={getCount}></Child>
    </>
  )
}
export default Index




const HD = (props, ref) => {
  const [count, setCount] = useState(999)
  const inputRef = useRef(null)
  useImperativeHandle(ref, () => (
    {
      getLsit: function () {
        return count
      },
      count: count,
      input: inputRef?.current

    }
  ))

  useEffect(() => {
    props.getCount(count)
  }, [count])
  const handleBtnClick = () => {
    console.log('handleBtnClick');
    setCount(count + 1)
  }

  return <>
    <h1 >计数: {count}</h1>
    <input type="text" ref={inputRef} />
    <button onClick={handleBtnClick}>点击</button>
  </>
}
const Child = forwardRef(HD)
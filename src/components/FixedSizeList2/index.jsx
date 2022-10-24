/**
 * transform 方案
 * startIndex = Math.floor(scrollTop/itemHeight)
 * endIndex = startIndex + (clientHeight/itemHeight) - 1
 */
import { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';

function FixedSizeList({ containerHeight, itemHeight, itemCount, children }) {
  // children 语义不好，赋值给 Component
  const Component = children;
  const [scrollTop, setScrollTop] = useState(0); // 滚动高度
  const scrollTopC = useRef(scrollTop);
  scrollTopC.current = scrollTop;
  const contentHeight = itemHeight * itemCount; // 内容高度
  const scrollTopRef = useRef(null);

  // 需要渲染的 item 开始结束索引
  let startIdx = Math.floor(scrollTop / itemHeight);
  let endIdx = Math.floor((scrollTop + containerHeight) / itemHeight) - 1;

  console.log('startIdx', scrollTop / itemHeight, startIdx);

  // 上下额外多渲染3个 item，解决滚动时来不及加载元素出现短暂的空白区域的问题
  const paddingCount = 3;
  startIdx = Math.max(startIdx - paddingCount, 0); // 处理越界情况
  endIdx = Math.min(endIdx + paddingCount, itemCount - 1);
  const top = itemHeight * startIdx; // 第一个渲染 item 到顶部距离

  // 需要渲染的 items
  const items = [];
  for (let i = startIdx; i <= endIdx; i++) {
    items.push(<Component key={i} index={i} style={{ height: itemHeight }} />);
  }

  const run = (_step) => {
    requestAnimationFrame(() => {
      setScrollTop((item) => (item += _step));
      run(1);
    });
  };
  useEffect(() => {
    // run(1);
  }, []);

  // console.log('scrollTopRef.current.containerHeight',scrollTopRef.current.containerHeight);

  return (
    <div
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={(e) => {
        // 同步更新
        flushSync(() => {
          // console.log(' e.target.scrollTop', e.target.scrollTop);
          setScrollTop(e.target.scrollTop);
        });
      }}
    >
      <div style={{ height: contentHeight }}>
        <div
          ref={scrollTopRef}
          style={{
            transform: `translate(0px, ${top}px)`,
            // transition: `all .3s`,
          }}
        >
          {items}
        </div>
      </div>
    </div>
  );
}

export default FixedSizeList;

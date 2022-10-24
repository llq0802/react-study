import React from 'react';

const index = () => {
  const topBlankFill = userRef(null);

  topBlankFill.current = {
    // 起始索引就是缓冲区第一个元素的索引，索引为多少就代表前面有多少个元素
    paddingTop: `${startIndex * itemHeight}px`,
    // endIndex是缓冲区的最后一个元素，可能不在可视区内；用dataListRef数组最后一个元素的索引与endIndex相减就可以得到还没有渲染元素的数目
    paddingBottom: `${(dataListRef.current.length - 1 - endIndex) * itemHeight}px`,
  };

  // 计算容器最大容积数量
  // 滚动容器高度改变后执行的函数
  const changeHeight = useCallback(
    throttle(() => {
      // 容器高度，通过操作dom元素获取高度是因为它不一定是个定值
      curContainerHeight.current = containerRef.current.offsetHeight;
      // 列表最大数量，考虑到列表中顶部和底部可能都会出现没有展现完的item
      curViewNum.current = Math.ceil(curContainerHeight.current / itemHeight) + 1;
    }, 500),
    []
  );

  const scrollHandle = () => {
    // 注意这个对应的是可视区第一个元素的索引值，而不是第多少个元素
    let startIndex = Math.floor(containerRef.current.scrollTop / itemHeight); // itemHeight是列表每一项的高度
    // 优化：如果是用户滚动触发的，而且两次startIndex的值都一样，那么就没有必要执行下面的逻辑
    if (!isNeedLoad && lastStartIndex.current === startIndex) return;
    isNeedLoad.current = false;
    lastStartIndex.current = startIndex;
    const containerMaxSize = curViewNum.current;
    /**
     * 解决滑动过快出现的白屏问题：注意endIndex要在startIndex人为改变之前就计算好
     * 因为我们实际上需要三板的数据用于兼容低性能的设备，用做上下滚动的缓冲区域，避免滑动的时候出现白屏
     * 现在的startIndex是可视区的第一个元素索引，再加上2倍可视区元素量，刚好在下方就会多出一板来当做缓冲区
     */
    // 此处的endIndex是为了在可视区域的下方多出一板数据
    let endIndex = startIndex + 2 * containerMaxSize - 1;
    // 接近滚动到屏幕底部的时候，就可以请求发送数据了，这个时候触底的并不是可视区的最后一个元素，而是多出那一版的最后一个元素触底了
    const currLen = dataListRef.current.length;
    if (endIndex > currLen - 1) {
      // 更新请求参数，发送请求获取新的数据(但是要保证当前不在请求过程中，否则就会重复请求相同的数据)
      !isRequestRef.current && setOptions((state) => ({ offset: state.offset + 1 }));
      // 如果已经滚动到了底部，那么就设置endIndex为最后一个元素索引即可
      endIndex = currLen - 1;
    }
    // 此处的endIndex是为了在可视区域的上方多出一板数据
    // 这里人为的调整startIndex的值，目的就是为了能够在可视区域上方多出一板来当做缓冲区
    if (startIndex <= containerMaxSize) {
      // containerMaxSize是我们之前计算出来的容器容纳量
      startIndex = 0;
    } else {
      startIndex = startIndex - containerMaxSize;
    }
    // 使用slice方法截取数据，但是要记住第二个参数对应的索引元素不会被删除，最多只能删除到它的前一个，所以我们这里的endIndex需要加一
    setShowList(dataListRef.current.slice(startIndex, endIndex + 1));
  };

  useEffect(() => {
    // 组件第一次挂载需要初始化容器的高度以及最大容纳值
    changeHeight();
    // 因为我们的可视窗口和浏览器大小有关系，所以我们需要监听浏览器大小的变化
    // 当浏览器大小改变之后需要重新执行changeHeight函数计算当前可视窗口对应的最大容纳量是多少
    window.addEventListener('resize', changeHeight);
    return () => {
      window.removeEventListener('resize', changeHeight);
    };
  }, [changeHeight]);

  // 组件刚挂载以及下拉触底的时候请求更多数据
  useEffect(() => {
    (async () => {
      try {
        // 表明当前正处于请求过程中
        isRequestRef.current = true;
        const { offset } = options;
        let limit = 20;
        if (offset === 1) limit = 40;
        const {
          data: { comments, more },
        } = await axios({
          url: `http://localhost:3000/comment/music?id=${186015 - offset}&limit=${limit}&offset=1`,
        });
        isNeedLoad.current = more;
        // 将新请求到的数据添加到存储列表数据的变量当中
        dataListRef.current = [...dataListRef.current, ...comments];
        // 必选要在boxScroll之前将isRequestRef设为false，因为boxScroll函数内部会用到这个变量
        isRequestRef.current = false;
        // 请求完最新数据的时候需要重新触发一下boxScroll函数，因为容器内的数据、空白填充区域可能需要变化
        boxScroll();
      } catch (err) {
        isRequestRef.current = false;
        console.log(err);
      }
    })();
    // 在boxScroll函数里面，一旦发生了触底操作就会去改变optiosn的值
  }, [options]);

  let then = useRef(0);
  const boxScroll = () => {
    const now = Date.now();
    /**
     * 这里的等待时间不宜设置过长，不然会出现滑动到空白占位区域的情况
     * 因为间隔时间过长的话，太久没有触发滚动更新事件，下滑就会到padding-bottom的空白区域
     * 电脑屏幕的刷新频率一般是60HZ，渲染的间隔时间为16.6ms，我们的时间间隔最好小于两次渲染间隔16.6*2=33.2ms，一般情况下30ms左右，
     */
    if (now - then.current > 30) {
      then.current = now;
      // 重复调用scrollHandle函数，让浏览器在下一次重绘之前执行函数，可以确保不会出现丢帧现象
      window.requestAnimationFrame(scrollHandle);
    }
  };

  return (
    // 虚拟列表DOM结构
    <div className="container">
      {/* // 监听滚动事件的盒子，该高度继承了父元素的高度 */}
      <div className="scroll-box" ref={containerRef} onScroll={boxScroll}>
        {/* // 该盒子的高度一定会超过父元素，要不实现不了滚动的效果，而且还要动态的改变它的padding值用于控制滚动条的状态 */}
        <div style={topBlankFill.current}>
          {showList.map((item) => (
            <div className="item" key={item.commentId || Math.random() + item.comments}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './index.scss';
import { Form, Input, Modal, Button, Space } from 'antd';
import ReactSeamlessScroll from 'rc-seamless-scroll';
import { useRefState } from '../../hooks/useRefState';
import { useCallbackState } from '../../hooks/useCallbackState';
import { useLatest } from '../../hooks/useLatest';
import createTextImage, { TextImageOption } from 'text-to-image-video';
import worker_script from './worker';
const myWorker = new Worker(worker_script);

// import Player from 'xgplayer';
// import FlvJsPlayer from 'xgplayer-flv.js';
// import ReactSeamlessScroll from '../ReactSeamlessScroll';
const listData = [
  {
    title: '无缝滚动组件展示数据第1条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第2条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第3条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第4条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第5条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第6条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第7条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第8条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第9条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第10条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第11条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第12条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第13条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第14条',
    date: Date.now(),
  },
];
export default function Index() {
  const playerRef = useRef(null);
  const [count, setCount, countRef] = useRefState(0);
  console.log(' countRef', countRef);
  // const [count, setCount] = useCallbackState(0);
  // const [count, setCount] = useState(0);
  // const countRef = useLatest(count);
  const [visible, setVisible] = React.useState(false);

  const handleCountClick = async () => {
    await setCount(count + 1);
    // getUserInfo();
    console.log('立即countRef', countRef);
    console.log('立即count', count);
  };

  const onReady = () => {
    console.log('onReady');
  };
  function getUserInfo() {
    const params = {
      countRef: countRef,
      count: count,
      size: 10,
    };
    console.log('params', params);
  }

  useEffect(() => {
    myWorker.postMessage('我是主线程-worker');

    myWorker.addEventListener('message', function (event) {
      console.log('接收worker线程的消息 ', event.data);
    });

    window.addEventListener('resize', () => {
      // console.log('resize');
    });
    createTextImage({
      canvas: document.getElementById('demo'),
      source: {
        text: 'Text Image', // 绘制的文本是：Text Image
        fontFamily: 'Roboto Mono',
        fontSize: 100,
      },
    });
  }, []);

  // useEffect(() => {
  //   let player = new FlvJsPlayer({
  //     id: 'mse',
  //     playsinline: true,
  //     url: 'http://136.5.140.216:5018/pss/50010302031320000228_62a0635b60b2737c3f4e4421.flv',
  //   });
  // }, []);

  return (
    <div className="player-wrapper">
      <canvas id="demo" width={500} height={500} />

      <h1>count: {count}</h1>
      {/* <h1>countRef: {countRef}</h1> */}
      {/* <h1>latestCount: {latestCount}</h1> */}
      <Space>
        <button onClick={handleCountClick}>点击</button>
        <button onClick={getUserInfo}>请求</button>

        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          点击弹窗
        </Button>
      </Space>

      <ReactPlayer
        ref={playerRef}
        url="https://new.iskcd.com/20220312/fusUQfym/index.m3u8"
        // url='https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'

        // url='http://ivi.bupt.edu.cn/hls/cctv9.m3u8'
        // url="http://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.flv"
        // url="http://136.5.140.216:5018/pss/50010302031320000228_62a0686d60b27b2f60e05474.flv"
        // url="http://219.151.131.120:7998/play/50010302031320000229_9f13b78d39584be2b32231b3bda6dd3b.flv"
        width="100%"
        height="100%"
        controls
        playing
        light="/img.png"
        onReady={onReady}
        muted
        config={{
          file: {
            attributes: {
              style: {
                height: '100%',
                width: '100%',
                muted: true,
              },
            },
            forceFLV: true,
            forceVideo: true,
          },
        }}
      />
      <hr />

      <ChildModel visible={visible} setVisible={setVisible}></ChildModel>
      <hr />

      <h1>封装的无限滚动组件</h1>
      <hr />

      <ReactSeamlessScroll
        list={listData}
        step={1}
        singleHeight={22}
        hover
        wrapperClassName="scroll-wrapper"
        wrapperHeight={200}
      >
        {listData.map((item, index) => (
          <div key={index}>
            <span style={{ marginRight: 22 }}>{item.title}</span>
            <span>{item.date}</span>
          </div>
        ))}
      </ReactSeamlessScroll>
    </div>
  );
}

// https://new.iskcd.com/20220312/fusUQfym/index.m3u8
// url='https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'

// https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8

//http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd
function ChildModel({ visible, setVisible }) {
  const [form] = Form.useForm();
  const [count, setCount] = useState(0);
  React.useEffect(() => {
    if (visible) {
      form.setFieldsValue({ user: 'antd' });
    }
  }, [form, visible]);

  function onClose() {
    setVisible(false);
  }

  return (
    <Modal visible={visible} onOk={onClose} onCancel={onClose} destroyOnClose>
      <div onClick={() => setCount(count + 1)}>{count}</div>

      <Form form={form}>
        <Form.Item name="user">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

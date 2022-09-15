import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './index.scss';
// import Player from 'xgplayer';
// import FlvJsPlayer from 'xgplayer-flv.js';

import { useRefState } from '../../hooks/useRefState';
import { useLatest } from '../../hooks/useLatest';

import { Form, Input, Modal, Button } from 'antd';
import ReactSeamlessScroll from '../ReactSeamlessScroll';

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

  const latestCount = useLatest(count);

  const handleCountClick = () => {
    setCount(count + 1);
    // console.log('countRef', countRef);
  };
  const onReady = () => {
    console.log('onReady');
  };
  function getUserInfo() {
    const params = {
      page: latestCount,
      size: 10,
    };
    console.log('params', params);
  }

  // useEffect(() => {
  //   let player = new FlvJsPlayer({
  //     id: 'mse',
  //     playsinline: true,
  //     url: 'http://136.5.140.216:5018/pss/50010302031320000228_62a0635b60b2737c3f4e4421.flv',
  //   });
  // }, []);

  const [form] = Form.useForm();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (visible) {
      form.setFieldsValue({ user: 'antd' });
    }
  }, [visible]);

  function onClose() {
    setVisible(false);
  }

  return (
    // <div id="mse"></div>
    <div className="player-wrapper">
      <h1>count: {count}</h1>
      <h1>countRef: {countRef}</h1>
      <h1>latestCount: {latestCount}</h1>

      <button onClick={handleCountClick}>点击</button>
      <button onClick={getUserInfo}>请求</button>

      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        点击弹窗
      </Button>

      <Modal visible={visible} onOk={onClose} onCancel={onClose}>
        <Form form={form}>
          <Form.Item name="user">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
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

      <ReactSeamlessScroll list={listData} step={1} singleHeight={22} hover scrollClassName="scroll-wrapper">
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

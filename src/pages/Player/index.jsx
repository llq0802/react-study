import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './index.scss';
// import Player from 'xgplayer';
// import FlvJsPlayer from 'xgplayer-flv.js';
export default function Index() {
  const playerRef = useRef(null);

  const onReady = () => {
    console.log('onReady');
  };
  // useEffect(() => {
  //   let player = new FlvJsPlayer({
  //     id: 'mse',
  //     playsinline: true,
  //     url: 'http://136.5.140.216:5018/pss/50010302031320000228_62a0635b60b2737c3f4e4421.flv',
  //   });
  // }, []);

  return (
    // <div id="mse"></div>
    <div className="player-wrapper">
      <ReactPlayer
        // ref={playerRef}
        // url='https://new.iskcd.com/20220312/fusUQfym/index.m3u8'
        // url='https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'

        // url='http://ivi.bupt.edu.cn/hls/cctv9.m3u8'
        // url="http://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.flv"
        url="http://136.5.140.216:5018/pss/50010302031320000228_62a0686d60b27b2f60e05474.flv"
        width="100%"
        height="100%"
        controls
        playing
        light="/img.png"
        onReady={onReady}
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
          },
        }}
      />
    </div>
  );
}

// https://new.iskcd.com/20220312/fusUQfym/index.m3u8
// url='https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'

// https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8

//http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd

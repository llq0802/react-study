import React, { useRef } from 'react'
import ReactPlayer from 'react-player'
import './index.scss'





export default function index() {

  // const playerRef = useRef(null)

  const onReady = () => {
    console.log('onReady');
  }
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        // ref={playerRef}
        // url='https://new.iskcd.com/20220312/fusUQfym/index.m3u8'
        url='https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
        width='100%'
        height='100%'
        controls
        playing
        light='/img.png'
        onReady={onReady}
        config={{
          file: {
            attributes: {
              style: {
                height: "100%",
                width: "100%"
              },

            }
          }
        }}
      />
    </div>
  )
}
// https://new.iskcd.com/20220312/fusUQfym/index.m3u8
// url='https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'

// https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8

//http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd
import React, { useState, useEffect, useRef } from 'react';
import { Drawer, Button } from 'antd';
import * as echarts from 'echarts';
import userEvent from '@testing-library/user-event';
import axios from 'axios'
const Echarts = () => {
  let myChart = null
  let bar = useRef()
  let mapBox = useRef()
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState({
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '80%'],
        avoidLabelOverlap: false,
        itemStyle: {
          // color: (e) => {
          //   console.log(e.dataIndex);
          //   switch (e.dataIndex) {
          //     case 0:
          //       return 'black'
          //   }
          // },
          borderRadius: 0,
          borderWidth: 0
        },
        emptyCircleStyle: {

        },

        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold',
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  });

  const axiosFn = () => {
    // axios.get('https://api.oick.cn/lishi/api.php').then((res) => {
    //   console.log(res.data);
    // })

    fetch('https://api.oick.cn/lishi/api.php').then((res) => {
      res.json().then((e) => {
        console.log(e);
      })
    })
  }
  const wait = () => {
    return new Promise((resolve, reject) => {
      setVisible(true)
      resolve()
    })
  }
  const showDrawer = async () => {
    // setTimeout(() => {
    //  setVisible(true);
    //   if (bar?.current) myChart = echarts.init(bar.current);
    //   myChart.setOption(state)
    // })
    await wait()
    if (bar?.current) myChart = echarts.init(bar.current);
    myChart.setOption(state)
  };

  const onClose = () => {
    setVisible(false);
  };
  useEffect(() => {

    let mapChart = echarts.init(mapBox.current,);
    axios.get('/china.json').then((response) => {
      // console.log(response.data);
      echarts.registerMap('a', response.data)
      let options = {
        geo: {
          type: 'map',
          map: 'a',
          label: {
            show: true
          }
        },

      }
      console.log(mapChart);
      mapChart.setOption(options)
      mapChart.on('click', (e) => {
        console.log(e);
      })
    })

  }, [])


  useEffect(() => {
    window.onresize = () => {


      myChart && myChart.resize()
    }

    return () => {
      window.onresize = null
    }
  }, [myChart])

  return (
    <>
      <Button type="primary" onClick={axiosFn}>
        axios
      </Button>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>



      <div ref={mapBox} style={{
        width: '100%',
        height: '600px'
      }} ></div>

      <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible} width='60%'>
        <div ref={bar} style={{
          width: '100%',
          height: '400px'
        }}></div>
      </Drawer>
    </>
  );
};
export default Echarts
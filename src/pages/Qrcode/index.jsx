import React, { useState, useEffect, CSSProperty, useRef } from 'react';
import { Form, Input, Select, Tooltip, Button, Space, Typography, Row, Col, Divider } from 'antd';
import { QRCodeCanvas } from 'qrcode.react';



const Demo = () => {


  useEffect(() => {
    console.log(78978979);
  }, [])

  const downLoad = () => {
    const canvas = document.querySelector('.qrcode > canvas');
    const pngFile = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = pngFile;
    link.download = 'download.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <Space align='center' split={<Divider type="vertical" />}>
        <div className="qrcode" style={{ display: 'inline-block', }}>
          <QRCodeCanvas value='https://www.baidu.com/' size={100} // 二维码的大小
          />
        </div>
        <Button onClick={downLoad}>下载</Button>
      </Space>

    </>
  )

};
export default Demo;

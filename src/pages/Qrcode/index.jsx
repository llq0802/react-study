import React, { useState, useEffect, CSSProperty, useRef } from 'react';
import { Form, Input, Select, Tooltip, Button, Space, Typography, Row, Col, Divider, Drawer, Modal } from 'antd';
import { QRCodeCanvas } from 'qrcode.react';

const Demo = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log('Demo');
  }, []);

  const downLoad = () => {
    const canvas = document.querySelector('.qrcode > canvas');
    const pngFile = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = pngFile;
    link.download = 'download.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <>
      <Space align="center" split={<Divider type="vertical" />}>
        <div className="qrcode" style={{ display: 'inline-block' }}>
          <QRCodeCanvas
            value="https://www.baidu.com/"
            size={100} // 二维码的大小
          />
        </div>
        <Button onClick={downLoad}>下载</Button>
        <Button type="primary" onClick={showDrawer}>
          打开抽屉
        </Button>
      </Space>
      <MyDrawers visible={visible} setVisible={setVisible} />
    </>
  );
};
export default Demo;

const MyDrawers: React.FC = ({ visible, setVisible }) => {
  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    console.log('Drawers');
  }, []);
  return (
    <>
      <Modal
        title="Basic Drawer"
        // placement="right"
        // onClose={onClose}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        destroyOnClose
        forceRender
      >
        <Chilld></Chilld>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

const Chilld = () => {
  useEffect(() => {
    console.log('Chilld');
  }, []);

  return <p>Chilld Chilld Chilld...</p>;
};

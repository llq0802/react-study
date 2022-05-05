import React, { useState, useEffect, CSSProperty, useRef } from 'react';
import { Form, Input, Select, Tooltip, Button, Space, Typography, Row, Col } from 'antd';
import { QRCodeCanvas } from 'qrcode.react';

const { Option } = Select;


const Demo = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  useEffect(() => {

  }
    , [])
  const [form] = Form.useForm();
  const handleOk = () => {
    // console.log(form);
    form.setFieldsValue({
      month: 12,
      username: 'llq',
      year: 2000,
      address: {
        street: 777
      }
    })
    const res = form.getFieldsValue();
    console.log(res);


  };
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 }
  }

  useEffect(() => {

  }, [])
  const onValuesChange = (changedValues, allValues) => {
    console.log(changedValues, allValues);
    if (changedValues.username) {
      console.log(changedValues.username);
    }
  }

  const rowStyle = {
    marginBottom: 24
  }

  return (
    <><><Form
      name="complex-form"
      form={form}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      {...formItemLayout}
    >
      <Form.Item label="Username">
        <Form.Item
          name="username"
          extra={<span>123</span>}
          noStyle
          rules={[{ required: true, message: 'Username is required' }]}
        >
          <Inp></Inp>
        </Form.Item>

      </Form.Item>
      <Form.Item label="Address"
      >
        <Row align="middle">
          <Col span={12}>
            <Form.Item
              name={['address', 'province']}
              rules={[{ required: true, message: 'Province is required' }]}
              noStyle
            >
              <Select placeholder="Select province" multiple>
                <Option value="Zhejiang">Zhejiang</Option>
                <Option value="Jiangsu">Jiangsu</Option>
                <Option value="cq">cq</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={['address', 'street']}
              rules={[{ required: true, message: 'Street is required' }]}
              noStyle
            >
              <Input placeholder="Input street" />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
      <Item></Item>
      <Form.Item label=" " colon={false}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="primary" onClick={handleOk}>
            handleOk
          </Button>
        </Space>
      </Form.Item>
    </Form>
      <Row gutter={[0, 16]} style={rowStyle}>
        <Col span={12}>7777</Col>
        <Col span={12}>9999</Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>7777</Col>
        <Col span={12}>9999</Col>
      </Row></><Row gutter={[16, 16]}>
        <Col span={24}>
          <div className="qrcode">
            <QRCodeCanvas value='https://www.baidu.com/' size={100} // 二维码的大小
            />
          </div>


        </Col>
      </Row>

    </>
  );
};
export default Demo;

function Inp(props) {
  const { onChange, value } = props;
  const handleOk = (e) => {
    onChange && onChange(e.target.value)
  }
  return (
    <Row align='middle' gutter={[16, 64]}>
      <Col span={12}>
        <Input placeholder="Please input" onChange={handleOk} value={value} defaultValue={value} />
      </Col>
      <Col span={12}>
        <Tooltip title="Useful information">
          <Typography.Link href="#API">Need Help?</Typography.Link>
        </Tooltip>
      </Col>
    </Row>


  )

}

function Item(props) {
  console.log('Item');
  return (
    <Form.Item required label="BirthDate" help={<span>提示</span>} style={{ marginBottom: 0 }}>
      <Form.Item
        name="year"
        rules={[{ required: true }]}
        style={{ display: 'inline-block', width: 'calc(48% )' }}
      >
        <Input placeholder="Input birth year" />
      </Form.Item>
      <div style={{ display: 'inline-block', width: 'calc(4%)', textAlign: 'center' }}>-</div>
      <Form.Item
        name="month"
        rules={[{ required: true }]}
        style={{ display: 'inline-block', width: 'calc(48% )' }}
      >
        <Input placeholder="Input birth month" />
      </Form.Item>
    </Form.Item>

  )

}


/**
 * 获取上一次的值
 * @param {*} value 
 * @returns 
 */
function usePreValue(value) {
  const valueRef = useRef(null)
  useEffect(() => {
    valueRef.current = value
  }, [value])
  return valueRef.current
}




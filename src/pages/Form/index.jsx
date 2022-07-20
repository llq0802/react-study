import React, { useState, useEffect, CSSProperty, useRef, Component } from 'react';
import { Form, Input, Select, Tooltip, Button, Space, Typography, Row, Col, Checkbox } from 'antd';
import { QRCodeCanvas } from 'qrcode.react';
import request from 'umi-request';

const { Option } = Select;

const options = [
  { label: '111', value: '1' },
  { label: '222', value: '2' },
  { label: '333', value: '3' },
];
const Demo = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const errorHandler = function (error) {
    const codeMap = {
      '021': '发生错误啦',
      '022': '发生大大大大错误啦',
      // ....
    };
    if (error.response) {
      // 请求已发送但服务端返回状态码非 2xx 的响应
      console.log(error.response.status);
      console.log(error.response.headers);
      console.log(error.data);
      console.log(error.request);
      console.log(codeMap[error.data.status]);
    } else {
      // 请求初始化时出错或者没有响应返回的异常
      console.log(error.message);
    }

    throw error; // 如果throw. 错误将继续抛出.

    // 如果return, 则将值作为返回. 'return;' 相当于return undefined, 在处理结果时判断response是否有值即可.
    // return {some: 'data'};
  };


  const [form] = Form.useForm();
  const handleOk = () => {


    request('https://www.apiopen.top/journalismApi', {
      method: 'get',
      getResponse: true,
      errorHandler,
    }).then(function (response) {
      console.log(response);
    })
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
    // console.log(changedValues, allValues);
    if (changedValues.username) {
      console.log(changedValues.username);
    }
  }

  const rowStyle = {
    marginBottom: 24
  }
  const getValueFromEvent = (args: any[], i) => {
    console.log('getValueFromEvent', args, i);
    if (args.some(val => val === '1')) {
      return ['1', '2'];
    }
    if (args.some(val => val === '3')) {
      return ['3', '2'];
    }

    return args;
  }
  return (
    <>


      <Form
        name="complex-form"
        form={form}
        onFinish={onFinish}
        onValuesChange={onValuesChange}
        {...formItemLayout}
      >
        <Form.Item
          name="username"
          label="Username"
          extra={<span>123</span>}
          noStyle
          rules={[{ required: true, message: 'Username is required' }]}
        >
          <CustomInp></CustomInp>
        </Form.Item>


        <MyCheckbox></MyCheckbox>
        {/* <Form.Item name="gender" label="Gender" rules={[{ required: true }]} getValueFromEvent={getValueFromEvent}>
          <Select
            placeholder="Select a option and change input text above"
            mode='multiple'
            allowClear
          >
            <Option value="0">11</Option>
            <Option value="1">22</Option>
            <Option value="2">33</Option>
          </Select>
        </Form.Item> */}

        <Form.Item name="gender" label="Gender" rules={[{ required: true }]} getValueFromEvent={getValueFromEvent}>
          <Checkbox.Group options={options} />

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

        <FromItem></FromItem>




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
      </Row><Row gutter={[16, 16]}>
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

function CustomInp(props) {
  console.log('CustomInp', props);
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




function FromItem(props) {
  console.log('FromItem', props);
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




/**
 * checkout多选，最多选中两个，其余选项不可点击；取消选中后的项，所有选项可点击
 */


export class MyCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { label: '杨梅', value: '杨梅', disabled: false },
        { label: '椰汁拿铁', value: '椰汁拿铁', disabled: false },
        { label: '草莓', value: '草莓', disabled: false },
        { label: '寿喜锅', value: '寿喜锅', disabled: false },
        { label: '柠檬', value: '柠檬', disabled: false },
        { label: '雪碧', value: '雪碧', disabled: false },
      ],
    }
  }

  onChange = (checkedList) => {
    const { options } = this.state;
    let valueList = options.map(item => item.value);
    let disList = [];

    valueList.forEach(item => {
      if (!checkedList.includes(item)) {
        disList.push(item);
      }
    });
    console.log(disList);
    if (checkedList.length === 2) {
      for (let i in options) {
        for (let j in disList) {
          if (options[i].value === disList[j]) {
            console.log(i, j);
            options[i].disabled = true;
          }
        }
      }
    } else {
      for (let i in options) {
        options[i].disabled = false;
      }
    }
  }

  render() {
    const { options } = this.state;
    return (<div >
      <Checkbox.Group
        options={options}
        onChange={this.onChange}
      />
    </div>)
  }
}


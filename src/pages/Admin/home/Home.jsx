import React, { useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { LCaptchaButton, LModalForm, LFormItemInput, LFormItemRadio, LForm } from 'lighting-design';
import {
  Card,
  Col,
  Row,
  Divider,
  List,
  Typography,
  PageHeader,
  Space,
  Upload,
  Button,
  Popconfirm,
  Steps,
  message,
} from 'antd';
const { Step } = Steps;
export default function Home() {
  useEffect(() => {
    // console.log(window.print());
    document.oncopy = (event) => {
      console.log(event);
    };
  }, []);
  const [form] = LForm.useForm();
  return (
    <>
      <LCaptchaButton type="primary" disabledText="重新获取" cacheKey="__CaptchaButton__Phone__2">
        获取手机验证码
      </LCaptchaButton>
      <LModalForm
        isDraggable
        form={form}
        title="弹窗"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          message.success('提交成功');
          return true;
        }}
        trigger={<Button type="primary">打开弹窗</Button>}
      >
        <LFormItemInput name="input" required label="输入框" />
        <LFormItemRadio
          label="单选2"
          name="LFormItemRadio2"
          all
          required
          options={[
            { label: 'Unresolved', value: 'open' },
            { label: 'Resolved', value: 'closed' },
            { label: 'Resolving', value: 'processing' },
          ]}
        />
      </LModalForm>
      <PageHeader className="site-page-header" onBack={() => null} title="Title" subTitle="This is a subtitle" />
      <Space size="small" style={{ width: '100%' }}>
        <span>Space</span>
        <Button type="primary">Button</Button>
        <Upload>
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>
        <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
          <Button>Confirm</Button>
        </Popconfirm>
      </Space>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Card title="Card" style={{ width: '100%' }}>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card" style={{ width: '100%' }}>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
      <Divider plain>Text</Divider>
      <Row gutter={[10, 10]}>
        <Col span={8}>
          <Card title="Card title" bordered>
            <List
              bordered
              dataSource={[111, 222, 333]}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text mark>[ITEM]</Typography.Text> {item}
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title">Card content</Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered>
            Card content
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Card title" bordered>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered>
            Card content
          </Card>
        </Col>
      </Row>
      <Steps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
      ,
    </>
  );
}

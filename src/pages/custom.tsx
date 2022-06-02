import React, { useContext, useState } from 'react';
import { Modal, Form, Button, Space, ConfigProvider, FormProps, Input } from 'antd';
import moment from 'moment';

const FormWrap = (props: FormProps & { onCancel?: () => void }) => {
  const { onCancel, onFinish, children, ...rest } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls();

  const handleOnFinish = async (values: Record<string, any>) => {
    await onFinish?.(values);
    onCancel?.();
  };

  return (
    <Form onFinish={handleOnFinish} {...rest}>
      <div className={`${prefixCls}-modal-body`}>{children}</div>
      <div className={`${prefixCls}-modal-footer`}>
        <Button onClick={onCancel}>取消</Button>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </div>
    </Form>
  );
};

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Space>
      <Button onClick={() => setVisible(true)}>打开</Button>
      <Modal title="标题" visible={visible} destroyOnClose footer={null} bodyStyle={{ padding: 0 }}>
        <FormWrap
          initialValues={{ date: moment().format('YYYY-MM-DD hh:mm:ss') }}
          onFinish={(values) => console.log('values', values)}
          onCancel={() => setVisible(false)}
        >
          <Form.Item name="date" label="时间">
            <Input />
          </Form.Item>
        </FormWrap>
      </Modal>
    </Space>
  );
};
export default Demo;

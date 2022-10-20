import React, { useEffect } from 'react';
import { Form, Input, InputNumber, Typography, Button } from 'antd';

const Demo = () => {
  const [form] = Form.useForm<{ name: string; age: number }>();
  const nameValue = Form.useWatch('name', form);
  console.log('组件更新', nameValue);
  useEffect(() => {
    console.log('useEffect', nameValue);
  }, []);

  const getForm = () => {
    const fields = form.getFieldsValue();

    console.log('fields', fields);
  };

  const setForm = () => {
    form.setFieldsValue({
      name: '李岚清',
    });
    const fields = form.getFieldsValue();

    console.log('fields', fields);
  };

  const onFieldsChange = (changedFields, allFields) => {
    // console.log('onFieldsChange', changedFields);
  };

  const onValuesChange = (changedValues, allFields) => {
    // console.log('onValuesChange', changedValues);-
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        preserve={false}
        onFieldsChange={onFieldsChange}
        onValuesChange={onValuesChange}
      >
        <Form.Item name="name" label="Name (Watch to trigger rerender)">
          <Input />
        </Form.Item>

        <Form.Item name="age" label="Age (Not Watch)">
          <InputNumber />
        </Form.Item>

        {nameValue === '99' ? (
          <Form.Item name="id" label="ID (Not Watch)">
            <Input />
          </Form.Item>
        ) : null}

        <Form.Item name="password" label="Password">
          <Input />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Dependencies></Dependencies>
        </Form.Item>
      </Form>

      <Typography>
        <pre>Name Value: {nameValue}</pre>
      </Typography>

      <Typography>
        <pre>Name AGE: {form.getFieldValue('age')}</pre>
      </Typography>

      <Button onClick={getForm}>获取</Button>

      <Button onClick={setForm}>更新</Button>
    </>
  );
};

export default Demo;

const Dependencies = (props) => {
  console.log('Dependencies-props ', props);
  return <Input.Password />;
};

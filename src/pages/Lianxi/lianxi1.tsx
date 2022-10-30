import React, { useEffect } from 'react';
import { Form, Input, InputNumber, Typography, Button } from 'antd';

const Demo = () => {
  const [form] = Form.useForm();
  const addressValue = Form.useWatch('address', form);

  console.log('Form组件更新了');

  const getForm = () => {
    // const fields = form.getFieldsValue();
    // console.log('fields', fields);
  };

  const setForm = () => {
    form.setFieldsValue({
      // name: '李岚清',
      // age: 25,
      password: 123,
      // confirmpassword: 999,
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
        onFieldsChange={onFieldsChange}
        onValuesChange={onValuesChange}
      >
        <Form.Item name="name" label="Name (shouldUpdate)">
          <Input />
        </Form.Item>

        <Form.Item name="age" label="Age (dependencies)">
          <Input type="number" />
        </Form.Item>

        <Form.Item name="address" label="Address (Use Watch)">
          <Input />
        </Form.Item>

        <Form.Item name="password" label="Password">
          <Input />
        </Form.Item>

        <Form.Item
          name="confirmpassword"
          label="ConfirmPassword (自定义FormItem)"
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
          <Component />
        </Form.Item>

        <Form.Item dependencies={['age']}>
          {(formInstance) => {
            console.log('dependencies', formInstance);
            return 'dependencies';
          }}
        </Form.Item>

        <Form.Item shouldUpdate={(prevValues, curValues) => prevValues.name !== curValues.name}>
          {(formInstance) => {
            console.log('shouldUpdate', formInstance);
            return 'shouldUpdate';
          }}
        </Form.Item>
      </Form>

      <Typography>
        <pre>addressValue Value: {addressValue}</pre>
      </Typography>

      <Button onClick={setForm}>更新</Button>
    </>
  );
};

const Component = (props) => {
  const { value, onChange } = props;
  console.log('自定义FormItem ');
  return <Input value={value} onChange={onChange} defaultValue={value} />;
};

export default Demo;

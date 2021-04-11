import { Form } from 'antd'
import { TypesManager } from '../../types'
import { UserOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { 
    span: 8 
  },
  wrapperCol: { 
    span: 16 
  }
};
const tailLayout = {
  wrapperCol: { 
    offset: 8, 
    span: 16 
  }
};

let config = {
    labelCol: 6,
    submit: {
        style: {
            marginRight: 16,
        },
    },
    reset: true,
    submitSuccessBehavior: {
        route: '/data-table',
    },
    style: {
        width: '400px',
    },
    fields: [
        {
            property: 'name',
            label: '自定义名称',
            className: 'lulalala',
            colon: false,
            hasFeedback: true,
            extra: '这是 extra 文本',
        }
    ]
}

export default function CreateForm() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
        <Form.Item
            label="用户名"
            name="username"
            rules={[
                { required: true, message: 'Please input your username!' }
            ]}
        >
          {
              TypesManager.get('string').getControlComponent({
                prefix: <UserOutlined />
              })
          }
      </Form.Item>
      <Form.Item
            label="用户名"
            name="username1"
            rules={[
                { required: true, message: 'Please input your username!' }
            ]}
        >
          {
              TypesManager.get('select').getControlComponent({
                prefix: <UserOutlined />,
                options: [
                    {
                        id: 1,
                        name: '你好'
                    }
                ]
              })
          }
      </Form.Item>
    </Form>
  )
}
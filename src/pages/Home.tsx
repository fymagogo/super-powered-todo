import { Form, Input, Checkbox, Button } from 'antd';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LogInBody } from '../utilities/interfaces';

const baseURL = 'https://superpoweredtodo.herokuapp.com';

export default class Home extends React.Component {
    onFinish = async (values: LogInBody) => {
        try {
            await axios
                .post(
                    `${baseURL}/api/signup`,
                    {
                        email: values.email,
                        password: values.password,
                    },
                    {
                        headers: {
                            'access-control-allow-origin': '*',
                        },
                    },
                )
                .then((response) => {
                    console.log(response);
                });
        } catch (error) {
            console.log(error);
        }
    };

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <Fragment>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
                <div>
                    <Link to={'/signup'}>
                        <Button type="primary">SignUp</Button>
                    </Link>
                </div>
            </Fragment>
        );
    }
}

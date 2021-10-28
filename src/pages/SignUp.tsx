import { Form, Input, Button } from 'antd';
import React, { Fragment } from 'react';
import axios from 'axios';
import { SignUpBody } from '../utilities/interfaces';

const baseURL = 'https://superpoweredtodo.herokuapp.com';

export default class SignUp extends React.Component {
    onFinish = async (values: SignUpBody) => {
        try {
            await axios
                .post(
                    `${baseURL}/api/signup`,
                    {
                        name: values.name,
                        email: values.email,
                        password: values.password,
                        confirmPassword: values.confirm,
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
        // try {
        //     const response = await
        // }catch(error){

        // }
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
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
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
                                    return Promise.reject(
                                        new Error('The two passwords that you entered do not match!'),
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            SignUp
                        </Button>
                    </Form.Item>
                </Form>
            </Fragment>
        );
    }
}

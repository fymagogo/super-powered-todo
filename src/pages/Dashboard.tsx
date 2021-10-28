import { ColumnsType } from "antd/lib/table";
import Table from "rc-table/lib/Table";
import React, { Fragment } from "react";
import { ToDo } from "../utilities/interfaces";

const mockTodos: ToDo[] = [];

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
    },
];

export default class Dashboard extends React.Component {
    render() {
        return (
            <Fragment>
                <Table columns={columns} dataSource={mockTodos} />
            </Fragment>
        );
    }
}

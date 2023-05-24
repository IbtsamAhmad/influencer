import React from "react";
import { Row, Col, Input, Button, Checkbox } from "antd";
import Table from "../../Components/Table";
import { ReactComponent as View } from "../../assets/icons/View.svg";
import { ReactComponent as Dots } from "../../assets/icons/Dots.svg";
import { ReactComponent as Sort } from "../../assets/icons/Sort.svg";

import { ReactComponent as AddIcon } from "../../assets/icons/AddIcon.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/EditIcon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/DeleteIcon.svg";

const columns = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    align: "center",
  },
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    align: "center",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    align: "center",
  },

  {
    title: "Admin",
    dataIndex: "admin",
    key: "admin",
    align: "center",
    render: (text) => (
      <>
        <Checkbox />
      </>
    ),
  },
  {
    title: "Tester",
    dataIndex: "tester",
    key: "tester",
    align: "center",
    render: (text) => (
      <>
        <Checkbox />
      </>
    ),
  },

  {
    title: "Edit",
    dataIndex: "edit",
    key: "edit",
    align: "center",
    render: (text) => (
      <>
        <EditIcon />
      </>
    ),
  },
  {
    title: "Remove",
    dataIndex: "remove",
    key: "remove",
    align: "center",
    render: (text) => (
      <>
        <DeleteIcon />
      </>
    ),
  },
];
const data = [
  {
    key: "1",
    firstName: "Content",
    lastName: "Content",
    email: "Content",
    edit: "",
    remove: "",
    admin: "",
    Tester: "",
  },
  {
    key: "2",
    firstName: "Content",
    lastName: "Content",
    email: "Content",
    edit: "",
    remove: "",
    admin: "",
    Tester: "",
  },
  {
    key: "3",
    firstName: "Content",
    lastName: "Content",
    email: "Content",
    edit: "",
    remove: "",
    admin: "",
    Tester: "",
  },
  {
    key: "4",
    firstName: "Content",
    lastName: "Content",
    email: "Content",
    edit: "",
    remove: "",
    admin: "",
    Tester: "",
  },
  {
    key: "5",
    firstName: "Content",
    lastName: "Content",
    email: "Content",
    edit: "",
    remove: "",
    admin: "",
    Tester: "",
  },
  {
    key: "6",
    firstName: "Content",
    lastName: "Content",
    email: "Content",
    edit: "",
    remove: "",
    admin: "",
    Tester: "",
  },
  {
    key: "7",
    firstName: "Content",
    lastName: "Content",
    email: "Content",
    edit: "",
    remove: "",
    admin: "",
    Tester: "",
  },
];
const Users = () => {
  return (
    <div className="admin-container">
      <Row>
        <Col lg={18}>
          <h1>Users</h1>
        </Col>
        <Col lg={6}>
          <div className="icons">
            <div className="icon">
              <Sort />
              <p>Sort</p>
            </div>
            <div className="icon">
              <View />
              <p>View</p>
            </div>

            <Dots />
          </div>
        </Col>
      </Row>
      <div style={{ marginTop: "20px" }}>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Users;

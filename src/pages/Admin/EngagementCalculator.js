import React from "react";
import { Row, Col, Input, Button } from "antd";
import Table from "../../Components/Table";
import { ReactComponent as View } from "../../assets/icons/View.svg";
import { ReactComponent as Dots } from "../../assets/icons/Dots.svg";
import { ReactComponent as Sort } from "../../assets/icons/Sort.svg";

import { ReactComponent as AddIcon } from "../../assets/icons/AddIcon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/DeleteIcon.svg";

const columns = [
  {
    title: "Instagram user Name",
    dataIndex: "name",
    key: "name",
    align: "center",
    render: (text) => <>{text}</>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    align: "center",
  },
  {
    title: "Followers Count",
    dataIndex: "followers",
    key: "followers",
    align: "center",
  },

  {
    title: "Add",
    dataIndex: "add",
    key: "add",
    align: "center",
    render: (text) => (
      <>
        <AddIcon />
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
    name: "Content",
    email: "Content",
    followers: "Content",
    add: "",
    delete: "",
  },
  {
    key: "2",
    name: "Content",
    email: "Content",
    followers: "Content",
    add: "",
    delete: "",
  },
  {
    key: "3",
    name: "Content",
    email: "Content",
    followers: "Content",
    add: "",
    delete: "",
  },
  {
    key: "4",
    name: "Content",
    email: "Content",
    followers: "Content",
    add: "",
    delete: "",
  },
  {
    key: "5",
    name: "Content",
    email: "Content",
    followers: "Content",
    add: "",
    delete: "",
  },
  {
    key: "6",
    name: "Content",
    email: "Content",
    followers: "Content",
    add: "",
    delete: "",
  },
  {
    key: "7",
    name: "Content",
    email: "Content",
    followers: "Content",
    add: "",
    delete: "",
  },
];
const EngagementCalculator = () => {
  return (
    <div className="admin-container">
      <Row>
        <Col lg={18}>
          <h1>Engagement Calculator</h1>
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

export default EngagementCalculator;

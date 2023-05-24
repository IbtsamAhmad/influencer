import React from "react";
import { Row, Col, Input, Button } from "antd";
import Table from "../../Components/Table";
import { ReactComponent as View } from "../../assets/icons/View.svg";
import { ReactComponent as Dots } from "../../assets/icons/Dots.svg";
import { ReactComponent as Sort } from "../../assets/icons/Sort.svg";

const columns = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    align: "center",
    render: (text) => (
      <>
        <Input placeholder="Input Text" className="table-input" />
      </>
    ),
  },
  {
    title: "Influencer Username",
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: "Category",
    dataIndex: "content",
    key: "content",
    align: "center",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "Country",
    align: "center",
  },
  {
    title: "Add Influencer",
    dataIndex: "add",
    key: "add",
    align: "center",
    render: (text) => (
      <>
        <Button className="table-btn">Add</Button>
      </>
    ),
  },
  {
    title: "Delete Influencer",
    dataIndex: "delete",
    key: "delete",
    align: "center",
    render: (text) => (
      <>
        <Button className="table-btn">Delete</Button>
      </>
    ),
  },
];
const data = [
  {
    key: "1",
    email: "",
    name: "Content",
    category: "Content",
    content: "Content",
    country: "Content",
    add: "",
    delete: "",
  },
  {
    key: "2",
    email: "",
    name: "Content",
    category: "Content",
    content: "Content",
    country: "Content",
    add: "",
    delete: "",
  },
  {
    key: "3",
    email: "",
    name: "Content",
    category: "Content",
    content: "Content",
    country: "Content",
    add: "",
    delete: "",
  },
  {
    key: "4",
    email: "",
    name: "Content",
    category: "Content",
    content: "Content",
    country: "Content",
    add: "",
    delete: "",
  },
  {
    key: "5",
    email: "",
    name: "Content",
    category: "Content",
    content: "Content",
    country: "Content",
    add: "",
    delete: "",
  },
  {
    key: "6",
    email: "",
    name: "Content",
    category: "Content",
    content: "Content",
    country: "Content",
    add: "",
    delete: "",
  },
  {
    key: "7",
    email: "",
    name: "Content",
    category: "Content",
    content: "Content",
    country: "Content",
    add: "",
    delete: "",
  },
  {
    key: "8",
    email: "",
    name: "Content",
    category: "Content",
    content: "Content",
    country: "Content",
    add: "",
    delete: "",
  },
  {
    key: "9",
    email: "",
    name: "Content",
    category: "Content",
    content: "Content",
    country: "Content",
    add: "",
    delete: "",
  },
];
const Admin = () => {
  return (
    <div className="admin-container">
      <Row>
        <Col lg={18}>
          <h1>Influencers on System</h1>
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
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Admin;

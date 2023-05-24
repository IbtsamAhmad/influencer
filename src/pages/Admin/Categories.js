import React from "react";
import { Row, Col, Input, Button } from "antd";
import Table from "../../Components/Table";
import { ReactComponent as View } from "../../assets/icons/View.svg";
import { ReactComponent as Dots } from "../../assets/icons/Dots.svg";
import { ReactComponent as Sort } from "../../assets/icons/Sort.svg";

const columns = [
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    align: "center",
    render: (text) => (
      <>
        <Input placeholder="Input Text" className="table-input" />
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
        <Button className="table-btn">Edit</Button>
      </>
    ),
  },
];
const data = [
  {
    key: "1",
    category: "",
    edit: "",
  },
  {
    key: "2",
    category: "",
    edit: "",
  },
  {
    key: "3",
    category: "",
    edit: "",
  },
  {
    key: "4",
    category: "",
    edit: "",
  },
  {
    key: "5",
    category: "",
    edit: "",
  },
  {
    key: "6",
    category: "",
    edit: "",
  },
  {
    key: "7",
    category: "",
    edit: "",
  },
];
const Categories = () => {
  return (
    <div className="admin-container">
      <Row>
        <Col lg={18}>
          <h1>Influencers Categories</h1>
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
      <Button className="add-btn">Add new Category</Button>
      <div style={{ marginTop: "20px" }}>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Categories;

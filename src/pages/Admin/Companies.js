import React from "react";
import { Row, Col, Input, Button } from "antd";
import Table from "../../Components/Table";
import { ReactComponent as View } from "../../assets/icons/View.svg";
import { ReactComponent as Dots } from "../../assets/icons/Dots.svg";
import { ReactComponent as Sort } from "../../assets/icons/Sort.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/EditIcon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/DeleteIcon.svg";

const columns = [
  {
    title: "Company Name",
    dataIndex: "name",
    key: "name",
    align: "center",
    render: (text) => <>{text}</>,
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
    name: "Content",
    edit: "",
    delete: "",
  },
  {
    key: "2",
    name: "Content",
    edit: "",
    delete: "",
  },
  {
    key: "3",
    name: "Content",
    edit: "",
    delete: "",
  },
  {
    key: "4",
    name: "Content",
    edit: "",
    delete: "",
  },
  {
    key: "5",
    name: "Content",
    edit: "",
    delete: "",
  },
  {
    key: "6",
    name: "Content",
    edit: "",
    delete: "",
  },
  {
    key: "7",
    name: "Content",
    edit: "",
    delete: "",
  },
];
const Companies = () => {
  return (
    <div className="admin-container">
      <Row>
        <Col lg={18}>
          <h1>Companies using our Software</h1>
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
      <Button className="add-btn">Add new Company</Button>
      <div style={{ marginTop: "20px" }}>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Companies;

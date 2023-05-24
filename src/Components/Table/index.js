import { Table, } from "antd";
import "./table.scss";

const TableComponent = ({ columns, dataSource }) => (
  <Table columns={columns} dataSource={dataSource} pagination={false} bordered/>
);

export default TableComponent;

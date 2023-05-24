import { Input, Badge, Avatar, Row, Col, Popover } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import { ReactComponent as Start } from "assets/svgs/Start.svg";
// import { ReactComponent as NavSearch } from "assets/svgs/NavSearch.svg";
// import { ReactComponent as Web } from "assets/svgs/Web.svg";
 import { ReactComponent as Bell } from "../../assets/icons/Bell.svg";
  import { ReactComponent as Remix } from "../../assets/icons/remix-question.svg";

// import Bell  from "../../assets/icons/Bell.svg";

import "./Header.scss";

const content = (
  <div className="header-notifications-content">
    <div className="notification">
      <h1>Account verified</h1>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable.
      </p>
      <span>Today at 9:42 AM</span>
    </div>
    <div className="notification">
      <h1>Account verified</h1>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable.
      </p>
      <span>Today at 9:42 AM</span>
    </div>
    <div className="notification">
      <h1>Account verified</h1>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable.
      </p>
      <span>Today at 9:42 AM</span>
    </div>
    <div className="header-footer-line" />
  </div>
);

const Header = () => {
  return (
    <div className="header-container">
      <Row align="middle">
        <Col
          xl={16}
          xxl={17}
          xs={{
            span: 24,
            order: 3,
          }}
          sm={{
            span: 24,
            order: 3,
          }}
          lg={{
            span: 16,
            order: 2,
          }}
          md={{
            span: 24,
            order: 3,
          }}
        >
          <div className="header-search">
            <Input placeholder="Search" prefix={<SearchOutlined />} />
          </div>
        </Col>
        <Col
          md={{
            span: 16,
            order: 2,
          }}
          xs={{
            span: 16,
            order: 2,
          }}
          lg={{
            span: 6,
            order: 3,
          }}
          sm={{
            span: 16,
            order: 2,
          }}
        >
          <div className="header-col-two">
            <div className="language">
              <Remix />
            </div>
            <div className="badge-icon">
              <Popover
                placement="bottom"
                content={content}
                title={
                  <div className="header-notifications-title">
                    <Bell />
                    Notifications
                  </div>
                }
                trigger="click"
              >
                <Badge count={1}>
                  <Bell />
                </Badge>
              </Popover>
            </div>

            {/* <Link to={"/dashboard/profile"}> */}
            <Avatar src="/assets/images/I.jpg" />
            {/* </Link> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;

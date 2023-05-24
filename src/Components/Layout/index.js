import { useState } from "react";
import {  Layout, } from "antd";
 import AppHeader from "../Header/Header";
import Sidebar from "../Sidebar";

const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout = ({ children, defaultSelectedKeys }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo-container">
         <img src="/assets/images/logo.png" alt="logo"/>
         <div>
          <h1>Influencer Searcher</h1>
          <p>Hey User!</p>
         </div>
        </div>
        <Sidebar defaultSelectedKeys={defaultSelectedKeys} />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
          }}
        >
          <AppHeader />
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          All rights reserved ©2023
        </Footer>
      </Layout>
    </Layout>
    // <Layout style={{ paddingTop: "0" }} className="layout-container">
    //
    //   <Layout>
    //     <Sider trigger={null} collapsible collapsed={collapsed}>
    //       <div>
    //         <h1>Logo</h1>
    //       </div>
    //       <Sidebar setCollapsed={setCollapsed}/>
    //     </Sider>
    //     <Layout style={{ paddingTop: "0" }}>
    //       <Content
    //         style={{
    //           margin: "0px 23px",
    //         }}
    //       >
    //         {children}
    //       </Content>
    //     </Layout>
    //   </Layout>
    // </Layout>
  );
};

export default DashboardLayout;

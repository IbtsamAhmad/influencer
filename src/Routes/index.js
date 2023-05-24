import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "../pages/Admin/Admin";
import Categories from "../pages/Admin/Categories";
import Layout from "../Components/Layout";
import Companies from "../pages/Admin/Companies";
import EngagementCalculator from "../pages/Admin/EngagementCalculator";
import Users from "../pages/Admin/Uers";
import BrandedPosts from "../pages/Admin/BrandedPosts";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout defaultSelectedKeys={"1"}>
              <Admin />
            </Layout>
          }
        />
        <Route
          path="/categories"
          element={
            <Layout defaultSelectedKeys={"11"}>
              <Categories />
            </Layout>
          }
        />
        <Route
          path="/companies"
          element={
            <Layout defaultSelectedKeys={"12"}>
              <Companies />
            </Layout>
          }
        />
        <Route
          path="/engagement-calculator"
          element={
            <Layout defaultSelectedKeys={"13"}>
              <EngagementCalculator />
            </Layout>
          }
        />
        <Route
          path="/users"
          element={
            <Layout defaultSelectedKeys={"14"}>
              <Users />
            </Layout>
          }
        />
        <Route
          path="/branded-posts"
          element={
            <Layout defaultSelectedKeys={"14"}>
              <BrandedPosts />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

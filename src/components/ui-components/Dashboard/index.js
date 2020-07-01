import React from "react";
import { Layout } from "antd";

import "./Dashboard.css";

import Header from "../Header";
import Footer from "../Footer";
import CostEstimationForm from "../../CostEstimationForm";

const { Content } = Layout;

export default () => {
  return (
    <Layout className="cost-estimation-container">
      <Header />
      <Content>
        <CostEstimationForm />
      </Content>
      <Footer />
    </Layout>
  );
};

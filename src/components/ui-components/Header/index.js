import React from "react";
import CalculatorImg from "../../../assets/Dashboard/calculator.png";

import "./Header.css";

import { Layout } from "antd";

export default () => {
  return (
    <Layout.Header className="header-section">
      <h3>
        <span>
          <img
            src={CalculatorImg}
            alt="calculator-image"
            className="calc-img"
          />
        </span>
        Painting Cost Estimator
      </h3>
    </Layout.Header>
  );
};

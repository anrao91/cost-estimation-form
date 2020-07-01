import React from "react";

import { Card, Button, Row, Col } from "antd";

import "./CostEstimationResult.css";

export default ({
  total_estimation = 0,
  total_paintable_area = "0 sqft",
  paintable_area_type = "Interior Walls",
  handleGoBack,
}) => {
  return (
    <div className="cost-estimation-card-wrapper">
      <Card
        title={
          <div className="cost-estimation-title">
            <p>{"Your Estimate"}</p>
          </div>
        }
        bordered={false}
      >
        <div className="cost-estimation-card">
          <div className="paint-cost-estimation">{total_estimation}</div>
          <div className="paint-area-details">
            <span>{paintable_area_type}</span>
          </div>
          <div className="cost-estimation-details">
            <Row
              gutter={{ xs: 16, sm: 24, md: 32, lg: 40 }}
              className="paintable-area"
            >
              <Col className="gutter-row" span={12}>
                <span>Total Paintable Area</span>
              </Col>
              <Col className="gutter-row" span={12}>
                <span id="paintableAreaValue">{total_paintable_area}</span>
              </Col>
            </Row>
            <Row
              className="paintable-cost"
              gutter={{ xs: 16, sm: 24, md: 32, lg: 40 }}
            >
              <Col span={12} className="gutter-row">
                <p>Total Cost</p>
                <span className="sub-text">(Total Paintable Area * Price)</span>
              </Col>
              <Col span={12} className="gutter-row">
                <span className="total-cost-value">{total_estimation}</span>
              </Col>
            </Row>
            <div className="go-back-button-wrapper">
              <Button
                className="go-back-button primary-in-app-button"
                onClick={handleGoBack}
              >
                Go Back
              </Button>
            </div>
            <div className="inclusion-details">
              <p>Inclusions & Exclusions</p>
              <ul>
                <li>Ceiling painting</li>
                <li>GST as per government policies</li>
                <li>Enamel paint shall cost extra</li>
              </ul>
              <div className="disclaimer">
                <p>
                  *Disclaimer: This is an approximate estimation based on our
                  algorithms and typical spreading rates. Results may vary
                  according to the condition of the surfaces that you paint
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

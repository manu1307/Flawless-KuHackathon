import React from "react";
import { Col } from "react-bootstrap";

export default function InfoBanner() {
  return (
    <Col lg={4} md={6}>
      <div
        style={{
          border: "1px solid black",
          marginBottom: "10px",
          width: "100%",
          position: "relative",
        }}
      >
        <img
          src="https://t1.daumcdn.net/cfile/tistory/271C6C3358C24F7810"
          style={{ filter: "brightness(83%)", width: "100%" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            backgroundColor: "gray",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>이름</span>
          <span>정보</span>
        </div>
      </div>
    </Col>
  );
}

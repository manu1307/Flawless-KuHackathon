import React from "react";
import { Col } from "react-bootstrap";

export default function EachBanner() {
  return (
    <Col lg={6} sm={12}>
      <div
        style={{
          border: "1px solid black",
          marginBottom: "10px",
          width: "100%",
          position: "relative",
        }}
      >
        <h3
          style={{
            position: "absolute",
            color: "white",
            top: 10,
            left: 10,
            zIndex: 5,
          }}
        >
          추천 관련 배너
        </h3>
        <img
          src="https://file.mk.co.kr/meet/neds/2022/07/image_readtop_2022_628655_16580478795109178.jpg"
          style={{ filter: "brightness(83%)" }}
        />
        <h6
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: "gray",
          }}
        >
          더보기...
        </h6>
      </div>
    </Col>
  );
}

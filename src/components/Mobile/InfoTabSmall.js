import React from "react";
import styled from "styled-components";
import DetailInfoBox from "../Reservation/DetailInfo";

export default function InfoTabSmall({ data }) {
  return (
    <div
      style={{
        borderTop: "1px solid gray",
        borderBottom: "1px solid gray",
        margin: "0 15px",
        padding: "15px 0",
        display: "flex",
      }}
    >
      <div style={{ width: "40%" }}>
        <img
          src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/1590136745/B.jpg?180000000"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <Title>영등포 테니스장</Title>
        <DetailInfoBox data={data} />
      </div>
    </div>
  );
}
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 3px;
  border-bottom: 4px solid black;
  width: max-content;
  margin-bottom: 15px;
`;

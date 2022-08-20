import React from "react";
import styled from "styled-components";

export default function DetailInfoBox({ data }) {
  return (
    <DetailInfo>
      {data.map((each) => (
        <EachLine>
          <Label>{each.label}</Label>
          <Info>{each.value}</Info>
        </EachLine>
      ))}
    </DetailInfo>
  );
}
const DetailInfo = styled.div`
  font-size: 16px;
`;
const EachLine = styled.div`
  display: flex;
`;
const Label = styled.div`
  margin-right: 10px;
  font-weight: 500;
`;
const Info = styled.div`
  font-weight: 700;
`;

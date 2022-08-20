import React from "react";
import styled from "styled-components";

export default function DetailInfoBox() {
  return (
    <DetailInfo>
      <EachLine>
        <Label>시간:</Label>
        <Info>00시~00시</Info>
      </EachLine>
      <EachLine>
        <Label>지역:</Label>
        <Info>00시 00구</Info>
      </EachLine>
      <EachLine>
        <Label>인원 제한:</Label>
        <Info>00명까지 수용 가능</Info>
      </EachLine>
      <EachLine>
        <Label>특이사항:</Label>
        <Info>~~</Info>
      </EachLine>
    </DetailInfo>
  );
}
const DetailInfo = styled.div`
  font-size: 18px;
`;
const EachLine = styled.div`
  display: flex;
`;
const Label = styled.div`
  margin-right: 10px;
`;
const Info = styled.div``;

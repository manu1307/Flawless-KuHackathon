import React, { useState } from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  const [width, setWidth] = useState(window.screen.width);
  window.addEventListener("resize", () => {
    setWidth(window.screen.width);
  });

  const marginTop = width < 1024 ? "250px" : "100px";

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#000000",
        color: "#bdc3c7",
        padding: "30px",
        marginTop: marginTop,
      }}
    >
      <div>
        <span style={{ marginRight: "15px" }}>고객 센터</span>
        <span style={{ marginRight: "15px" }}>이용 약관</span>
        <span style={{ marginRight: "15px" }}>이벤트</span>
      </div>
      <div>
        <h5>팀원 소개</h5>
        <div>박성철 : FE, 팀장</div>
        <div>심하민 : FE</div>
        <div>김두미 : BE</div>
        <div>장린 : 디자이너</div>
        <div>오진우 : 기획자</div>
      </div>
      <span>Copyright © 2022. Flawless</span>
    </Container>
  );
}

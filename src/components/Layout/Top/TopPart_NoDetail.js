import React from "react";
import { Row, Form, Col } from "react-bootstrap";
import styled from "styled-components";
import CircleContainer from "./CircleContainer";
import SearchInputContainer from "./SearchInputContainer";

export default function TopPart_NoDetail() {
  return (
    <>
      <Row style={{ marginBottom: "30px" }}>
        <SearchCol lg={{ span: 7, order: 1 }} xs={{ span: 12, order: 2 }}>
          <SearchContainer>
            <SearchInputContainer />
          </SearchContainer>
        </SearchCol>
        <Col
          lg={{ span: 5, order: 2 }}
          // md={{ span: 12, order: 1 }}
          xs={{ span: 12, order: 1 }}
        >
          <CircleContainer />
        </Col>
      </Row>
    </>
  );
}

const SearchCol = styled(Col)`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 750px) {
    justify-content: flex-end;
  }
`;

const SearchContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  @media screen and (max-width: 992px) {
    margin-top: 30px;
    justify-content: center;
  }
`;

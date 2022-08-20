import React from "react";
import { Row, Form, Col } from "react-bootstrap";
import styled from "styled-components";
import CircleContainer from "./CircleContainer";
import SearchInputContainer from "./SearchInputContainer";

export default function TopPart_NoDetail() {
  return (
    <>
      <Row style={{ marginBottom: "30px" }}>
        <Col
          lg={{ span: 7, order: 1 }}
          // md={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
        >
          <LeftContainer>
            <SearchContainer>
              <SearchInputContainer />
            </SearchContainer>
          </LeftContainer>
        </Col>
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
const SearchContainer = styled.div`
  display: flex;
  @media screen and (max-width: 998px) {
    justify-content: center;
    margin-top: 30px;
  }
`;
const CategoryContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
`;

const DetailCategoryContainer = styled(CategoryContainer)``;

const LeftContainer = styled.div``;

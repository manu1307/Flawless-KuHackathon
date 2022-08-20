import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import SearchInputContainer from "../components/SearchInputContainer";

export default function Home() {
  return (
    <Container>
      <SearchContainer>
        <SearchInputContainer />
      </SearchContainer>
      <CategoryContainer>
        <Row>
          <Col style={{ textAlign: "center" }}>테니스</Col>
          <Col style={{ textAlign: "center" }}>골프</Col>
        </Row>
      </CategoryContainer>
    </Container>
  );
}
const SearchContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
const CategoryContainer = styled.div``;

import React from "react";
import { Row, Form, Col } from "react-bootstrap";
import styled from "styled-components";
import CircleContainer from "./CircleContainer";
import SearchInputContainer from "./SearchInputContainer";

export default function TopPart() {
  return (
    <>
      <Row>
        <Col
          lg={{ span: 7, order: 1 }}
          // md={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
        >
          <LeftContainer>
            <SearchContainer>
              <SearchInputContainer />
            </SearchContainer>
            <DetailCategoryContainer>
              <Form.Select
                aria-label="type"
                style={{
                  border: "1px solid #10DD3D",
                  borderRadius: 0,
                  margin: "5px",
                  color: "#10DD3D",
                  width: "30%",
                }}
              >
                <option>테니스 구장 종류</option>
                <option value="1">하드</option>
                <option value="2">잔디</option>
                <option value="3">클레이</option>
              </Form.Select>
              <Form.Select
                aria-label="position"
                style={{
                  border: "1px solid #10DD3D",
                  borderRadius: 0,
                  margin: "5px",
                  color: "#10DD3D",
                  width: "20%",
                }}
              >
                <option>장소</option>
                <option value="1">실내</option>
                <option value="2">실외</option>
              </Form.Select>
              <Form.Select
                aria-label="money"
                style={{
                  border: "1px solid #10DD3D",
                  borderRadius: 0,
                  margin: "5px",
                  color: "#10DD3D",
                  width: "30%",
                }}
              >
                <option>금액 분포</option>
                <option value="1">3만원 미만</option>
                <option value="2">3~5만원</option>
                <option value="2">5만원 이상</option>
              </Form.Select>
              <Form.Select
                aria-label="region"
                style={{
                  border: "1px solid #10DD3D",
                  borderRadius: 0,
                  margin: "5px",
                  color: "#10DD3D",
                  width: "20%",
                }}
              >
                <option>지역</option>
                <option value="1">서울</option>
                <option value="2">경기</option>
                <option value="2">그 외</option>
              </Form.Select>
            </DetailCategoryContainer>
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

import React from "react";
import { Row, Form, Col } from "react-bootstrap";
import styled from "styled-components";
import FormSelect from "../../FormSelect";
import CircleContainer from "./CircleContainer";
import SearchInputContainer from "./SearchInputContainer";

export default function TopPart({ sprotsType }) {
  console.log(sprotsType);
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
              <FormSelect
                data={{
                  label: "position",
                  labelKor: "장소",
                  option: ["실내", "실외"],
                  width: sprotsType === "tennis" ? "20%" : "33%",
                }}
              />
              <FormSelect
                data={{
                  label: "money",
                  labelKor: "금액 분포",
                  option: ["3만원 미만", "3~5만원", "5만원 이상"],
                  width: sprotsType === "tennis" ? "30%" : "33%",
                }}
              />
              <FormSelect
                data={{
                  label: "region",
                  labelKor: "지역",
                  option: ["서울", "경기", "그 외"],
                  width: sprotsType === "tennis" ? "20%" : "33%",
                }}
              />
              {sprotsType === "tennis" ? (
                <FormSelect
                  data={{
                    label: "type",
                    labelKor: "테니스 구장 종류",
                    option: ["하드", "잔디", "클레이"],
                    width: "30%",
                  }}
                />
              ) : null}
              {/* <FormRegion /> */}
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

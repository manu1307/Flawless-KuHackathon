import React from "react";
import styled from "styled-components";
import SearchInputContainer from "./SearchInputContainer";

export default function TopPart() {
  return (
    <>
      <SearchContainer>
        <SearchInputContainer />
      </SearchContainer>
      <CategoryContainer>
        <CategoryBox>카테고리 1</CategoryBox>
        <CategoryBox>카테고리 2</CategoryBox>
        <CategoryBox>카테고리 3</CategoryBox>
      </CategoryContainer>
      <DetailCategoryContainer>
        <DetailCategoryBox>디테일 1</DetailCategoryBox>
        <DetailCategoryBox>디테일 2</DetailCategoryBox>
        <DetailCategoryBox>디테일 3</DetailCategoryBox>
        <DetailCategoryBox>디테일 4</DetailCategoryBox>
      </DetailCategoryContainer>
    </>
  );
}
const SearchContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
const CategoryContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
`;

const DetailCategoryContainer = styled(CategoryContainer)``;

const CategoryBox = styled.div`
  width: 75px;
  height: 75px;
  border: 1px solid black;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailCategoryBox = styled(CategoryBox)`
  width: 100px;
  height: 40px;
`;

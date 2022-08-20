import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import SearchInputContainer from "../components/SearchInputContainer";
import RecommendBanner from "../components/RecommendBanner";
import Menu from "../components/Menu";
import { useRecoilValue } from "recoil";
import { menuIsOpenState } from "../atoms/atom-menu";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const isOpen = useRecoilValue(menuIsOpenState);
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <div className="h-screen">
        <SearchContainer>
          <SearchInputContainer />
        </SearchContainer>
        <CategoryContainer>
          <CategoryBox onClick={() => navigate("/sport")}>
            카테고리 1
          </CategoryBox>
          <CategoryBox onClick={() => navigate("/sport")}>
            카테고리 2
          </CategoryBox>
          <CategoryBox onClick={() => navigate("/sport")}>
            카테고리 3
          </CategoryBox>
        </CategoryContainer>
        <div className="container mx-auto h-1/2">
          <div className=" mx-auto px-4 h-full">
            <div className="flex justify-center w-full h-full">
              <div className="flex flex-col w-8/12 h-full mx-2 ">
                <div className="flex h-1/2">
                  <div className="w-3/5 h-full mx-2 bg-slate-400">d</div>
                  <div className="w-2/5 h-full mx-2 bg-slate-400">a</div>
                </div>
                <div className="flex h-1/2">
                  <div className="w-2/5 h-full mt-1 mx-2 bg-slate-400">f</div>
                  <div className="w-3/5 h-full mt-1 mx-2 bg-slate-400">e</div>
                </div>
              </div>
              <div className="w-3/12 mx-2 bg-green-300">d</div>
            </div>
          </div>
        </div>

        {/* <Row>
        <InfoBanner />
        <InfoBanner />
        <InfoBanner />
        <InfoBanner />
        <InfoBanner />
        <InfoBanner />
      </Row> */}
      </div>
    </div>
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
const CategoryBox = styled.div`
  width: 75px;
  height: 75px;
  border: 1px solid black;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerContainer = styled.div``;

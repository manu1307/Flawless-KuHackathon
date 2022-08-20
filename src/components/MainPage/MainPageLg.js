import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

export default function MainPageLg() {
  const First = styled.p`
    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
  `;
  const Second = styled.p`
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 10px;
  `;
  const Button = styled.button`
    box-sizing: border-box;
    width: 75px;
    height: 25px;
    font-size: 13px;
    font-weight: 600;
    font-family: "Noto Sans CJK KR";
    background: ${(props) => props.inputColor};
    border: 1.8px solid #000000;
  `;
  const UnderLine = styled.div`
    height: 3px;
    background: black;
    margin-top: 5px;
    margin-bottom: 15px;
  `;
  const ImageCover = styled.div`
    overflow: hidden;
    height: 200px;
    width: 200px;
  `;
  return (
    <div className="container mx-auto h-4/5">
      <div className=" mx-auto h-full">
        <div className=" flex justify-between w-full h-full">
          <div className="mb-1 flex flex-col w-8/12 h-full mx-2 ">
            <div className="flex justify-center  h-1/2">
              <div className="w-3/5 h-5/6 mr-2 p-3 border-black border-2 flex flex-col justify-between">
                <div>
                  <First>예약 정보</First>
                  <UnderLine className="w-1/5" />
                </div>
                <div className="flex justify-between">
                  <ImageCover>
                    <img
                      src="https://static.cdn.soomgo.com/upload/service/be5f3008-0899-41dc-87c4-fbf6c819f1be.png"
                      alt="테니스 이미지"
                      className="object-fill"
                    />
                  </ImageCover>
                  <div className="flex flex-col">
                    <Second>어쩌고 테니스장</Second>
                    <Second>몇일 몇시</Second>
                    <div className="h-full flex align-bottom">
                      <Button inputColor="#10dd3d">보러가기</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-2/5 h-5/6 mx-2 p-3 flex flex-col justify-between"
                style={{ backgroundColor: "#10DD3D" }}
              >
                {" "}
                <div>
                  <First>최근 인기 테니스장</First>
                  <UnderLine className="w-2/3" />
                </div>
                <Second className="text-ellipsis">
                  8월 동안 가장 인기가 높았던
                </Second>
                <Second className="text-ellipsis">
                  인기 테니스장을 확인하세요.
                </Second>
                <Logo width="40" height="40" />
                <div className="flex justify-end">
                  <Button inputColor="#FFFFFF">보러가기</Button>
                </div>
              </div>
            </div>
            <div className=" flex h-1/2">
              <div
                className="w-2/5 h-full mx-2 p-3 flex flex-col justify-between"
                style={{ border: "2px #10DD3D solid" }}
              >
                <div>
                  <First>최근 인기 골프장</First>
                  <UnderLine className="w-2/3" />
                </div>

                <Second className="text-ellipsis">
                  8월 동안 가장 인기가 높았던
                </Second>
                <Second className="text-ellipsis">
                  인기 골프장을 확인하세요.
                </Second>
                <Logo width="40" height="40" />
                <div className="flex justify-end">
                  <Button inputColor="#10dd3d">보러가기</Button>
                </div>
              </div>
              <div className="w-3/5 h-full mx-2 p-3 border-black border-2">
                <First>명경기 유튜브</First>
              </div>
            </div>
          </div>
          <div
            className="w-4/12 h-full p-3 flex flex-col"
            style={{ border: "2px #10DD3D solid" }}
          >
            <div>
              <First>날씨</First>
              <UnderLine className="w-1/6" />
            </div>

            <Second>8월 20일</Second>
            <Second>맑음 / 비올 확률 : 20%</Second>
          </div>
        </div>
      </div>
    </div>
  );
}

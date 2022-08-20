import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

// Thunderstorm	Drizzle Rain Snow Clear Clouds
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
    height: 135px;
    width: 135px;
  `;

  const [currentTemperature, setCurrentTemperature] = useState();
  const [weatherState, setWeatherState] = useState("Clear");
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=37&lon=126&appid=f8fe1ee09dc50ad5f963f1bee96f6832`
      );
      const weatherData = await response.json();
      console.log(weatherData);
      const { main } = weatherData.weather[0];
      setWeatherState(main);
      setCurrentTemperature(() => {
        return (weatherData.main.temp - 273).toFixed(1);
      });
    };
    const date = new Date();
    setCurrentDate(() => {
      return `${date.getFullYear()}년 ${
        date.getMonth() + 1
      }월 ${date.getDate()}일`;
    });
    fetchWeatherData();
  }, []);

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
                      src="../img/tennisGame.png"
                      alt="테니스 이미지"
                      className="w-full"
                    />
                  </ImageCover>
                  <div className="flex flex-col w-1/2">
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#10dd3d",
                        fontWeight: "bold",
                      }}
                    >
                      예약한 날짜까지 3일
                    </div>
                    <First
                      style={{
                        fontSize: "18px",
                        marginBottom: "15px",
                        marginTop: "5px",
                      }}
                    >
                      어쩌구저쩌구테니스장
                    </First>
                    <Second>예약날짜 {new Date().toLocaleDateString()}</Second>
                    <Second>예약시간 15:00-17:00</Second>
                    <Second>동행인 수 3명</Second>
                    <div className="h-1/2 flex justify-end">
                      <Button
                        inputColor="#10dd3d"
                        style={{ position: "relative", top: "-20px" }}
                      >
                        보러가기
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-2/5 h-5/6 mx-4 p-3 flex flex-col justify-between"
                style={{ backgroundColor: "#10DD3D" }}
              >
                {" "}
                <div>
                  <First>최근 인기 테니스장</First>
                  <UnderLine className="w-2/3" />
                </div>
                <Second className="text-ellipsis">
                  8월 동안 가장 조회수가 높았던
                </Second>
                <Second className="text-ellipsis">
                  인기 테니스장을 모아봤어요.
                </Second>
                <Logo width="40" height="40" />
                <div className="flex justify-end">
                  <Button
                    inputColor="#FFFFFF"
                    style={{ position: "relative", top: "-18px" }}
                  >
                    보러가기
                  </Button>
                </div>
              </div>
            </div>
            <div className=" flex h-1/2">
              <div
                className="w-2/5 h-full mr-2 p-3 flex flex-col justify-between"
                style={{ border: "2px #10DD3D solid" }}
              >
                <div>
                  <First>최근 인기 골프장</First>
                  <UnderLine className="w-2/3" />
                </div>

                <Second className="text-ellipsis">
                  8월 동안 가장 조회수가 높았던
                </Second>
                <Second className="text-ellipsis">
                  인기 골프장을 모아봤어요.
                </Second>
                <Logo width="40" height="40" />
                <div className="flex justify-end">
                  <Button
                    inputColor="#10dd3d"
                    style={{ position: "relative", top: "-15px" }}
                  >
                    보러가기
                  </Button>
                </div>
              </div>
              <div className="w-3/5 h-full mx-4 p-3 border-black border-2">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/RyjooxZ8vA8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="w-4/12 flex flex-col">
            <div
              className="w-full h-3/4 p-3 mb-5 flex flex-col"
              style={{ border: "2px #10DD3D solid" }}
            >
              <div>
                <First>날씨</First>
                <UnderLine className="w-1/6" />
              </div>
              <Second>{currentDate}</Second>
              <Second>기온 : {currentTemperature}℃</Second>
              <div>{weatherState}</div>
              <FontAwesomeIcon icon={faCloud} size="8x" />
            </div>
            <div
              className="w-full h-1/4 p-3"
              style={{ backgroundColor: "#10DD3D" }}
            >
              <div className="flex flex-col">
                <div>
                  <First>우리 지역 구장 찾기</First>
                  <UnderLine className="w-3/6" />
                </div>
                <div className="flex justify-end">
                  <Button
                    inputColor="white"
                    style={{ position: "relative", top: "15px" }}
                  >
                    보러가기
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

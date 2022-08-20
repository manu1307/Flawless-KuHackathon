import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as GolfLogo } from "../../assets/Golf-Logo.svg";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudShowersHeavy,
} from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

export default function MainPageSm() {
  const Box = styled.div`
    border: 3px solid ${(props) => props.borderColor};
  `;
  const First = styled.p`
    font-family: Noto Sans CJK KR;
    font-size: 16px;
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
    font-size: 10px;
    line-height: 10px;
  `;
  const Button = styled.button`
    box-sizing: border-box;
    width: 60px;
    height: 20px;
    font-size: 10px;
    font-weight: 600;
    font-family: "Noto Sans CJK KR";
    background: ${(props) => props.inputColor};
    border: ${(props) => props.borderInput};
  `;
  const UnderLine = styled.div`
    height: 1.8px;
    background: black;
    margin-top: 5px;
    margin-bottom: 15px;
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
      }월 ${date.getDate()}일 ${switchToDay(date.getDay())}요일`;
    });
    fetchWeatherData();
  }, []);
  const switchToDay = (key) => {
    switch (key) {
      case 0:
        return "일";
      case 1:
        return "월";
      case 2:
        return "화";
      case 3:
        return "수";
      case 4:
        return "목";
      case 5:
        return "금";
      case 6:
        return "토";
      default:
        break;
    }
  };
  const switchToIcon = (state) => {
    switch (state) {
      case "Thunderstorm":
        return (
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 35,
            }}
          >
            <FontAwesomeIcon size="6x" icon={faCloudShowersHeavy} />
          </div>
        );
      case "Drizzle":
        return (
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 350,
            }}
          >
            <FontAwesomeIcon size="6x" icon={faCloudShowersHeavy} />
          </div>
        );
      case "Rain":
        return (
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 350,
            }}
          >
            <FontAwesomeIcon size="6x" icon={faCloudShowersHeavy} />
          </div>
        );
      case "Clear":
        return (
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 35,
            }}
          >
            <FontAwesomeIcon size="6x" icon={faSun} />
          </div>
        );
      case "Clouds":
        return (
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 35,
            }}
          >
            <FontAwesomeIcon size="6x" icon={faCloud} />
          </div>
        );
      default:
        return (
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 35,
            }}
          >
            <FontAwesomeIcon size="6x" icon={faSun} />
          </div>
        );
    }
  };
  return (
    <div className="container flex justify-center mx-auto ">
      <div className="flex flex-col w-5/6 h-screen">
        <div className="w-full h-1/6">
          <Box
            borderColor="#10dd3d"
            className="h-full p-3"
            style={{ backgroundColor: "#10dd3d" }}
          >
            <div>
              <First className="flex justify-between font-bold">
                최근 인기 테니스장
                <Logo width="30" height="30" fill="black" />
              </First>
              <UnderLine className="w-2/5" />
            </div>
            <div>
              <Second>8월동안 가장 조회수가 높았던</Second>
              <div className="flex justify-between">
                <Second>인기 테니스장을 모아봤어요.</Second>
                <Button inputColor="#ffffff" borderInput="1px solid #000000">
                  보러 가기
                </Button>
              </div>
            </div>
          </Box>
        </div>
        <div className="w-full h-1/6 ">
          <Box borderColor="#10dd3d" className="h-full p-3 my-2 ">
            <div>
              <First className="flex justify-between font-bold">
                최근 인기 골프장
                <GolfLogo width="30" height="30" fill="black" />
              </First>
              <UnderLine className="w-1/3" />
            </div>
            <div>
              <Second>8월동안 가장 조회수가 높았던</Second>
              <div className="flex justify-between">
                <Second>인기 골프장을 모아봤어요.</Second>
                <Button
                  inputColor="#10dd3d"
                  borderColor="1px solid #ffffff"
                  className="text-white"
                >
                  보러 가기
                </Button>
              </div>
            </div>
          </Box>
          <Box borderColor="#000" className="h-full p-3 my-2 ">
            <div>
              <First className="flex justify-between font-bold">
                예약 정보
              </First>
              <UnderLine className="w-1/3" />
            </div>
            <div>
              <div className="flex justify-between">
                <Button
                  inputColor="#10dd3d"
                  borderInput="1px solid #000"
                  className="text-black"
                >
                  보러 가기
                </Button>
              </div>
            </div>
          </Box>
          <Box
            borderColor="#10dd3d"
            className="h-full p-3 my-2 "
            style={{ position: "relative" }}
          >
            <div>
              <First className="flex justify-between font-bold">날씨</First>
              <UnderLine className="w-1/6" />
            </div>
            <Second>{currentDate}</Second>
            <Second>현재 기온 : {currentTemperature}℃</Second>
            <Second>
              {weatherState === "Clear"
                ? "맑음"
                : weatherState === "Clouds"
                ? "흐림"
                : "비"}
            </Second>
            {switchToIcon(weatherState)}
          </Box>

          <Box
            borderColor="#10dd3d"
            className="h-full p-3 my-2"
            style={{ backgroundColor: "#10dd3d" }}
          >
            <div>
              <First className="flex justify-between font-bold">
                새 컨텐츠
              </First>
              <UnderLine className="w-1/3" />
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

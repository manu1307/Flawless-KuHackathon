import { atom, selector } from "recoil";

export const placeListState = atom({
  key: "placeListState",
  default: [
    {
      placeIdx: 4,
      placeName: "안산 골프장",
      type: "golf",
      region: "서울",
      position: "실내",
      price: 30000,
      tennisType: null,
      time: "16:00~21:00",
      rate: 5,
      etc: "사용 불가",
    },
    {
      placeIdx: 5,
      placeName: "문래역 테니스장",
      type: "tennis",
      region: "서울",
      position: "실내",
      price: 30000,
      tennisType: "하드",
      time: "16:00~21:00",
      rate: 4,
      etc: "사용 불가",
    },
    {
      placeIdx: 6,
      placeName: "동대문 골프장",
      type: "golf",
      region: "서울",
      position: "실내",
      price: 30000,
      tennisType: null,
      time: "16:00~21:00",
      rate: 1,
      etc: "사용 불가",
    },
    {
      placeIdx: 7,
      placeName: "영등포역 테니스장",
      type: "tennis",
      region: "경기",
      position: "실외",
      price: 30000,
      tennisType: "클레이",
      time: "16:00~21:00",
      rate: 3,
      etc: "사용 불가",
    },
    {
      placeIdx: 8,
      placeName: "신도림 테니스장",
      type: "tennis",
      region: "서울",
      position: "실내",
      price: 25000,
      tennisType: "잔디",
      time: "9:00~12:30",
      rate: 4,
      etc: null,
    },
    {
      placeIdx: 9,
      placeName: "목동 테니스장",
      type: "tennis",
      region: "서울",
      position: "실내",
      price: 43000,
      tennisType: "하드",
      time: "12:00~13:00",
      rate: 2,
      etc: null,
    },
    {
      placeIdx: 10,
      placeName: "인서울27골프장",
      type: "golf",
      region: "서울",
      position: "실외",
      price: 80000,
      tennisType: null,
      time: "19:00~21:00",
      rate: 4,
      etc: "경치 좋음",
    },
    {
      placeIdx: 11,
      placeName: "123 골프클럽",
      type: "golf",
      region: "인천",
      position: "실외",
      price: 75000,
      tennisType: null,
      time: "7:00~10:00",
      rate: 5,
      etc: null,
    },
    {
      placeIdx: 12,
      placeName: "한양파인CC",
      type: "golf",
      region: "경기",
      position: "실내",
      price: 60000,
      tennisType: null,
      time: "22:00~24:00",
      rate: 4,
      etc: "야간 할인",
    },
    {
      placeIdx: 13,
      placeName: "월드컴파크골프장",
      type: "golf",
      region: "서울",
      position: "실내",
      price: 64000,
      tennisType: null,
      time: "18:00~19:45",
      rate: 2,
      etc: null,
    },
    {
      placeIdx: 14,
      placeName: "용마 테니스장",
      type: "tennis",
      region: "서울 동작",
      position: "실내",
      price: 35000,
      tennisType: "잔디",
      time: "17:00~18:00",
      rate: 5,
      etc: null,
    },
    {
      placeIdx: 15,
      placeName: "올림픽공원 테니스장",
      type: "tennis",
      region: "경기 수원",
      position: "실외",
      price: 45000,
      tennisType: "하드",
      time: "5:00~9:00",
      rate: 3,
      etc: null,
    },
    {
      placeIdx: 16,
      placeName: "오렌지테니스24",
      type: "tennis",
      region: "경기 안산",
      position: "실내",
      price: 74000,
      tennisType: "잔디",
      time: "2:00~6:00",
      rate: 5,
      etc: null,
    },
    {
      placeIdx: 17,
      placeName: "테니스 크루",
      type: "tennis",
      region: "김포",
      position: "실외",
      price: 84000,
      tennisType: "클레이",
      time: "15:00~16:00",
      rate: 3,
      etc: null,
    },
    {
      placeIdx: 18,
      placeName: "가평 파크 골프장",
      type: "golf",
      region: "경기 가평",
      position: "실내",
      price: 75000,
      tennisType: null,
      time: "16:30~18:00",
      rate: 1,
      etc: null,
    },
    {
      placeIdx: 19,
      placeName: "태릉 골프장",
      type: "golf",
      region: "경기 남양주",
      position: "실외",
      price: 34500,
      tennisType: null,
      time: "17:25~19:00",
      rate: 2,
      etc: null,
    },
  ],
});

export const placePositionState = atom({
  key: "placePositionState",
  default: "",
});

export const placePositionStateChanged = atom({
  key: "placePositionStateChanged",
  default: false,
});
// ----
export const placePriceState = atom({
  key: "placePriceState",
  default: "",
});
export const placePriceStateChanged = atom({
  key: "placePriceStateChanged",
  default: false,
});
// ----
export const placeNameState = atom({
  key: "placeNameState",
  default: "",
});

export const placeNameStateChanged = atom({
  key: "placeNameStateChanged",
  default: false,
});
// ----
export const placeTennisTypeState = atom({
  key: "placeTennisTypeState",
  default: "",
});
export const placeTennisTypeStateChanged = atom({
  key: "placeTennisTypeStateChanged",
  default: false,
});

export const placeFilteredState = selector({
  key: "placeFilteredState",
  get: ({ get }) => {
    const placeName = get(placeNameState);
    const placePosition = get(placePositionState);
    const placePrice = get(placePriceState);
    const placeList = get(placeListState);

    return placeList.filter(
      (place) => place.region === placeName && place.position === placePosition
    );
  },
});

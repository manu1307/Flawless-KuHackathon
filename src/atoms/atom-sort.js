import { atom } from "recoil";

export const option = atom({
  key: "sort_option",
  default: { position: null, price: null, region: null, tennis_type: null },
});
export const selected = atom({
  key: "selected_place",
  default: {
    placeIdx: 0,
    placeName: "",
    type: "",
    region: "",
    position: "",
    price: 0,
    tennisType: "",
    time: "",
    rate: 0,
    etc: "null",
  },
});

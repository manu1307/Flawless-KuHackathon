import { atom } from "recoil";

export const option = atom({
  key: "sort_option",
  default: { position: null, price: null, region: null, tennis_type: null },
});

import React from "react";
import Menu from "../components/Menu";
import { useRecoilValue } from "recoil";
import { menuIsOpenState } from "../atoms/atom-menu";

export default function Home() {
  const isOpen = useRecoilValue(menuIsOpenState);
  return (
    <div className="h-full flex justify-between">
      <div>본문</div>
      {isOpen && <Menu />}
    </div>
  );
}

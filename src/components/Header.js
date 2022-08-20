import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { menuIsOpenState } from "../atoms/atom-menu";

export default function Header() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useRecoilState(menuIsOpenState);

  return (
    <div className="h-full">
      <div className="h-full bg-slate-300 flex justify-between">
        <div>{""}</div>
        <div className="flex w-1/6 justify-center items-center ">
          <div className="h-8">
            <a href="/">로고</a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-8">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* <div className="flex items-center justify-end">
        <div className="m-3">
        <div className="flex">
        <a href="/" className="mx-5">
              테니스 예약
            </a>
            <a href="/" className="mx-5">
              골프장 예약
              </a>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
}

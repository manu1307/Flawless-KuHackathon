import React from "react";
import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState, useRecoilValue } from "recoil";
import { menuIsOpenState } from "../atoms/atom-menu";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Header() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} bg="dark" variant="dark">
          <Container fluid className="py-1">
            <div className="w-screen flex justify-between">
              <Navbar.Brand
                href="/"
                className="text-center w-4 text-white lg:w-full"
              >
                어디구장
              </Navbar.Brand>
              <Navbar.Toggle
                style={{ color: "white" }}
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                // style={{ color: "white" }}
              >
                <Offcanvas.Header
                  className="w-full flex justify-end"
                  closeButton
                ></Offcanvas.Header>

                <Offcanvas.Body>
                  <Nav className="flex flex-col justify-center border-t-4 border-b-4 py-5 border-black">
                    <div className="w-full flex justify-center ">
                      <div className="w-32 h-32  bg-slate-400 rounded-full"></div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-1/3  my-4 py-2 border-b-2 border-black">
                        <div className="text-xl font-bold flex justify-center">
                          김구장
                        </div>
                      </div>
                    </div>

                    <Nav.Link
                      className="text-center opacity-70 hover:opacity-100 hover:border-b border-black"
                      href="#action1"
                    >
                      예약 정보
                    </Nav.Link>
                    <Nav.Link
                      className="text-center opacity-70 hover:opacity-100 hover:border-b border-black"
                      href="#action2"
                    >
                      마이 페이지
                    </Nav.Link>
                    <Nav.Link
                      className="text-center opacity-70 hover:opacity-100 hover:border-b border-black"
                      href="#action2"
                    >
                      공지사항
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
    // <div className="h-full">
    //   <div className="h-full bg-slate-300 flex justify-between">
    //     <div>{""}</div>
    //     <div className="flex w-1/6 justify-center items-center ">
    //       <div className="h-8">
    //         <a href="/">로고</a>
    //       </div>
    //     </div>
    //     <div className="flex flex-col justify-center items-center mx-8">
    //       <button
    //         onClick={() => {
    //           setIsOpen(!isOpen);
    //         }}
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-8 w-8 "
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //       </button>
    //     </div>

    //   </div>
    // </div>
  );
}

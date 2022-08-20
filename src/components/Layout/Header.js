import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as ProjectLogo } from "../../assets/projectLogo.svg";
import { useState } from "react";

export default function Header() {
  const [width, setWidth] = useState(window.screen.width);
  window.addEventListener("resize", () => {
    setWidth(window.screen.width);
  });

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} bg="dark" variant="dark">
          <Container fluid className="pt-24">
            <div className="w-screen flex justify-between py-3">
              <Navbar.Brand
                href="/"
                className="text-center text-white lg:w-full"
              >
                <div className="flex">
                  {width > 1024 ? (
                    <div className="flex">
                      <Logo
                        width={30}
                        height={30}
                        fill="white"
                        className="mx-2"
                      />
                      <ProjectLogo width={120} height={30} fill="white" />
                    </div>
                  ) : (
                    <img
                      src="../img/LogoSet.png"
                      alt="Logo Set"
                      style={{ width: "120px", height: "40px" }}
                    ></img>
                  )}
                </div>
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
                      className="text-center opacity-70 hover:opacity-100"
                      href="#action1"
                    >
                      <span className="px-3 py-1 text-center opacity-70 hover:opacity-100 hover:border-b border-black">
                        예약 정보
                      </span>
                    </Nav.Link>
                    <Nav.Link
                      className="text-center opacity-70 hover:opacity-100"
                      href="#action2"
                    >
                      <span className="px-3 py-1 text-center opacity-70 hover:opacity-100 hover:border-b border-black">
                        예약 내역
                      </span>
                    </Nav.Link>
                    <Nav.Link
                      className="text-center opacity-70 hover:opacity-100"
                      href="#action2"
                    >
                      <span className="px-3 py-1 text-center opacity-70 hover:opacity-100 hover:border-b border-black">
                        공지사항
                      </span>
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

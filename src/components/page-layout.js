import React from "react";
import { NavBar } from "./navigation/desktop/nav-bar";
import { MobileNavBar } from "./navigation/mobile/mobile-nav-bar";
import { PageFooter } from "./page-footer";
import { Slideshow } from "../components/tech-slideshow";
export const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <NavBar />
      <MobileNavBar />
      <div className="page-layout__content">{children}</div>
      <Slideshow />
      {/*<div className="tech-slideshow"> <div className="mover-1"></div> <div className="mover-2"></div> </div>*/}
      <PageFooter />
    </div>
  );
};

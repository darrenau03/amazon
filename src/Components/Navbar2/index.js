import React from "react";
import { useMediaQuery } from "react-responsive";

import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";

import ScrollCoursework from "./ScrollCoursework";
import ScrollProjects from "./ScrollProjects";
import ScrollToTop from "./ScrollToTop";

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <div className="bg-[#adb5bd]/75 text-2xl sticky top-0 z-40 flex  justify-center flex-wrap font-bold ">
      <div className="flex max-w-[1400px] w-full justify-between items-center">
        <ScrollToTop />
        <div className="flex flex-row m-4">
          {!isMobile && <ScrollProjects />}
          {!isMobile && <ScrollCoursework />}
          {isMobile && <MobileNavLinks />}
        </div>
      </div>
    </div>
  );
}

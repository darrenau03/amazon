import React, { useState } from "react";

import { MenuToggle } from "./menuToggle";

import ScrollCoursework from "./ScrollCoursework";
import ScrollProjects from "./ScrollProjects";
import OpenMenu from "./OpenMenu";

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  const clicked = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col justify-end border-4">
      {/* <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} /> */}
      <OpenMenu/>
      {/* {isOpen && (
        <ul className="m-0 p-0 bg-white fixed top-16 right-0 h-full w-6/12">
          <div className="flex flex-col space-y-4 mt-9 ">
            <ScrollProjects />
            <ScrollCoursework />
          </div>
        </ul>
      )} */}
    </div>
  );
}

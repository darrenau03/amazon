import { useState } from "react";
import { MenuToggle } from "./menuToggle";

import ScrollCoursework from "./ScrollCoursework";
import ScrollProjects from "./ScrollProjects";

export default function OpenMenu() {
  const [isOpen, setOpen] = useState(false);

  // Rest of the component code

  const flipOpen = () => {
    setOpen(!isOpen);
  };

  return (
    // JSX to render the menu
    <div className="">
      <MenuToggle isOpen={isOpen} toggle={flipOpen} className="" />

      {isOpen && (
        <div className="z-0">
          {/* <MenuToggle isOpen={isOpen} toggle={flipOpen} className="" /> */}
          <ul className="m-0 p-0 bg-white fixed right-0 h-full w-6/12 top-0">
            <div className="flex mt-9 justify-center scale-[1]">
              <MenuToggle isOpen={isOpen} toggle={flipOpen} className="" />
            </div>

            <div className="flex flex-col space-y-4 mt-9 ">
              <ScrollProjects isOpen={isOpen} toggleFunction={flipOpen} />
              <ScrollCoursework isOpen={isOpen} toggleFunction={flipOpen} />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

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
    <div className="flex flex-col justify-end">
      <OpenMenu isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
    </div>
  );
}

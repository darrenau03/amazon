import React, { useState } from "react";


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

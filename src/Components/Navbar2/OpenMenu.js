import { useState } from "react";
import { MenuToggle } from "./menuToggle";

export default function OpenMenu() {
  const [isOpen, setOpen] = useState(false);

  // Rest of the component code

  return (
    // JSX to render the menu
    <div>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      asdf
    </div>
  );
}

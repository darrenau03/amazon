import { ClipboardIcon } from "@heroicons/react/solid";

function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [curtop];
  }
}

export default function ScrollCoursework() {
  return (
    <div
      onClick={() =>
        window.scrollTo({
          top: findPos(document.getElementById("cw")) - 60,
          behavior: "smooth",
        })
      }
    >
      <div className=" hover:bg-sky-700 flex mr-5 ml-5">
        <ClipboardIcon className="flex max-w-[20px] mr-2 rounded-md fill-[#e9ecef]"></ClipboardIcon>
        <h1 className="flex items-center whitespace-nowrap text-[#e9ecef]">Course Work</h1>
      </div>
    </div>
  );
}

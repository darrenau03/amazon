import { PuzzleIcon } from "@heroicons/react/solid";

function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [curtop];
  }
}

export default function ScrollProjects() {
  return (
    <div
      onClick={() =>
        window.scrollTo({
          top: findPos(document.getElementById("proj")) - 60,
          behavior: "smooth",
        })
      }
    >
      <div className="hover:bg-sky-700 flex mr-5 ml-5">
        <PuzzleIcon className=" flex max-w-[20px] fill-[#495057]  mr-2 rounded-md "></PuzzleIcon>
        <h1 className="flex items-center text-[#495057]">Projects</h1>
      </div>
    </div>
  );
}

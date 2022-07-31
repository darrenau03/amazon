import React, { useEffect } from "react";

const Modal = ({
  setModalOn,
  toolsUsed,
  modalHtml,
  projectDuration,
  updateDate,
  projectName,
}) => {
  const handleOKClick = () => {
    document.body.style.overflow = "scroll";
    setModalOn(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        handleOKClick();
      }
    });
  });

  return (
    <div className=" bg-zinc-200 opacity-96 fixed inset-0 z-50 ">
      <div className="flex flex-row h-screen justify-center items-center ">
        <div className="flex flex-row bg-white p-12 w-10/12 h-5/6 overflow-y-scroll rounded-xl ">
          <div className="flex justify-start w-full ">
            <div className="flex flex-col">
              <div className="text-2xl mb-[10px]">{projectName}</div>
              <div className=" text-xl mb-[10px] italic ">
                Project Date: {projectDuration}
              </div>
              <div className="text-sm mb-[20px] font-bold">
                Tools Used: {toolsUsed}
              </div>
              <div className="flex items-start pb-14">{modalHtml}</div>
            </div>
          </div>
          <div className="flex justify-end sticky top-0">
            <button onClick={handleOKClick} className="w-10 flex mb-5">
              <div className="flex flex-row text-3xl justify-center align-center rounded-lg hover:bg-red-500 text-neutral-700 w-10 h-10">
                x
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

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
      <div className="flex flex-col h-screen justify-center items-center ">
        <div class="relative flex justify-end w-11/12">
          <div class="absolute top-0 right-0 m-4">
            <button onClick={handleOKClick} className="flex mb-5">
              <div className="flex flex-row text-3xl justify-center align-center rounded-lg hover:bg-red-500 text-neutral-700 w-10 h-10">
                x
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-row bg-white p-12 w-10/12 h-5/6 overflow-y-auto rounded-xl">
          <div className="top-0 left-0">
            <div className="flex flex-col">
              <div className="text-2xl mb-[10px]">{projectName}</div>
              <div className=" text-xl mb-[10px] italic ">
                Project Date: {projectDuration}
              </div>
              <div className="text-sm mb-[20px] font-bold">
                Tools Used: {toolsUsed}
              </div>
              <div className="flex items-start">{modalHtml}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

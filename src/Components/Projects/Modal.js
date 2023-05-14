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
        <div className="flex flex-row bg-white p-12 w-10/12 h-5/6 overflow-y-auto rounded-xl">
          <div className="w-full">
            <div className="flex flex-col">
              <div class="relative flex justify-end">
                <div class="flex">
                  <button onClick={handleOKClick} className="flex mb-5">
                    <div className="flex flex-row text-4xl justify-center align-center rounded-lg hover:bg-red-500 text-neutral-700 w-10 h-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 6L6 18M6 6l12 12"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
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

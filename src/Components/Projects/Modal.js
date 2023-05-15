import React, { useEffect } from "react";

import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "../../Components/Navbar/mobileNavLinks";
import { useMediaQuery } from "react-responsive";
import XButton from "./XButton";

function enableScroll() {
  window.onscroll = null;
}

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
    enableScroll();
  };

  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        handleOKClick();
      }
    });
  });

  // return (
  //   <div className=" bg-zinc-200 fixed inset-0 z-50 ">
  //     <div className="flex flex-col h-screen justify-center items-center ">
  //       <div className="flex flex-row bg-white p-4 w-10/12 h-5/6 overflow-y-auto rounded-xl">
  //         <div className="flex flex-row">
  //           <div className="flex flex-col">
  //             <div className="text-2xl mb-[10px]">{projectName}</div>
  //             <div className=" text-xl mb-[10px] italic ">
  //               Project Date: {projectDuration}
  //             </div>
  //             <div className="text-sm mb-[20px] font-bold">
  //               Tools Used: {toolsUsed}
  //             </div>
  //             <div className="flex items-start">{modalHtml}</div>
  //           </div>
  //           <div className="">
  //             {/* {isMobile && (
  //                 <div class="relative flex justify-center border-4">
  //                   <button onClick={handleOKClick} className="flex">
  //                     <div className="rounded-lg hover:bg-red-500 text-neutral-700">
  //                       <svg
  //                         xmlns="http://www.w3.org/2000/svg"
  //                         width="48"
  //                         height="48"
  //                         fill="currentColor"
  //                         viewBox="0 0 24 24"
  //                       >
  //                         <path
  //                           d="M18 6L6 18M6 6l12 12"
  //                           stroke="#000"
  //                           strokeWidth="2"
  //                           strokeLinecap="round"
  //                           strokeLinejoin="round"
  //                         />
  //                       </svg>
  //                     </div>
  //                   </button>
  //                 </div>
  //               )} */}
  //           </div>

  //           {!isMobile && (
  //             <div class="flex justify-end sticky top-0">
  //               <div class="">
  //                 <button onClick={handleOKClick} className="flex">
  //                   <div className="rounded-lg hover:bg-red-500 text-neutral-700">
  //                     <svg
  //                       xmlns="http://www.w3.org/2000/svg"
  //                       width="48"
  //                       height="48"
  //                       fill="currentColor"
  //                       viewBox="0 0 24 24"
  //                     >
  //                       <path
  //                         d="M18 6L6 18M6 6l12 12"
  //                         stroke="#000"
  //                         strokeWidth="2"
  //                         strokeLinecap="round"
  //                         strokeLinejoin="round"
  //                       />
  //                     </svg>
  //                   </div>
  //                 </button>
  //               </div>
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className=" bg-zinc-200 fixed inset-0 z-50 ">
      <div className="flex flex-row  h-screen justify-center ">
        {!isMobile && (
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-row bg-white p-12  w-10/12 h-5/6 overflow-y-scroll rounded-xl ">
              <div className="flex justify-start w-full flex-col">
                <div className="flex flex-col ">
                  <div className="text-2xl mb-[10px]">{projectName}</div>
                  <div className=" text-xl mb-[10px] italic ">
                    Project Date: {projectDuration}
                  </div>
                  <div className="text-sm mb-[20px] font-bold">
                    Tools Used: {toolsUsed}
                  </div>
                  <div className="flex items-start pb-12">{modalHtml}</div>
                </div>
              </div>

              <XButton setModalOn={setModalOn} />
            </div>
          </div>
        )}
        {isMobile && (
          <div className="flex justify-center pt-8">
            <div className="bg-white p-12 w-10/12 h-5/6 overflow-y-scroll rounded-xl">
              <div className="">
                <div className="text-2xl mb-[10px]">{projectName}</div>
                <div className=" text-xl mb-[10px] italic ">
                  Project Date: {projectDuration}
                </div>
                <div className="text-sm mb-[20px] font-bold">
                  Tools Used: {toolsUsed}
                </div>
                <div className="flex items-start pb-12">{modalHtml}</div>
              </div>

              <div class="flex fixed inset-x-0 bottom-6 justify-center">
                <XButton setModalOn={setModalOn} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

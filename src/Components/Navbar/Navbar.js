import ScrollCoursework from "./ScrollCoursework";
import ScrollProjects from "./ScrollProjects";
import ScrollToTop from "./ScrollToTop";

const NavBar = () => {
  return (
    <div className="w-full sticky top-0">
      <div className="">
        <div className="p-1 max-h-[70px] bg-[#fcfaf9]/75 flex justify-between flex-row items-center ">
          
          <ScrollToTop />
          <div className="flex w-fit items-center overflow-hidden">
            <ScrollProjects />
            <ScrollCoursework />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

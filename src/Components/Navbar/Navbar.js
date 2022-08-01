import ScrollCoursework from "./ScrollCoursework";
import ScrollProjects from "./ScrollProjects";
import ScrollToTop from "./ScrollToTop";

const NavBar = () => {
  return (
    <div className="bg-[#adb5bd]/75 text-2xl sticky top-0 z-40 flex justify-center items-center flex-wrap font-bold">
      <div className="flex max-w-[1400px] w-full justify-between items-center overflow-hidden ">
        <ScrollToTop />
        <div className="flex flex-row">
          <ScrollProjects />
          <ScrollCoursework />
        </div>

      </div>
    </div>
  );
};

export default NavBar;

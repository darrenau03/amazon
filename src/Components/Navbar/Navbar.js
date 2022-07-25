import ScrollCoursework from "./ScrollCoursework";
import ScrollProjects from "./ScrollProjects";
import ScrollToTop from "./ScrollToTop";

const NavBar = () => {
  return (
    <div className="bg-[#495057]/75 text-2xl sticky top-0 flex justify-center items-center flex-wrap font-bold">
      <div className="flex max-w-[1400px] w-full justify-between items-center overflow-hidden ">
        <ScrollToTop />
        <ScrollProjects />
        <ScrollCoursework />
      </div>
    </div>
  );
};

export default NavBar;

import "./App.css";
import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";
import {Navbar} from "./Components/Navbar2";
import Projects from "./Components/Projects";
import Coursework from "./Components/Coursework";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div>
      {/* <Helmet>
        <style>{"body { background-color: #7F8487; }"}</style>
      </Helmet> */}
      <div className="flex justify-center  w-full">
        <div className="flex flex-col justify-center w-full">
          <Navbar/>
          <div className="flex justify-center bg-[#dee2e6]">
            <Home />
          </div>
          <div className="flex justify-center bg-[#ced4da]">
            <Projects />
          </div>
          <div className="flex justify-center bg-[#dee2e6]">
            <Coursework grade="" />
          </div>
        </div>
      </div>
    </div>
  );
}

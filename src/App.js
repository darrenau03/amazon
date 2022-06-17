import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Coursework from "./Components/Coursework/Coursework";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #f1f2eb; }"}</style>
      </Helmet>
      <div className="flex justify-center h-fit z-50">
        <div className="flex flex-col w-screen max-w-[1400px] ">
          <Navbar />
          <Home />
          <Projects />
          <Coursework grade = ""/>
        </div>
      </div>
    </div>
  );
}

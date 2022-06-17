import linkedin from "../../images/linkedin.png";

export default function ScrollToTop() {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/darren-au-03/");
  };
  return (
    <div onClick={handleClick}>
      <div className="hover:bg-sky-700 flex mr-5 ml-5 ">
        <img src={linkedin} className="max-w-[40px]"></img>
      </div>
    </div>
  );
}

import linkedin from "../../images/github.png";

export default function ScrollToTop() {
  const handleClick = () => {
    window.open("https://github.com/darrenau03/");
  };
  return (
    <div onClick={handleClick}>
      <div className="hover:bg-sky-700  flex mr-5 ml-5 ">
        <img src={linkedin} className=" max-w-[40px]"></img>
      </div>
    </div>
  );
}

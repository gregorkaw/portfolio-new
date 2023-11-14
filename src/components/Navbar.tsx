import { useState, useEffect } from "react";

const Navbar = ({
  handleProjectsScroll,
  handleCSScroll,
  handleHeroScroll,
}: any) => {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  const buttonClass: string =
    "text-slate-200 hover:cursor-pointer hover:text-violet-700 duration-300";
  return (
    <div
      className="duration-500 fixed top-0 z-50 h-[8vh] w-full flex justify-center items-center gap-8 lg:gap-48"
      style={{ backgroundColor: scrollY > 300 ? "black" : "" }}
    >
      <a onClick={handleHeroScroll} className={buttonClass}>
        me.
      </a>
      <a onClick={handleProjectsScroll} className={buttonClass}>
        projects.
      </a>
      <a onClick={handleCSScroll} className={buttonClass}>
        contact.
      </a>
      <a
        href="https://www.instagram.com/szymon.quartet/"
        target="blank"
        className="text-slate-200 hidden md:block hover:cursor-pointer hover:text-violet-700 duration-300"
      >
        check my band!
      </a>
      <a
        href="https://www.instagram.com/szymon.quartet/"
        target="blank"
        className="block md:hidden text-slate-200 hover:cursor-pointer hover:text-violet-700 duration-300"
      >
        {"\u266b"}
      </a>
    </div>
  );
};

export default Navbar;

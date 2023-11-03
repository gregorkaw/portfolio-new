import cv from "/cv.pdf";

const Contact = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center bg-white text-black items-center gap-8">
      <h1 className="lg:text-9xl text-5xl">Contact me!</h1>
      <div className="flex justify-between gap-2 lg:gap-24">
        <a
          className="hover:text-violet-700 text-xl text-zinc-400 duration-500"
          href="https://github.com/gregorkaw"
          target="blank"
        >
          GitHub
        </a>
        <a
          className="hover:text-violet-700 text-xl text-zinc-400 duration-500"
          href="https://www.linkedin.com/in/gregor-kawecki/"
          target="blank"
        >
          LinkedIn
        </a>
        <a
          className="hover:text-violet-700 text-xl text-zinc-400 duration-500"
          href={cv}
          target="blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;

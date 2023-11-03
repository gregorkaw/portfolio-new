const Footer = () => {
  return (
    <div className="lg:flex-row flex flex-col-reverse justify-center items-center lg:justify-between w-full h-30 bg-black text-white lg:px-48 lg:py-12 px-4 pb-4">
      <p className="text-center lg:text-start">
        Copyright &copy; Grzegorz Kawecki 2023 <br /> All rights reserved
      </p>
      <p className="pt-2">
        Made by me too!:{" "}
        <a
          href="https://github.com/gregorkaw/portfolio-page"
          className="underline hover:text-violet-700 duration-300 decoration-violet-700"
        >
          link
        </a>
      </p>
    </div>
  );
};

export default Footer;

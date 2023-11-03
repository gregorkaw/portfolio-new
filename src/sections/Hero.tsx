const Hero = ({ handleProjectsScroll }: any) => {
  return (
    <div className="h-[100vh] bg-[url('./assets/hero.jpg')] bg-cover lg:bg-top bg-center flex justify-center lg:justify-end items-center">
      <div className="flex flex-col md:ml-12 w-[85%] lg:w-[50%] p-8">
        <h1 className="lg:text-8xl text-white md:text-4xl text-4xl text-center mb-8 leading-relaxed">
          hi! nice to meet You <br /> i'm grzegorz{" "}
        </h1>
        <button
          onClick={handleProjectsScroll}
          className="text-white hover:cursor-pointer duration-300 text-lg hover:text-violet-700 lg:text-4xl"
        >
          check my work!
        </button>
      </div>
    </div>
  );
};

export default Hero;

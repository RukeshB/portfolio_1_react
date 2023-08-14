const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full gap-4">
        <div className="max-w-[1000px] grid w-full gap-6 px-4 sm:grid-cols-2">
          <div className="sm:text-right">
            <h3 className="text-2xl font-bold md:text-4xl border-b-4 border-[#FDB515] inline">
              About
            </h3>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] grid w-full gap-4 sm:gap-6 px-4 sm:grid-cols-2">
          <p className="text-2xl font-bold md:text-4xl sm:text-right">
            Hi. I'm Rukesh Basukala, nice to meet you. Please take a look
            around.
          </p>
          <p>
            I am passionate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. What would you do if you had a
            software expert available at your fingertips?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

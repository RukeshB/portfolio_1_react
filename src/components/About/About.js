const About = () => {
  return (
    <div name="about" className="w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full gap-4">
        <div className="max-w-[1000px] grid w-full gap-6 px-4 sm:grid-cols-2">
          <div className="sm:text-right">
            <h3 className="inline title">About</h3>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] grid w-full gap-4 sm:gap-6 px-4 sm:grid-cols-2">
          <p className="text-2xl font-bold md:text-4xl sm:text-right">
            Hi. I'm Rukesh Basukala, nice to meet you. Please take a look
            around.
          </p>
          <p>
            I am a competent young, energetic, and passionate programmer with
            more than 1 year of experience in different stacks ( i.e java spring
            boot, Ruby on rails, and angular ). recently worked as an Associate
            Software Engineer on Ruby on Rails, and Tailwind CSS. Currently, I
            am extending my skill set by learning frontend library (i.e React)
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

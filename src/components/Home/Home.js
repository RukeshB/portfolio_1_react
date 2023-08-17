import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] h-full flex flex-col justify-center mx-auto px-8 ">
        <p className="text-[#FDB515]">Hi, my name is</p>
        <h1 className="text-[#ccd6f6] font-bold text-4xl md:text-7xl">
          Rukesh Basukala
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a full stack developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FDB515] hover:border-[#FDB515]">
              View Work
              <span className="duration-300 group-hover:rotate-90 group-hover:-mt-3">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

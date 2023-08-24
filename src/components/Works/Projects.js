import ip_address_tracker from "../../assets/images/project/ip_address_tracker.png";
import portfolio_1 from "../../assets/images/project/portfolio_1.png";
import LCBN from "../../assets/images/project/lcbn.png";
import snake_game from "../../assets/images/project/snake_game.png";
import trend_tour from "../../assets/images/project/trend_tour.png";
import quiz from "../../assets/images/project/quiz.png";
import real_chat from "../../assets/images/project/real-chat.png";

const projectList = [
  {
    title: "IP Address Tracker",
    image: ip_address_tracker,
    github_link: "https://github.com/RukeshB/ip_address_tracker",
    live_demo_link: "https://rukeshb.github.io/ip_address_tracker/",
  },
  {
    title: "Portfolio",
    image: portfolio_1,
    github_link: "https://github.com/RukeshB/portfolio_1_react",
    live_demo_link: "https://portfolio.rukeshb.com.np/",
  },
  {
    title: "LCBN",
    image: LCBN,
    github_link: "https://github.com/RukeshB/lcbn-react",
    live_demo_link: "https://lcbn.netlify.app/",
  },
  {
    title: "Real Chat",
    image: real_chat,
    github_link: "https://github.com/RukeshB/real_chat_react",
    live_demo_link: "https://real-chat.rukeshb.com.np/",
  },
  {
    title: "Snake Game",
    image: snake_game,
    github_link: "https://github.com/RukeshB/snake-game",
    live_demo_link: "https://rukeshb.github.io/snake-game/",
  },
  {
    title: "Trend Tour",
    image: trend_tour,
    github_link: "https://github.com/RukeshB/Trend-Tour",
    live_demo_link: "https://rukeshb.github.io/Trend-Tour/",
  },
  {
    title: "Quiz",
    image: quiz,
    github_link: "https://github.com/Confused-Owls/laravel-quiz",
    live_demo_link: "",
  },
  {
    title: "Expenses Tracking System",
    image: "",
    github_link: "https://github.com/RukeshB/expenses-tracker",
    live_demo_link: "",
  },
  {
    title: "Movie Review API",
    image: "",
    github_link: "https://github.com/RukeshB/movie-review-app-rails",
    live_demo_link: "",
  },
  {
    title: "HRM Clone API",
    image: "",
    github_link: "https://github.com/Sad-ikshya/HRM",
    live_demo_link: "",
  },
];

const ProjectContainer = (props) => {
  let buttons;

  let image = props.project.image ? (
    <img
      src={props.project.image}
      alt={props.project.title}
      className="object-cover object-center w-full h-full rounded-md"
    />
  ) : (
    <div className="flex items-center justify-center w-full h-full text-xl font-bold text-center">
      {props.project.title}
    </div>
  );

  if (props.project.live_demo_link) {
    buttons = (
      <div className="grid grid-cols-2 gap-4 text-center text-[#0a192f]">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.project.github_link}
          className="button"
        >
          Code
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.project.live_demo_link}
          className="button"
        >
          Demo
        </a>
      </div>
    );
  } else {
    buttons = (
      <div className="grid grid-cols-1 text-center text-[#0a192f]">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.project.github_link}
          className="button"
        >
          Code
        </a>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg shadow-md h-36 group shadow-gray-700">
      {/* hover div */}
      <div className="rounded-md absolute w-full h-full duration-200 bg-[#0000008f] group-hover:h-full hover-hover:h-0">
        <div className="flex flex-col items-center justify-center w-full h-full gap-8 opacity-100 group-hover:flex hover-hover:hidden">
          <h1 className="text-2xl font-bold">{props.project.title}</h1>
          {buttons}
        </div>
      </div>
      {image}
    </div>
  );
};

const projectContainerList = projectList.map((project) => {
  return <ProjectContainer project={project} key={project.title} />;
});

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      {/* title */}
      <div className="max-w-[1000px] w-full mb-2 ml-10 md:ml-2">
        <h3 className="inline title">
          Projects
        </h3>
      </div>
      {/* projects list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px]">
        {projectContainerList}
      </div>
    </div>
  );
};

export default Projects;

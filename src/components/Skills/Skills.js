import ruby from "../../assets/images/ruby.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import rails from "../../assets/images/rails.png";
import js from "../../assets/images/js.png";
import postgresql from "../../assets/images/postgresql.png";
import react from "../../assets/images/react.png";
import tailwindcss from "../../assets/images/tailwindcss.png";

const skillList = [
  {
    logo: html,
    name: "HTML",
  },
  {
    logo: css,
    name: "CSS",
  },
  {
    logo: js,
    name: "JS",
  },
  {
    logo: ruby,
    name: "Ruby",
  },
  {
    logo: tailwindcss,
    name: "Tailwind CSS",
  },
  {
    logo: react,
    name: "React",
  },
  {
    logo: postgresql,
    name: "PostgreSQL",
  },
  {
    logo: rails,
    name: "Ruby on Rails",
  },
];

const SkillsCard = (props) => {
  return (
    <div className="px-10 py-8 duration-150 shadow-md shadow-gray-700 hover:scale-110">
      <img src={props.logo} alt={props.name} className="w-20 mx-auto md:w-28" />
      <p className="mt-2">{props.name}</p>
    </div>
  );
};

const skillCardList = skillList.map((skill) => {
  return <SkillsCard logo={skill.logo} name={skill.name} key={skill.name} />;
});

const Skills = () => {
  return (
    <div className="w-full h-screen text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full gap-4">
        <div className="sm:text-right max-w-[1000px]">
          <h3 className="text-2xl font-bold md:text-4xl border-b-4 border-[#FDB515] inline">
            Technical Skills
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4 sm:gap-6">
          {skillCardList}
        </div>
      </div>
    </div>
  );
};

export default Skills;

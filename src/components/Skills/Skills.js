import ruby from "../../assets/images/ruby.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import rails from "../../assets/images/rails.png";
import js from "../../assets/images/js.png";
import postgresql from "../../assets/images/postgresql.png";
import react from "../../assets/images/react.png";
import tailwindcss from "../../assets/images/tailwindcss.png";
import { useEffect, useState } from "react";
import TabButton from "../common/TabButton";

const skillList = [
  {
    logo: html,
    name: "HTML",
    technology: "Frontend",
  },
  {
    logo: css,
    name: "CSS",
    technology: "Frontend",
  },
  {
    logo: js,
    name: "JS",
    technology: "Frontend",
  },
  {
    logo: ruby,
    name: "Ruby",
    technology: "Backend",
  },
  {
    logo: postgresql,
    name: "PostgreSQL",
    technology: "Database",
  },
  {
    logo: tailwindcss,
    name: "Tailwind CSS",
    technology: "Frontend",
  },
  {
    logo: react,
    name: "React",
    technology: "Frontend",
  },
  {
    logo: rails,
    name: "Ruby on Rails",
    technology: "Backend",
  },
];

const technology = ["All", "Frontend", "Backend", "Database"];

const SkillsCard = (props) => {
  return (
    <div className="px-10 py-8 duration-150 shadow-md shadow-gray-700 hover:scale-110">
      <img src={props.logo} alt={props.name} className="w-20 mx-auto md:w-28" />
      <p className="mt-2">{props.name}</p>
    </div>
  );
};

const Skills = () => {
  const [selectedTechnology, setSelectedTechnology] = useState("All");
  const [filteredSkillList, setFilterSkillList] = useState(skillList);

  const handleTecChange = (event) => {
    setSelectedTechnology(event.target.innerText);
  };

  useEffect(() => {
    if (selectedTechnology === "All") {
      setFilterSkillList(skillList);
    } else {
      const filtered = skillList.filter(
        (skill) => skill.technology === selectedTechnology
      );
      setFilterSkillList(filtered);
    }
  }, [selectedTechnology]);

  const skillCardList = filteredSkillList.map((skill) => {
    return <SkillsCard logo={skill.logo} name={skill.name} key={skill.name} />;
  });

  const tabs = technology.map((tec) => {
    return (
      <TabButton
        key={tec}
        title={tec}
        handleClick={handleTecChange}
        active={tec === selectedTechnology ? true : false}
      />
    );
  });

  return (
    <div name="skill" className="w-full min-h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full gap-4">
        <div className="max-w-[1000px]">
          <h3 className="title">Technical Skills</h3>
        </div>
        <div className="flex flex-row gap-4 text-xl">{tabs}</div>
        <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4 sm:gap-6">
          {skillCardList}
        </div>
      </div>
    </div>
  );
};

export default Skills;

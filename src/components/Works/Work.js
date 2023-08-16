import CodePen from "./CodePen";
import Projects from "./Projects";

const Works = () => {
  return (
    <div name="work" className="w-full min-h-screen text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full gap-6">
        {/* projects */}
        <Projects/>

        {/* code pen */}
        <CodePen/>
      </div>
    </div>
  );
};

export default Works;

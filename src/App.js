import About from "./components/About/About";
import Navbar from "./components/common/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Work";

function App() {
  return (
    <div className="bg-[#0a192f]">
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Works/>
    </div>
  );
}

export default App;

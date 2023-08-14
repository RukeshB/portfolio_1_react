import About from "./components/About/About";
import Navbar from "./components/common/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="bg-[#0a192f]">
     <Navbar/>
     <Home/>
     <About/>
    </div>
  );
}

export default App;

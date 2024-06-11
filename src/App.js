import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectsContainer from "./components/ProjectContainer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return <div>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <ProjectsContainer />
    <Contact />
    <Footer />
  </div>;
}

export default App;

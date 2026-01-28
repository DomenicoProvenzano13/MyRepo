import { Navbar } from "./components/Navbar";
import { AboutMe } from "./components/AboutMe";
import { Experiences } from "./components/Experiences";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="space-y-8">
      <Navbar />
      <AboutMe />
      <Experiences />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

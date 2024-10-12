import { Header } from "./components/Header";
import { HeroArea } from "./components/HeroArea";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Activities } from "./components/Activities";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";

import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <HeroArea />
      <h1 id="about" className="title">
        About me
      </h1>
      <p className="description">I'm a Full Stack developer in both MERN and LAMP stacks with over 10 years of experience. I have an eye for design, UI/UX and accessibility. I'm an expert in WordPress and Shopify development, a highly creative problem solver, and an empathic leader and mentor. </p>
      <About />
     
      <h1 id="projects" className="title">
        Projects
      </h1>
      <p className="description">Highlights of my best work</p>
      <Projects />
      <h1 id="activities" className="title">
        Activities
      </h1>
      <p className="description">My interests and volunteering activities</p>
      <Activities />
      <h1 id="contact" className="title">
        Let's connect
      </h1>
      <p className="description">I'm available to work!</p>
      <Contacts />
      <Footer />
    </div>
  );
}
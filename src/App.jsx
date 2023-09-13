import { BrowserRouter } from "react-router-dom";
import { About, Experience, Hero, Navbar, Tech } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

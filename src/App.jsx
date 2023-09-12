import { BrowserRouter } from "react-router-dom";
import { About, Experience, Hero, Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <About />
          <Experience />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

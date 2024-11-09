import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";

// Dynamically import each component
const Navbar = React.lazy(() => import("./components/Navbar"));
const Hero = React.lazy(() => import("./components/Hero"));
const About = React.lazy(() => import("./components/About"));
const Experience = React.lazy(() => import("./components/Experience"));
const Tech = React.lazy(() => import("./components/Tech"));
const Works = React.lazy(() => import("./components/Works"));
const Feedbacks = React.lazy(() => import("./components/Feedbacks"));
const Contact = React.lazy(() => import("./components/Contact"));
const StarsCanvas = React.lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <BrowserRouter>
      {/* Suspense component to wrap lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
              <Hero />
            </Suspense>
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            <Suspense fallback={<div>Loading...</div>}>
              <StarsCanvas />
            </Suspense>
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

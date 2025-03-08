import React, { Suspense } from "react";
import { ThemeProvider,  } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import "./App.css";

// Lazy load the components
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      {/* Wrap everything in Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

const Home = () => {
  

  return (
    <div>
      
      <h1>Home Page</h1>
      <p>This is the home page.</p>
      <section>
        <h2>Welcome to our website!</h2>
        <p>We are glad to have you here. Explore our content and learn more about what we offer.</p>
      </section>
      
      
      {/* Lazy loaded components */}
      <Suspense fallback={<div>Loading About Section...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading Contact Section...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default App;

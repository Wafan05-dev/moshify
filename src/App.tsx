import Domain from "./components/Domain";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
import Showcase from "./components/Showcase";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Domain />
        <Plans />
        <Feature />
        <Showcase />
        <Testimonial />
      </main>
    </>
  );
}

export default App;

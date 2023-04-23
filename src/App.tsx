import Domain from "./components/Domain";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;

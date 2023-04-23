import Domain from "./components/Domain";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Hero />
      <Domain />
      <Plans />
    </>
  );
}

export default App;

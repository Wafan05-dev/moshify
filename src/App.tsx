import Domain from "./components/Domain";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";

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
      </main>
    </>
  );
}

export default App;

import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
function App() {
  return (
    <div className="App text-white">
      <Hero />
      <Programs />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

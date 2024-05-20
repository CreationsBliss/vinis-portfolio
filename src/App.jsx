import "./App.css";
import Experience from "./components/Experience/Experience";
import Expertise from "./components/Expertise/Expertise";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Expertise></Expertise>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  );
}

export default App;

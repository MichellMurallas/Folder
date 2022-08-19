import React, { useState, useEffect } from "react";
import './App.css';
import Abaut from "./Components/Abaut/Abaut";
import Cover from './Components/Cover/Cover';
import Footer from "./Components/Footer/Footer";
import Info from "./Components/Info/Info";
import Navbar from './Components/Navbar/Navbar';
import Slider from "./Components/Slider/Slider";



function App() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const handleScroll = () =>{
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() =>{
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])

  return (
    <div className="App">
      <Cover />
      <Navbar isScrolling={scrollHeight} />
      <Abaut />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;

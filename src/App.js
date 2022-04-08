import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./components/Nav/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About/index";
import Portfolio from "./components/Portfolio/index"
import Contact from "./components/Contact/index"
import Resume from "./components/Resume/index";
import Footer from "./components/Footer/Footer"



function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<About/>}/>
          <Route exact path="/portfolio" element={<Portfolio/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/resume" element={<Resume/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;
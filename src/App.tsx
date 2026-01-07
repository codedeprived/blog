import {Navbar} from "./components/layout/navbar/Navbar";
import {Footer} from "./components/layout/footer/footer";
import { Section } from "./components/layout/section/Section";
import { JourneySection } from "./components/layout/section/journeysection/JourneySection.tsx";
import './App.css'
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About.tsx";
import Projects from "./pages/Projects/Projects.tsx";


function App() {

  return (
      <>
      <Navbar />
      <Routes>

        <Route path="/about" element={<About/>}/> 
        <Route path="/project" element={<Projects/>}/> 

      </Routes>
      <Section/> 
      <JourneySection/>
      <Footer/>
    </>
  )
}

export default App

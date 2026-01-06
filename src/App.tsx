import {Navbar} from "./components/layout/navbar/Navbar";
import {Footer} from "./components/layout/footer/footer";
import { Section } from "./components/layout/section/Section";
import { JourneySection } from "./components/layout/section/journeysection/JourneySection.tsx";
import './App.css'


function App() {

  return (
      <>
      <Navbar />
      <Section/> 
      <JourneySection/>
      <Footer/>
    </>
  )
}

export default App

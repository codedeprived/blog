import { Hero } from "../header/Hero";
import { HeroContent } from "./content/HeroContent";
import "./section.css";

function Section() {
  return (
    <section className="section">
      <div className="section-container">
        <HeroContent />
        <Hero />
      </div>
    </section>
  );
}

export { Section };

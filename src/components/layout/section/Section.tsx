import { Hero } from '../header/Hero'
import { HeroContent } from './content/HeroContent'
import './section.css'


function Section() {

    return <>
        <div className="section">
            <Hero/>
            <HeroContent/>
        </div>
    </>
}

export {Section}
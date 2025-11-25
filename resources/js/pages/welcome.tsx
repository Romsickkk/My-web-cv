import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { isModalOpen } from '@/services/modalLock';
import AboutMe from '@/UI/AboutMe';
import Contact from '@/UI/Contact';
import CustomCursor from '@/UI/CustomCursor';
import Footer from '@/UI/Footer';
import Hero from '@/UI/Hero';
import ItBerries from '@/UI/ItBerries';
import Portfolio from '@/UI/Portfolio';
import Skills from '@/UI/Skills';

export default function Welcome() {
    const { handleMouseDown, handleMouseMove, handleMouseUp } = useSmoothScroll(isModalOpen);

    console.log('%cHELLO, FRIEND!', 'font-size: 40px; font-weight: bold; color: #d6d6d6; text-shadow: 2px 2px 0 #616161;');
    console.log('%cAll my code in GITHUB!', 'font-size: 40px; font-weight: bold; color: #d6d6d6; text-shadow: 2px 2px 0 #616161;');
    console.log('https://github.com/Romsickkk/My-web-cv');
    return (
        <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="overflow-hidden select-none"
        >
            <CustomCursor />

            <Hero />
            <ItBerries />
            <AboutMe />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

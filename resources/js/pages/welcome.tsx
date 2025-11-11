import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { isModalOpen } from '@/services/modalLock';
import AboutMe from '@/UI/AboutMe';
import Contact from '@/UI/Contact';
import CustomCursor from '@/UI/CustomCursor';
import Hero from '@/UI/Hero';
import ItBerries from '@/UI/ItBerries';
import LoremText from '@/UI/LoremText';
import Portfolio from '@/UI/Portfolio';
import Skills from '@/UI/Skills';
import { useEffect, useState } from 'react';

export default function Welcome() {
    const [open, setOpen] = useState(false);
    const { handleMouseDown, handleMouseMove, handleMouseUp } = useSmoothScroll(isModalOpen);
    useEffect(() => {
        const handleLoad = () => {
            setOpen(true);
        };

        if (document.readyState === 'complete') handleLoad();
        else window.addEventListener('load', handleLoad);

        return () => window.removeEventListener('load', handleLoad);
    }, []);
    console.log('%cHELLO, FRIEND!', 'font-size: 40px; font-weight: bold; color: #d6d6d6; text-shadow: 2px 2px 0 #616161;');
    console.log('%cAll my code in GITHUB!', 'font-size: 40px; font-weight: bold; color: #d6d6d6; text-shadow: 2px 2px 0 #616161;');
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
            <LoremText />
        </div>
    );
}

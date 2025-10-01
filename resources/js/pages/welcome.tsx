import AboutMe from '@/UI/AboutMe';
import Hero from '@/UI/Hero';
import ItBerries from '@/UI/ItBerries';
import LoremText from '@/UI/LoremText';
import { useEffect, useRef } from 'react';

export default function Welcome() {
    const isDragging = useRef(false);
    const startY = useRef(0);
    const startScroll = useRef(0);
    const velocity = useRef(0);
    const lastY = useRef(0);
    const rafId = useRef<number | null>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        startY.current = e.clientY;
        startScroll.current = window.scrollY;
        lastY.current = e.clientY;
        if (rafId.current) cancelAnimationFrame(rafId.current);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;
        const delta = lastY.current - e.clientY;
        velocity.current = delta;
        window.scrollTo(0, window.scrollY + delta);
        lastY.current = e.clientY;
    };

    const handleMouseUp = () => {
        if (!isDragging.current) return;
        isDragging.current = false;

        const decay = 0.97;
        const step = () => {
            window.scrollTo(0, window.scrollY + velocity.current);
            velocity.current *= decay;
            if (Math.abs(velocity.current) > 0.5) {
                rafId.current = requestAnimationFrame(step);
            } else {
                rafId.current = null;
            }
        };
        rafId.current = requestAnimationFrame(step);
    };

    useEffect(() => {
        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="overflow-hidden"
        >
            <Hero />
            <ItBerries />
            <AboutMe />
            <LoremText />
        </div>
    );
}

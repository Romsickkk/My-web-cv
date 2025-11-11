import { useEffect, useRef, useState } from 'react';

function FadeInOnView({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const measureRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

    useEffect(() => {
        if (!measureRef.current) return;

        const resizeObserver = new ResizeObserver((entries) => {
            const box = entries[0].contentRect;
            setSize({ w: box.width, h: box.height });
        });

        resizeObserver.observe(measureRef.current);

        return () => resizeObserver.disconnect();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.7 },
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    if (!isVisible) {
        return (
            <>
                <div ref={ref} style={{ width: size.w, height: size.h }} />

                <div ref={measureRef} style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none' }}>
                    {children}
                </div>
            </>
        );
    }

    return (
        <div ref={ref} className="transform transition-all duration-100 ease-out">
            {children}
        </div>
    );
}

export default FadeInOnView;

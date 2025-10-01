import { useEffect, useRef, useState } from 'react';

function FadeInOnView({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // рендерим элемент сразу при попадании в экран
                    observer.disconnect(); // показываем один раз
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' },
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    // контейнер не рендерится пока не виден → display: none
    if (!isVisible) return <div className="h-100 w-100" ref={ref} />;

    // как только появится → сразу рендер с внутренними анимациями
    return (
        <div ref={ref} className="transform transition-all duration-100 ease-out">
            {children}
        </div>
    );
}

export default FadeInOnView;

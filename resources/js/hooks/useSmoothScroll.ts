import { useEffect, useRef } from 'react';

export const useSmoothScroll = (isModalOpen: React.RefObject<boolean>) => {
    const isDragging = useRef(false);
    const startY = useRef(0);
    const startScroll = useRef(0);
    const velocity = useRef(0);
    const lastY = useRef(0);
    const rafId = useRef<number | null>(null);
    const currentScroll = useRef(0);
    const targetScroll = useRef(0);
    const isAnimating = useRef(false);
    window.scrollTo(0, 0);
    useEffect(() => {
        const handleLoad = () => window.scrollTo(0, 0);
        {
            const initialY = window.scrollY || 0;
            currentScroll.current = initialY;
            targetScroll.current = initialY;
        }

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    useEffect(() => {
        const ease = 0.07;
        const scrollSpeed = 2;

        const animate = () => {
            const diff = targetScroll.current - currentScroll.current;
            currentScroll.current += diff * ease;
            window.scrollTo(0, currentScroll.current);

            if (Math.abs(diff) > 0.5) {
                requestAnimationFrame(animate);
                isAnimating.current = true;
            } else {
                isAnimating.current = false;
            }
        };

        const handleWheel = (e: WheelEvent) => {
            if (isModalOpen.current) return;

            e.preventDefault();

            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
                rafId.current = null;
                velocity.current = 0;
                isDragging.current = false;
            }

            // Синхронизируем состояние ТОЛЬКО если не анимировали до этого
            if (!isAnimating.current) {
                currentScroll.current = window.scrollY;
                targetScroll.current = window.scrollY;
            }

            targetScroll.current += e.deltaY * scrollSpeed;

            const maxScroll = document.body.scrollHeight - window.innerHeight;
            targetScroll.current = Math.max(0, Math.min(targetScroll.current, maxScroll));

            if (!isAnimating.current) animate();
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [isModalOpen]);

    useEffect(() => {
        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    return {
        handleMouseDown: (e: React.MouseEvent) => {
            if (e.button !== 0) return;

            currentScroll.current = window.scrollY;
            targetScroll.current = window.scrollY;

            isDragging.current = true;
            startY.current = e.clientY;
            startScroll.current = window.scrollY;
            lastY.current = e.clientY;

            if (rafId.current) cancelAnimationFrame(rafId.current);
        },
        handleMouseMove: (e: React.MouseEvent) => {
            if (!isDragging.current || isModalOpen.current) return;

            const delta = lastY.current - e.clientY;
            velocity.current = delta;
            const newScroll = window.scrollY + delta;
            window.scrollTo(0, newScroll);
            currentScroll.current = newScroll;
            targetScroll.current = newScroll;
            lastY.current = e.clientY;
        },
        handleMouseUp: () => {
            if (!isDragging.current) return;
            isDragging.current = false;
            const decay = 0.97;
            const step = () => {
                const newScroll = window.scrollY + velocity.current;
                window.scrollTo(0, newScroll);
                currentScroll.current = newScroll;
                targetScroll.current = newScroll;
                velocity.current *= decay;
                if (Math.abs(velocity.current) > 0.5) rafId.current = requestAnimationFrame(step);
                else rafId.current = null;
            };
            rafId.current = requestAnimationFrame(step);
        },
    };
};

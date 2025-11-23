import { useCallback, useEffect, useRef } from 'react';

export function useSmoothNavigation() {
    const animationRef = useRef<number | null>(null);
    const isAnimating = useRef(false);

    const cancelAnimation = useCallback(() => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
        isAnimating.current = false;
    }, []);

    const scrollTo = useCallback(
        (targetY: number, duration: number = 500) => {
            cancelAnimation();

            const startY = window.scrollY;
            const adjustedTargetY = targetY - 35;
            const distance = adjustedTargetY - startY;
            let startTime: number | null = null;
            isAnimating.current = true;

            const animate = (time: number) => {
                if (!startTime) startTime = time;
                const elapsed = time - startTime;
                const progress = Math.min(elapsed / duration, 1);
                window.scrollTo(0, startY + distance * easeInOutQuad(progress));

                if (progress < 1 && isAnimating.current) {
                    animationRef.current = requestAnimationFrame(animate);
                } else {
                    animationRef.current = null;
                    isAnimating.current = false;
                }
            };

            animationRef.current = requestAnimationFrame(animate);

            return cancelAnimation;
        },
        [cancelAnimation],
    );

    useEffect(() => {
        const handleWheel = () => {
            if (isAnimating.current) {
                cancelAnimation();
            }
        };

        const handleClick = () => {
            if (isAnimating.current) {
                cancelAnimation();
            }
        };

        const handleTouchStart = () => {
            if (isAnimating.current) {
                cancelAnimation();
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                isAnimating.current &&
                (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'PageUp' || e.key === 'PageDown' || e.key === 'Home' || e.key === 'End')
            ) {
                cancelAnimation();
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: true });
        window.addEventListener('mousedown', handleClick);
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('mousedown', handleClick);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [cancelAnimation]);

    return {
        scrollTo,
        cancelNavigation: cancelAnimation,
        isAnimating: () => isAnimating.current,
    };
}

function easeInOutQuad(t: number) {
    let result: number;

    if (t < 0.5) {
        result = 2 * t * t;
    } else {
        result = -1 + (4 - 2 * t) * t;
    }

    return result;
}

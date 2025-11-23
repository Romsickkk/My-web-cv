import { useEffect, useRef, useState } from 'react';

function CustomCursor() {
    const ref = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;
        let mouseDown = false;
        let scale = 1;
        let targetScale = 1;

        const cursor = ref.current!;
        let x = -10,
            y = -10,
            targetX = -50,
            targetY = 0;

        const move = (e: MouseEvent) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };

        const animate = () => {
            if (mouseDown) {
                x += targetX - x;
                y += targetY - y;
            } else {
                x += (targetX - x) * 0.2;
                y += (targetY - y) * 0.2;
            }

            scale += (targetScale - scale) * 0.2;

            let targetWidth = 32;
            const el = document.elementFromPoint(targetX, targetY);

            if (!mouseDown && el) {
                let node: HTMLElement | null = el as HTMLElement;
                let isClickable = false;
                let blockScale = false;

                while (node) {
                    if (node.classList.contains('cursor-block')) {
                        blockScale = true;
                        break;
                    }

                    if (
                        node.tagName === 'BUTTON' ||
                        node.tagName === 'A' ||
                        node.getAttribute('role') === 'button' ||
                        node.classList.contains('cursor-pointer') ||
                        node.classList.contains('hover:cursor-pointer')
                    ) {
                        isClickable = true;
                        break;
                    }

                    if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
                        targetWidth = 3;
                    }

                    node = node.parentElement;
                }

                if (blockScale) {
                    targetScale = 1;
                } else {
                    targetScale = isClickable ? 1.7 : 1;
                }
            }

            const currentWidth = parseFloat(cursor.style.width) || 32;
            const newWidth = currentWidth + (targetWidth - currentWidth) * 0.2;
            cursor.style.width = `${newWidth}px`;

            cursor.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', move);
        animate();

        const handleMouseDown = () => {
            targetScale = 0.3;
            mouseDown = true;
        };
        const handleMouseUp = () => {
            targetScale = 1;
            mouseDown = false;
        };

        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isMobile]);
    if (isMobile) return null;
    return (
        <div
            ref={ref}
            className="pointer-events-none fixed top-0 left-0 z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 mix-blend-difference"
        />
    );
}

export default CustomCursor;

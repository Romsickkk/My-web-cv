import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
function HeroImg() {
    const { scrollYProgress } = useScroll();

    const scrollX = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1500, 500]);
    const smoothX = useSpring(scrollX, { stiffness: 50, damping: 20 });

    const scrollOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    return (
        <div className="relative h-full w-full overflow-hidden bg-contain bg-no-repeat">
            <img draggable={false} src="/Rectangle.svg" alt="Rectangle" className="absolute top-0 right-0 h-full w-full object-cover object-left" />
            <motion.img
                src="/me.png"
                alt="me"
                draggable={false}
                initial={{ opacity: 0, x: -window.innerWidth / 4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    opacity: { duration: 2, ease: 'easeOut' },
                    x: { duration: 0.5, ease: 'easeOut' },
                }}
                className="absolute right-20 bottom-0 h-[85%] w-auto object-contain"
                style={{
                    x: smoothX,
                    opacity: scrollOpacity,
                }}
            />
        </div>
    );
}

export default HeroImg;

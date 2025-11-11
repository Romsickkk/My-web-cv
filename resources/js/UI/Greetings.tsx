import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Socials from './Socials';

const letterVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
};

function SplitText({ text, className = '' }: { text: string; className?: string }) {
    return (
        <motion.h1
            className={`whitespace-nowrap ${className}`}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.09, staggerDirection: -1 }}
        >
            {text.split('').map((char, i) => (
                <motion.span key={i} variants={letterVariants} style={{ display: 'inline-block' }}>
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.h1>
    );
}

function Greetings() {
    const { scrollYProgress } = useScroll();

    const scrollX = useTransform(scrollYProgress, [0, 0.3, 1], [0, -1500, -500]);
    const smoothX = useSpring(scrollX, { stiffness: 40, damping: 20 });

    const scrollOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    return (
        <div className="ml-10 flex min-w-[300px] flex-col justify-center">
            <div className="flex w-full flex-1 flex-col justify-center px-4">
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, x: window.innerWidth / 4 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ x: smoothX, opacity: scrollOpacity }}
                >
                    <h2 className="font-raleway mb-3 text-[clamp(20px,5vw,40px)] font-bold whitespace-nowrap text-black">Hi, I am</h2>

                    <SplitText text="Roman Babayan" className="font-raleway -ml-1 text-[clamp(30px,10vw,80px)] font-bold text-black" />

                    <h3 className="font-raleway text-[clamp(14px,3vw,25px)] font-extrabold text-[#909090] underline">Full stack Developer</h3>

                    <Socials />
                </motion.div>
            </div>
        </div>
    );
}

export default Greetings;

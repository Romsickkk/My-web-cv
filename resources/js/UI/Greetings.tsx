import { useLang, useT } from '@/context/LangContext';
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
    const t = useT();
    const { lang } = useLang();
    return (
        <div className="flex min-w-[300px] flex-col justify-center lg:ml-10">
            <div className="flex w-full flex-1 flex-col justify-center px-4">
                <img
                    draggable={false}
                    src="/ReversedRectangle.svg"
                    alt="ReversedRectangle"
                    className="top-30% absolute right-0 h-full w-full object-cover lg:hidden lg:object-left"
                />
                <motion.div
                    className="z-10 flex w-full flex-col gap-5 max-lg:-ml-2 max-lg:flex-row max-lg:items-end"
                    initial={{ opacity: 0, x: window.innerWidth / 4 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ x: smoothX, opacity: scrollOpacity }}
                >
                    <div className="flex flex-col">
                        <h2 className="font-raleway text-[clamp(20px,5vw,40px)] font-bold text-nowrap whitespace-nowrap text-black max-lg:mb-[-10px] max-lg:text-white">
                            {t.welcome.greetings}
                        </h2>
                        <SplitText
                            key={lang}
                            text={t.welcome.name}
                            className={`font-raleway font-bold text-nowrap text-black mix-blend-difference max-lg:text-white ${lang === 'am' ? 'text-[clamp(30px,10vw,60px)] max-lg:text-[clamp(30px,10vw,30px)]' : '-ml-1 text-[clamp(30px,10vw,80px)] max-lg:text-[clamp(30px,10vw,50px)]'}`}
                        />
                        <h3 className="font-raleway text-[clamp(20px,10vw,25px)] font-extrabold text-nowrap text-[#909090] underline max-lg:mt-[-10px] max-lg:text-[clamp(15px,10vw,20px)] max-lg:text-[#a0a0a0]">
                            {t.welcome.specialty}
                        </h3>
                    </div>
                    <Socials />
                </motion.div>
            </div>
        </div>
    );
}

export default Greetings;

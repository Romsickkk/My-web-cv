import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

function HeroImg() {
    const { scrollYProgress } = useScroll();

    // const [_windowWidth, setWindowWidth] = useState(0);

    const scrollX = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1500, 500]);
    const smoothX = useSpring(scrollX, { stiffness: 50, damping: 20 });

    // const _scrollOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    // useEffect(() => {
    //     setWindowWidth(window.innerWidth);

    //     const handleResize = () => {
    //         setWindowWidth(window.innerWidth);
    //     };

    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    return (
        <div className="overflow relative h-full w-full bg-contain bg-no-repeat max-lg:h-screen">
            <img
                draggable={false}
                src="/Rectangle.svg"
                alt="Rectangle"
                className="absolute top-0 right-0 h-full w-full object-cover max-lg:scale-1000 lg:object-left"
            />
            <motion.img
                src="/me.png"
                alt="me"
                draggable={false}
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    opacity: { duration: 2, ease: 'easeOut' },
                    x: { duration: 0.5, ease: 'easeOut' },
                }}
                className="absolute bottom-0 left-1/2 h-[100%] w-auto -translate-x-1/2 object-contain object-bottom max-sm:scale-130 lg:right-20 lg:left-auto lg:h-[85%] lg:-translate-x-0"
                style={{
                    x: smoothX,
                }}
            />
        </div>
    );
}

export default HeroImg;

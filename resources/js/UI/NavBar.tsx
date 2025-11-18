import { useSmoothNavigation } from '@/hooks/useSmoothNavigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BurgerMenu from './BurgerMenu';

function NavBar() {
    const { scrollTo } = useSmoothNavigation();
    const [isSticky, setIsSticky] = useState(window.scrollY > 100);
    const linkBase = 'justify-center text-center text-[15px] font-bold leading-normal';

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            scrollTo(element.offsetTop, 2500);
        }
    };

    return (
        <motion.nav
            className={`font-montserrat z-20 flex content-center items-center gap-8 overflow-hidden text-white ${
                isSticky
                    ? 'fade-in-down fixed top-0 right-0 w-full justify-end bg-black/95 py-3 shadow-lg lg:pr-60'
                    : 'absolute top-0 right-0 mt-7 mr-2 lg:pr-60'
            }`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
        >
            <div className="flex flex-row gap-8 text-white max-lg:hidden">
                <button onClick={() => handleNavClick('about')} className={`${linkBase} cursor-pointer border-none bg-none`}>
                    About me
                </button>
                <button onClick={() => handleNavClick('skills')} className={`${linkBase} cursor-pointer border-none bg-none`}>
                    Skills
                </button>
                <button onClick={() => handleNavClick('portfolio')} className={`${linkBase} cursor-pointer border-none bg-none`}>
                    Portfolio
                </button>
                <button
                    onClick={() => handleNavClick('contact')}
                    className={`${linkBase} flex h-[46px] w-[147px] flex-shrink-0 cursor-pointer flex-col rounded-[30px] border-4 border-white bg-white p-1 text-black`}
                >
                    CONTACT ME
                </button>
            </div>

            <BurgerMenu />
        </motion.nav>
    );
}

export default NavBar;

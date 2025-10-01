import { motion } from 'framer-motion';
function NavBar() {
    const linkBase = 'justify-center text-center text-[15px] font-bold leading-normal';

    return (
        <motion.nav
            className="font-montserrat absolute top-0 right-0 z-10 mt-7 mr-2 flex content-center items-center gap-8 text-white lg:mr-60"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
        >
            <a href="#" className={linkBase}>
                About me
            </a>
            <a href="#" className={linkBase}>
                Skills
            </a>
            <a href="#" className={linkBase}>
                Portfolio
            </a>
            <a
                href="#"
                className={`${linkBase} flex h-[46px] w-[147px] flex-shrink-0 flex-col rounded-[30px] border-4 border-white bg-white p-1 text-black`}
            >
                CONTACT ME
            </a>
        </motion.nav>
    );
}

export default NavBar;

import { Lang, useLang } from '@/context/LangContext';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type LangSwitcherProps = {
    onClick?: () => void;
};

function LangSwitcher({ onClick }: LangSwitcherProps) {
    const { lang, setLang } = useLang();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    const languages = ['en', 'ru', 'am'];

    const container = {
        hidden: { opacity: 0, y: -5 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.08,
            },
        },
        exit: { opacity: 0, y: -5 },
    };

    const item = {
        hidden: { opacity: 0, y: -5 },
        visible: { opacity: 1, y: 0 },
    };
    const handleSelect = (code: Lang) => {
        onClick?.();
        setLang(code);
        setIsOpen(false);
    };

    useEffect(() => {
        const onScrollClose = () => setIsOpen(false);

        const onOutsideClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', onScrollClose);
        document.addEventListener('mousedown', onOutsideClick);

        return () => {
            window.removeEventListener('scroll', onScrollClose);
            document.removeEventListener('mousedown', onOutsideClick);
        };
    }, []);

    return (
        <div className="relative select-none" ref={ref}>
            <div className="">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex cursor-pointer flex-row content-center items-center gap-1 rounded border border-white bg-transparent px-2 py-1 font-bold text-white"
                >
                    <img className="max-h-[1rem] invert" src="/globe-icon.svg" alt="HTML Logo" />
                    {lang.toUpperCase()}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute z-50 mt-2 w-full rounded border bg-black/50 shadow-lg"
                    >
                        {languages.map((l) => (
                            <motion.button
                                key={l}
                                variants={item}
                                onClick={
                                    lang === l
                                        ? undefined
                                        : () => {
                                              handleSelect(l as Lang);
                                          }
                                }
                                className={`w-full cursor-pointer justify-center px-3 py-2 text-center font-bold hover:bg-white/10 ${
                                    lang === l ? 'cursor-block bg-white text-black underline' : 'text-white'
                                }`}
                            >
                                {l.toUpperCase()}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default LangSwitcher;

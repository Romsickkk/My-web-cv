import { useSmoothNavigation } from '@/hooks/useSmoothNavigation';
import { useEffect, useState } from 'react';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollTo } = useSmoothNavigation();

    const handleNavClick = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            scrollTo(element.offsetTop, 2500);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }

        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const linkBase = 'text-white text-lg text-center no-underline';

    return (
        <div className="menu lg:hidden">
            <input
                type="checkbox"
                id="burger-checkbox"
                className="invisible absolute"
                checked={isOpen}
                onChange={(e) => setIsOpen(e.target.checked)}
            />

            <label
                htmlFor="burger-checkbox"
                className="relative z-[2000] mx-auto my-2 mr-5 block h-[26px] w-10 cursor-pointer border-none bg-transparent"
            >
                <div
                    className={`absolute left-0 h-1 w-full rounded-[10px] bg-white transition-all duration-300 ${
                        isOpen ? 'top-[11px] rotate-45 shadow-none' : 'top-0 shadow-[0_11px_0_#ffffff]'
                    }`}
                    style={{
                        transitionDelay: isOpen ? '0s' : '0.15s',
                    }}
                />

                <div
                    className={`absolute bottom-0 left-0 h-1 w-full rounded-[10px] bg-white transition-all duration-300 ${
                        isOpen ? 'bottom-[11px] -rotate-45' : 'bottom-0'
                    }`}
                    style={{
                        transitionDelay: isOpen ? '0.15s' : '0s',
                    }}
                />
            </label>

            <ul
                className={`z-[2000]combined fixed top-0 left-0 z-500 m-0 mt-[65.px] flex h-screen w-screen list-none flex-col gap-3 bg-black/90 pt-20 shadow-lg transition-transform duration-300 ${
                    isOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <li>
                    <button
                        onClick={() => {
                            handleNavClick('about');
                            setIsOpen(false);
                        }}
                        className={`${linkBase} hover:bg-opacity-20 block w-full cursor-pointer border-none bg-none px-2 py-2 transition-colors hover:bg-white`}
                    >
                        About me
                    </button>
                </li>

                <li>
                    <button
                        onClick={() => {
                            handleNavClick('skills');
                            setIsOpen(false);
                        }}
                        className={`${linkBase} hover:bg-opacity-20 block w-full px-2 py-2 transition-colors hover:bg-white`}
                    >
                        Skills
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            handleNavClick('portfolio');
                            setIsOpen(false);
                        }}
                        className={`${linkBase} hover:bg-opacity-20 block w-full px-2 py-2 transition-colors hover:bg-white`}
                    >
                        Portfolio
                    </button>
                </li>
                <li className="flex justify-center pt-4">
                    <button
                        onClick={() => {
                            handleNavClick('contact');
                            setIsOpen(false);
                        }}
                        className="hover:bg-opacity-20 text-bold block w-full bg-white px-2 py-2 text-black transition-colors"
                    >
                        CONTACT ME
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default BurgerMenu;

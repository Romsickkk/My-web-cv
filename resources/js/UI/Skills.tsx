import { useState } from 'react';
import AnimatedCard from './AnimatedCard';
import Button from './Button';
import FadeInOnView from './FadeInOnView';

function Skills() {
    const skillClass = 'fade-in-center flex flex-col items-center justify-center opacity-0 gap-7 font-medium text-xl';
    const [expanded, setExpanded] = useState(false);
    const [isMoreSkills, setIsMoreSkills] = useState(false);

    function handleLearnMore() {
        setExpanded((prev) => !prev);
        if (isMoreSkills) {
            setIsMoreSkills((prev) => !prev);
        } else {
            setTimeout(() => {
                setIsMoreSkills((prev) => !prev);
            }, 680);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center bg-[#d6d6d6]">
            <FadeInOnView>
                <AnimatedCard name="SKILLS" className="animation-delay-250 mt-10" />
            </FadeInOnView>
            <div className="mx-auto mb-20 flex flex-col md:w-[700px]">
                <h2 className={`fade-in-up font-montserrat mb-10 h-15 w-80 text-2xl font-bold select-none max-sm:text-center md:pl-5`}>USING NOW:</h2>
                <div
                    className={`flex flex-col justify-between transition-all duration-1200 ease-in-out max-sm:items-center ${expanded ? 'min-h-[1600px] md:min-h-[625px]' : 'min-h-[813px] md:min-h-[313px]'}`}
                >
                    <FadeInOnView>
                        <div className="grid grid-cols-4 gap-20 max-sm:flex max-sm:flex-col">
                            <div className={` ${skillClass} animation-delay-100`}>
                                <img className="h-15" src="/html-logo.svg" alt="HTML Logo" />
                                <h3 className="font-montserrat">HTML5</h3>
                            </div>

                            <div className={`${skillClass} animation-delay-200`}>
                                <img className="h-15" src="/css-logo.svg" alt="css Logo" />
                                <h3 className="font-montserrat">CSS3</h3>
                            </div>

                            <div className={`${skillClass} animation-delay-300 max-sm:hidden`}>
                                <img className="h-15" src="/tailwind-logo.svg" alt="tailwind Logo" />
                                <h3 className="font-montserrat">TAILWIND</h3>
                            </div>
                            <div className={`${skillClass} animation-delay-400 max-sm:hidden`}>
                                <img className="h-15" src="/ts-logo.svg" alt="ts Logo" />
                                <h3 className="font-montserrat">TYPESCRIPT</h3>
                            </div>

                            <div className={`${skillClass} animation-delay-500`}>
                                <img className="h-15" src="/react-logo.svg" alt="react Logo" />
                                <h3 className="font-montserrat">REACT</h3>
                            </div>
                            <div className={`${skillClass} animation-delay-600`}>
                                <img className="h-15" src="/laravel-logo.svg" alt="laravel Logo" />
                                <h3 className="font-montserrat">LARAVEL</h3>
                            </div>
                            <div className={`${skillClass} animation-delay-700 max-sm:hidden`}>
                                <img className="h-15" src="/mysql-logo.svg" alt="mysql Logo" />
                                <h3 className="font-montserrat">MySQL</h3>
                            </div>
                            <div className={`${skillClass} animation-delay-800 max-sm:hidden`}>
                                <img className="h-15" src="/git-logo.svg" alt="git Logo" />
                                <h3 className="font-montserrat">GIT</h3>
                            </div>

                            {isMoreSkills && (
                                <>
                                    <div className={`${skillClass} animation-delay-100`}>
                                        <img className="h-15" src="/react-logo.svg" alt="HTML Logo" />
                                        <h3 className="font-montserrat">REACT</h3>
                                    </div>
                                    <div className={`${skillClass} animation-delay-200`}>
                                        <img className="h-15" src="/laravel-logo.svg" alt="HTML Logo" />
                                        <h3 className="font-montserrat">LARAVEL</h3>
                                    </div>
                                    <div className={`${skillClass} animation-delay-300`}>
                                        <img className="h-15" src="/mysql-logo.svg" alt="HTML Logo" />
                                        <h3 className="font-montserrat">MySQL</h3>
                                    </div>
                                    <div className={`${skillClass} animation-delay-400`}>
                                        <img className="h-15" src="/git-logo.svg" alt="HTML Logo" />
                                        <h3 className="font-montserrat">GIT</h3>
                                    </div>
                                </>
                            )}
                        </div>
                    </FadeInOnView>
                    <Button text={expanded ? 'Close' : 'More Info'} onClick={handleLearnMore} color="black" styles="mt-10 ml-5" />
                </div>
            </div>

            <FadeInOnView>
                <div draggable={false} className="mb-20 md:w-[700px]">
                    <h2 className="fade-in-up font-montserrat mb-10 h-15 w-80 text-2xl font-bold select-none max-sm:text-center md:pl-5">
                        OTHER SKILLS:
                    </h2>
                    <div>
                        <div className="grid grid-cols-4 gap-20 max-sm:flex max-sm:flex-col">
                            <div className={` ${skillClass} animation-delay-100`}>
                                <img className="h-15" src="/html-logo.svg" alt="HTML Logo" />
                                <h3 className="font-montserrat">HTML5</h3>
                            </div>

                            <div className={`${skillClass} animation-delay-200`}>
                                <img className="h-15" src="/css-logo.svg" alt="HTML Logo" />
                                <h3 className="font-montserrat">CSS3</h3>
                            </div>

                            <div className={`${skillClass} animation-delay-300`}>
                                <img className="h-15" src="/tailwind-logo.svg" alt="HTML Logo" />
                                <h3 className="font-montserrat">TAILWIND</h3>
                            </div>
                            <div className={`${skillClass} animation-delay-400`}>
                                <img className="h-15" src="/ts-logo.svg" alt="HTML Logo" />
                                <h3 className="font-montserrat">TYPESCRIPT</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInOnView>
        </div>
    );
}

export default Skills;

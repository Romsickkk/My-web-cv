import AnimatedCard from './AnimatedCard';
import FadeInOnView from './FadeInOnView';

function Skills() {
    const skillClass = 'fade-in-center flex flex-col items-center justify-center opacity-0 gap-7 font-medium text-xl';
    return (
        <div className="mb-15 flex flex-col items-center justify-center bg-[#d6d6d6]">
            <FadeInOnView>
                <AnimatedCard name="SKILLS" className="mt-10" />
            </FadeInOnView>
            <div className="w-[700px]">
                <h2 className="fade-in-up font-montserrat h-15 w-80 pl-5 text-2xl font-bold select-none">USING NOW:</h2>
                <div>
                    <FadeInOnView>
                        <div className="grid grid-cols-4 gap-20">
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

                            <div className={`${skillClass} animation-delay-500`}>
                                <img className="h-15" src="/react-logo.svg" alt="HTML Logo" />
                                <h3 className="font-montserrat">REACT</h3>
                            </div>
                            <div className={`${skillClass} animation-delay-600`}>
                                <img className="h-15" src="/laravel-logo.svg" alt="HTML Logo" />
                                <h3 className="font-montserrat">LARAVEL</h3>
                            </div>
                            <div className={`${skillClass} animation-delay-700`}>
                                <img className="h-15" src="/mysql-logo.svg" alt="HTML Logo" />
                                <h3 className="font-montserrat">MySQL</h3>
                            </div>
                            <div className={`${skillClass} animation-delay-800`}>
                                <img className="h-15" src="/git-logo.svg" alt="HTML Logo" />
                                <h3 className="font-montserrat">GIT</h3>
                            </div>
                        </div>
                    </FadeInOnView>
                </div>
            </div>
        </div>
    );
}

export default Skills;

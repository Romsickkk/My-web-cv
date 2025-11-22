import { useT } from '@/context/LangContext';
import AnimatedCard from './AnimatedCard';
import Arrows from './Arrows';
import FadeInOnView from './FadeInOnView';

function AboutMe() {
    const t = useT();
    return (
        <div id="about" className="animation-delay-100 flex flex-col items-center justify-center bg-[#d6d6d6]">
            <div>
                <FadeInOnView>
                    <AnimatedCard name={t.aboutMe.title} className="mt-30" />
                </FadeInOnView>
            </div>
            <FadeInOnView>
                <p className="fade-in-up font-open-sans px-2 text-center md:px-70">{t.aboutMe.subtitle}</p>
            </FadeInOnView>

            <FadeInOnView>
                <Arrows />
            </FadeInOnView>

            {/* Cards */}
            <FadeInOnView>
                <div
                    key={t.aboutMe.frontend}
                    className="mx-2 mb-5 flex min-h-[200px] flex-col gap-20 md:grid md:grid-cols-[minmax(250px,500px)_minmax(250px,500px)] md:grid-rows-[150px_auto]"
                >
                    <div className="fade-in-up animation-delay-100 relative flex flex-col">
                        <img draggable={false} src="/pencil.svg" alt="Pencil" className="absolute top-0 left-0" />

                        <h2 className="mt-6 mr-5 mb-3 ml-9 font-bold">FRONTEND</h2>
                        <p className="mr-5 ml-10">{t.aboutMe.frontend}</p>
                    </div>

                    <div className="fade-in-up animation-delay-400">
                        <img draggable={false} src="/wrench.svg" alt="Wrench" className="absolute top-0 left-0" />

                        <h2 className="mt-6 mr-5 mb-3 ml-9 font-bold">BACKEND</h2>
                        <p className="mr-5 ml-10">{t.aboutMe.backend}</p>
                    </div>

                    <div className="fade-in-up animation-delay-900 col-span-2 mt-5 max-w-[600px] justify-self-center">
                        <img draggable={false} src="/laptop.svg" alt="Laptop" className="absolute -top-2 sm:-left-3" />

                        <h2 className="mt-6 mr-5 mb-3 ml-9 font-bold">Workflow & Tools</h2>
                        <p className="mr-5 ml-10">{t.aboutMe.otherSkills} </p>
                    </div>
                </div>
            </FadeInOnView>

            <FadeInOnView>
                <Arrows />
            </FadeInOnView>
        </div>
    );
}

export default AboutMe;

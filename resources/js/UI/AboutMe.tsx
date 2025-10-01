import Arrows from './Arrows';
import FadeInOnView from './FadeInOnView';

function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center bg-[#d6d6d6]">
            <FadeInOnView>
                <h1 className="fade-in-up font-montserrat mt-30 mb-15 flex h-20 w-80 items-center justify-center border-6 border-black text-2xl font-bold select-none">
                    ABOUT ME
                </h1>
            </FadeInOnView>
            <FadeInOnView>
                <p className="fade-in-up font-open-sans px-120 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cupiditate aliquam dolore doloribus animi magnam delectus
                    at voluptatum eos, placeat saepe? Labore modi aspernatur illo voluptatibus officia, earum amet asperiores?
                </p>
            </FadeInOnView>

            <FadeInOnView>
                <Arrows />
            </FadeInOnView>

            <FadeInOnView>
                <div className="mb-10 grid grid-cols-2 grid-rows-2 gap-4">
                    <div className="fade-in-up bg-red-500 delay-100">Card 1</div>
                    <div className="fade-in-up bg-blue-500 delay-200">Card 2</div>
                    <div className="fade-in-up col-span-2 justify-self-center bg-green-500 delay-300">Card 3</div>
                </div>
            </FadeInOnView>

            <FadeInOnView>
                <Arrows />
            </FadeInOnView>

            <FadeInOnView>
                <h1 className="fade-in-up font-montserrat mt-10 mb-15 flex h-20 w-80 items-center justify-center border-6 border-black text-2xl font-bold select-none">
                    SKILLS
                </h1>
            </FadeInOnView>
        </div>
    );
}

export default AboutMe;

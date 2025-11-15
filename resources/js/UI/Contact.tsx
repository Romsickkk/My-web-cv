import AnimatedCard from './AnimatedCard';
import Arrows from './Arrows';
import CustomForm from './CustomForm';
import FadeInOnView from './FadeInOnView';

function Contact() {
    return (
        <div id="contact" className="animation-delay-100 flex flex-col items-center justify-center bg-[#d6d6d6] pb-10">
            <FadeInOnView>
                <AnimatedCard name="CONTACT" className="mt-15" />
            </FadeInOnView>
            <FadeInOnView>
                <p className="fade-in-up font-open-sans px-2 text-center md:px-70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cupiditate aliquam dolore doloribus animi magnam delectus
                    at voluptatum eos, placeat saepe? Labore modi aspernatur illo voluptatibus officia, earum amet asperiores?
                </p>
            </FadeInOnView>
            <FadeInOnView>
                <Arrows />
            </FadeInOnView>
            <FadeInOnView>
                <CustomForm />
            </FadeInOnView>
        </div>
    );
}

export default Contact;

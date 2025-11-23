import { useT } from '@/context/LangContext';
import AnimatedCard from './AnimatedCard';
import Arrows from './Arrows';
import CustomForm from './CustomForm';
import FadeInOnView from './FadeInOnView';

function Contact() {
    const t = useT();
    return (
        <div id="contact" className="animation-delay-100 flex flex-col items-center justify-center bg-[#d6d6d6] pb-10">
            <FadeInOnView>
                <AnimatedCard name={t.contact.title} className="mt-15" />
            </FadeInOnView>
            <FadeInOnView key={t.contact.subtitle}>
                <p className="fade-in-up font-open-sans px-2 text-center md:px-70">{t.contact.subtitle}</p>
            </FadeInOnView>
            <FadeInOnView>
                <Arrows key={t.contact.subtitle} />
            </FadeInOnView>
            <FadeInOnView key={t.contact.title}>
                <CustomForm />
            </FadeInOnView>
        </div>
    );
}

export default Contact;

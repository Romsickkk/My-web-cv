import { useT } from '@/context/LangContext';
import { useState } from 'react';
import AnimatedCard from './AnimatedCard';
import Arrows from './Arrows';
import CustomForm from './CustomForm';
import FadeInOnView from './FadeInOnView';

function Contact() {
    const [isFormSended, setIsFormSended] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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
            {isFormSended ? (
                <div className="flex flex-col items-center gap-2">
                    <svg className="h-12 w-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                            className="animate-draw-check stroke-current stroke-[2px]"
                        />
                    </svg>
                    <p className="font-bold text-black">{t.contact.messageSended}</p>
                </div>
            ) : (
                <FadeInOnView key={t.contact.title}>
                    <CustomForm setSended={setIsFormSended} isLoading={setIsLoading} />
                </FadeInOnView>
            )}
            {/* no-drag-scroll */}
            <div
                className={`no-drag-scroll fixed inset-0 z-[200] flex items-center justify-center bg-white/50 backdrop-blur-none transition-all duration-500 ${isLoading ? 'pointer-events-auto opacity-100 backdrop-blur-sm' : 'pointer-events-none opacity-0'} `}
            >
                <div className="flex items-end gap-1">
                    <div className="loader-bar-1 h-10 w-2 bg-black"></div>
                    <div className="loader-bar-2 h-10 w-2 bg-black"></div>
                    <div className="loader-bar-3 h-10 w-2 bg-black"></div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

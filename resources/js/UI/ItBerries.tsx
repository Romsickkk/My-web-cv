import { useT } from '@/context/LangContext';
import { useState } from 'react';
import Button from './Button';
import Typewriter from './Typewriter';

function ItBerries() {
    const [expanded, setExpanded] = useState(false);
    const [isMoreText, setIsMoreText] = useState(false);
    const t = useT();
    function handleLearnMore() {
        setExpanded((prev) => !prev);
        if (isMoreText) {
            if (expanded) setIsMoreText((prev) => !prev);
        } else {
            setTimeout(() => {
                if (!expanded) setIsMoreText((prev) => !prev);
            }, 500);
        }
    }

    return (
        <div
            className={`relative flex flex-col justify-between overflow-hidden bg-gradient-to-r from-[#141414] via-[#0d0d0dec] to-[#1a1a1ae1] transition-all duration-1000 ease-in-out ${expanded ? 'min-h-[1193px] sm:min-h-[613px]' : 'min-h-[513px] sm:min-h-[313px]'}`}
        >
            <img
                draggable={false}
                src="/Logo-ITB.svg"
                alt="IT Logo"
                className="absolute top-25 right-0 z-0 h-auto w-[550px] object-contain max-md:-right-3 max-md:scale-130 max-md:-rotate-24 md:-top-20"
            />
            <div className="relative z-10 m-20 mb-1 flex flex-col content-center gap-5 lg:mr-150">
                <h2 className="font-montserrat text-2xl font-bold text-white max-md:text-center">{t.profession.title}</h2>
                <p className="font-open-sans text-white">{t.profession.subtitle}</p>
                {isMoreText && (
                    <div className={`overflow-hidden transition-[max-height] duration-1000 ease-in-out ${isMoreText ? 'max-h-[600px]' : 'max-h-0'}`}>
                        <Typewriter id={t.profession.moreInfo} className="font-open-sans text-white" text={t.profession.moreInfo} speed={10} />
                    </div>
                )}
            </div>

            <Button
                text={expanded ? t.profession.buttonClose : t.profession.buttonOpen}
                onClick={handleLearnMore}
                styles="mt-10 mb-10 ml-20"
                width={2}
            />
        </div>
    );
}

export default ItBerries;

import { useState } from 'react';
import Typewriter from './Typewriter';

function ItBerries() {
    const [expanded, setExpanded] = useState(false);
    const [isMoreText, setIsMoreText] = useState(false);

    function handleLearnMore() {
        setExpanded((prev) => !prev);
        if (isMoreText) {
            setIsMoreText((prev) => !prev);
        } else {
            const timeout = setTimeout(() => {
                setIsMoreText((prev) => !prev);
            }, 500);
        }
    }

    const handlePressStart = (e: React.MouseEvent | React.TouchEvent) => {
        (e.currentTarget as HTMLElement).classList.add('shake-delay');
    };

    const handlePressEnd = (e: React.MouseEvent | React.TouchEvent) => {
        (e.currentTarget as HTMLElement).classList.remove('shake-delay');
    };
    return (
        <div
            className={`relative flex flex-col justify-between overflow-hidden bg-gradient-to-r from-[#141414] via-[#0d0d0dec] to-[#1a1a1ae1] transition-all duration-1000 ease-in-out ${expanded ? 'min-h-[753px] sm:min-h-[413px]' : 'min-h-[513px] sm:min-h-[313px]'}`}
        >
            <img src="/Logo-ITB.svg" alt="ITB" className="absolute top-0 right-0 z-0 h-auto w-[550px] object-contain" />
            <div className="relative z-10 m-20 mb-1 flex flex-col content-center justify-center gap-5 lg:mr-150">
                <h1 className="font-montserrat text-2xl font-bold text-white">FULL-STACK ENGINEER</h1>
                <p className="font-open-sans text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, nobis possimus, tempora est tempore, reprehenderit aperiam ad
                    laborum aut eius id dolorem earum numquam unde consequuntur pariatur. Delectus, temporibus deleniti.
                </p>
                {isMoreText && (
                    <div className={`overflow-hidden transition-[max-height] duration-1000 ease-in-out ${isMoreText ? 'max-h-[600px]' : 'max-h-0'}`}>
                        <Typewriter
                            className="font-open-sans text-white"
                            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, nobis possimus, tempora est tempore, reprehenderit aperiam ad laborum aut eius id dolorem earum numquam unde consequuntur pariatur. Delectus, temporibus deleniti."
                            speed={10}
                        />
                    </div>
                )}
            </div>
            <button
                className="font-montserrat group relative mt-10 mb-10 ml-20 w-[200px] overflow-hidden px-6 py-2 text-white transition-transform duration-200 select-none hover:-translate-y-2 hover:cursor-pointer"
                onMouseDown={handlePressStart}
                onMouseUp={handlePressEnd}
                onMouseLeave={handlePressEnd}
                onTouchStart={handlePressStart}
                onTouchEnd={handlePressEnd}
                onContextMenu={(e) => e.preventDefault()}
                onClick={handleLearnMore}
            >
                {expanded ? 'Collapse' : 'Learn More'}
                <span className="absolute top-0 left-0 h-full w-px bg-white transition-all duration-150 ease-in-out group-active:top-1/2 group-active:h-0" />
                <span className="absolute top-0 right-0 h-full w-px bg-white transition-all duration-150 ease-in-out group-active:top-1/2 group-active:h-0" />
            </button>
        </div>
    );
}

export default ItBerries;

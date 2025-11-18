import useEmblaCarousel from 'embla-carousel-react';

import { isModalOpen } from '@/services/modalLock';
import { enableScroll } from '@/services/scrollLock';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import GridImages from './GridImages';

function PortfolioExamples() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const luxeMusicImgs = Array.from({ length: 6 }, (_, i) => `Luxe${i + 1}.webp`);
    const adminImgs = Array.from({ length: 6 }, (_, i) => `Admin${i + 1}.webp`);
    const globalImgs = Array.from({ length: 4 }, (_, i) => `Global${i + 1}.webp`);
    const ImgsClassName = 'hover:cursor-pointer h-full';

    const grids = [
        <GridImages imgs={['luxemusic.webp', 'luxeadmin.webp', ...globalImgs]} className={ImgsClassName} onSelect={setSelectedImage} />,
        <GridImages imgs={luxeMusicImgs} className={ImgsClassName} onSelect={setSelectedImage} />,
        <GridImages imgs={adminImgs} className={ImgsClassName} onSelect={setSelectedImage} />,
    ];
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    function handleCloseImg() {
        setSelectedImage(null);
        isModalOpen.current = false;
        enableScroll();
    }

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    const scrollTo = (index: number) => {
        emblaApi?.scrollTo(index);
    };

    return (
        <div className="bg-[#1a1a1a] text-white">
            <div className="flex flex-col items-center bg-[#1a1a1a] pt-10 text-white">
                {/* Tabs */}
                <div className="relative mb-5 flex justify-center gap-10 max-md:gap-2">
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-500 before:absolute before:left-[-20px] before:h-[2px] before:w-[20px] before:bg-gray-500 after:absolute after:right-[-20px] after:h-[2px] after:w-[20px] after:bg-gray-500"></div>

                    {['All', 'LuxeMusic', 'Admin Panel'].map((name, index) => (
                        <button
                            key={name}
                            onClick={() => scrollTo(index)}
                            className={`relative w-30 p-3 pb-2 text-white after:absolute after:bottom-0 after:left-[-20px] after:h-[2px] after:w-[calc(100%+40px)] after:origin-center after:transition-transform after:duration-500 hover:cursor-none ${
                                selectedIndex === index
                                    ? 'after:scale-x-100 after:bg-white'
                                    : 'after:scale-x-0 after:bg-white hover:after:scale-x-100'
                            }`}
                        >
                            {name}
                        </button>
                    ))}
                </div>

                <div className="w-full overflow-visible pt-5" ref={emblaRef}>
                    <div className="flex">
                        {grids.map((grid, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                {grid}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        key="backdrop"
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                            exit: { opacity: 0, transition: { duration: 0.3 } },
                        }}
                        onClick={() => handleCloseImg()}
                    >
                        <motion.img
                            layoutId={selectedImage}
                            src={`/${selectedImage}`}
                            alt={selectedImage.replace(/\.[^/.]+$/, '')}
                            className="z-100000 max-h-[90%] max-w-[90%] rounded-xl object-contain shadow-2xl"
                            variants={{
                                visible: { scale: 1 },
                                exit: { scale: 0.9, transition: { duration: 0.25 } },
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default PortfolioExamples;

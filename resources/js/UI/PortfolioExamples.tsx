import { useState } from 'react';
import GridImages from './GridImages';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

function PortfolioExamples() {
    const [tab, setTab] = useState(1);
    const [api, setApi] = useState<any>(null);

    const luxeMusicImgs = Array.from({ length: 6 }, (_, i) => `Luxe${i + 1}.webp`);
    const adminImgs = Array.from({ length: 6 }, (_, i) => `Admin${i + 1}.webp`);
    const ImgsClassName = 'transition-transform duration-500 hover:scale-105';

    const grids = [
        <GridImages
            imgs={['Luxe1.webp', 'luxeadmin.webp', 'luxeadmin.webp', 'luxeadmin.webp', 'luxeadmin.webp', 'luxeadmin.webp']}
            className={ImgsClassName}
        />,
        <GridImages imgs={luxeMusicImgs} className={ImgsClassName} />,
        <GridImages imgs={adminImgs} className={ImgsClassName} />,
    ];

    const handleTabChange = (index: number) => {
        setTab(index + 1);
        api?.scrollTo(index);
    };
    return (
        <div className="bg-[#1a1a1a] text-white">
            <div className="flex flex-col items-center bg-[#1a1a1a] pt-10 text-white">
                <div className="relative mb-10 flex justify-center gap-10">
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-500 before:absolute before:left-[-20px] before:h-[2px] before:w-[20px] before:bg-gray-500 before:content-[''] after:absolute after:right-[-20px] after:h-[2px] after:w-[20px] after:bg-gray-500 after:content-['']"></div>

                    {['All', 'LuxeMusic', 'Admin Panel'].map((name, index) => {
                        const tabIndex = index + 1;
                        return (
                            <button
                                key={name}
                                onClick={() => handleTabChange(index)}
                                className={`relative w-30 p-3 pb-2 text-white after:absolute after:bottom-0 after:left-[-20px] after:h-[2px] after:w-[calc(100%+40px)] after:origin-center after:transition-transform after:duration-500 hover:cursor-pointer ${tab === tabIndex ? 'after:scale-x-100 after:bg-white' : 'after:scale-x-0 after:bg-white hover:after:scale-x-100'} `}
                            >
                                {name}
                            </button>
                        );
                    })}
                </div>

                <Carousel
                    className="w-full"
                    opts={{
                        align: 'start',
                        loop: false,
                    }}
                    setApi={(tab) => {
                        setApi(tab);
                        tab?.on('select', () => {
                            setTab(tab.selectedScrollSnap() + 1);
                        });
                    }}
                >
                    <CarouselContent>
                        {grids.map((grid, index) => (
                            <CarouselItem key={index}>{grid}</CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}

export default PortfolioExamples;

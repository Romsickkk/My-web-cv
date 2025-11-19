import Greetings from './Greetings';
import HeroImg from './HeroImg';
import NavBar from './NavBar';

function Hero() {
    return (
        <div className="relative flex h-screen w-screen bg-[#d6d6d6]">
            <NavBar />

            {/* Desktop: flex row with 40/60 split */}
            <div className="relative mx-auto hidden h-full w-full lg:flex">
                <div className="flex w-[40%] flex-col justify-center px-4">
                    <Greetings />
                </div>

                <div className="relative flex h-full w-[60%] items-center justify-center">
                    <HeroImg />
                </div>
            </div>

            {/* Mobile: flex column with full width */}
            <div className="relative h-full w-full overflow-hidden lg:hidden">
                <HeroImg />
                <div className="absolute inset-0 flex flex-col items-center justify-end px-4 pb-10">
                    <Greetings />
                </div>
            </div>
        </div>
    );
}

export default Hero;

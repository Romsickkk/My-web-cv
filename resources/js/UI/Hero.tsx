import Greetings from './Greetings';
import HeroImg from './HeroImg';
import NavBar from './NavBar';

function Hero() {
    return (
        <div className="relative flex h-screen w-screen bg-[#d6d6d6]">
            <NavBar />

            <div className="relative mx-auto flex h-full w-full">
                <div className="flex w-[40%] flex-col justify-center px-4">
                    <Greetings />
                </div>

                <div className="relative flex w-[60%] items-center justify-center">
                    <HeroImg />
                </div>
            </div>
        </div>
    );
}

export default Hero;

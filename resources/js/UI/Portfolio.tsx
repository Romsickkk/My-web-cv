import AnimatedCard from './AnimatedCard';
import PortfolioExamples from './PortfolioExamples';
function Portfolio() {
    return (
        <div className="flex flex-col items-center bg-[#1a1a1a]">
            <div className="relative w-full">
                <img src="/mountains.webp" alt="mountains" className="h-[200px] w-full object-cover max-sm:h-[300px]" />

                <div className="absolute top-1/2 left-1/2 mt-10 -translate-x-1/2 -translate-y-1/2">
                    <AnimatedCard name="Portfolio" />
                </div>
            </div>

            <PortfolioExamples />
            <p className="my-3 text-white">And many more to come!</p>
        </div>
    );
}
export default Portfolio;

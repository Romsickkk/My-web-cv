function AnimatedCard({ name, className }: { name: string; className?: string }) {
    return (
        <h2
            key={name}
            className={`fade-in-up font-montserrat relative mb-15 flex h-20 w-80 items-center justify-center text-2xl font-bold select-none ${className}`}
        >
            {name}

            <span className="animate-borderX absolute top-0 left-1/2 h-[6px] w-full -translate-x-1/2 bg-black"></span>
            <span className="animate-borderX absolute bottom-0 left-1/2 h-[6px] w-full -translate-x-1/2 bg-black"></span>

            <span className="animate-borderY-left absolute top-0 left-0 h-full w-[6px]"></span>
            <span className="animate-borderY-right absolute top-0 right-0 h-full w-[6px]"></span>
        </h2>
    );
}

export default AnimatedCard;

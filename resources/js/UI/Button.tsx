type ButtonProps = {
    text: string;
    onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
    color?: 'white' | 'black';
    styles?: string;
    width?: number;
};

function Button({ text, onClick, color = 'white', styles, width = 3 }: ButtonProps) {
    const handlePressStart = (e: React.MouseEvent | React.TouchEvent) => {
        (e.currentTarget as HTMLElement).classList.add('shake-delay');
    };

    const handlePressEnd = (e: React.MouseEvent | React.TouchEvent) => {
        (e.currentTarget as HTMLElement).classList.remove('shake-delay');
    };
    return (
        <button
            className={`font-montserrat group relative w-[200px] overflow-hidden px-6 py-2 transition-transform duration-200 select-none hover:-translate-y-2 hover:cursor-pointer text-${color} ${styles}`}
            onMouseDown={handlePressStart}
            onMouseUp={handlePressEnd}
            onMouseLeave={handlePressEnd}
            onTouchStart={handlePressStart}
            onTouchEnd={handlePressEnd}
            onContextMenu={(e) => e.preventDefault()}
            onClick={onClick}
            type="button"
        >
            {text}
            <span
                className={`absolute top-0 left-0 h-full bg-${color} transition-all duration-150 ease-in-out group-active:top-1/2 group-active:h-0`}
                style={{ width: `${width}px` }}
            />
            <span
                className={`absolute top-0 right-0 h-full bg-${color} transition-all duration-150 ease-in-out group-active:top-1/2 group-active:h-0`}
                style={{ width: `${width}px` }}
            />
        </button>
    );
}

export default Button;

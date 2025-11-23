import { useEffect, useRef, useState } from 'react';

type Props = {
    className: string;
    id: string;
    text: string;
    speed?: number;
};

function Typewriter({ className, id = '', text, speed = 50 }: Props) {
    const [displayedText, setDisplayedText] = useState('');
    const indexRef = useRef(0);

    useEffect(() => {
        setDisplayedText('');
        indexRef.current = 0;

        const interval = setInterval(() => {
            if (indexRef.current < text.length) {
                const char = text[indexRef.current];
                setDisplayedText((prev) => prev + char);
                indexRef.current++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <p id={id} className={className}>
            {displayedText}
        </p>
    );
}

export default Typewriter;

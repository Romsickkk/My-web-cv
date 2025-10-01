import { useEffect, useState } from 'react';

type Props = {
    className: string;
    text: string;
    speed?: number;
};

function Typewriter({ className, text, speed = 50 }: Props) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        let interval: NodeJS.Timeout;

        interval = setInterval(() => {
            if (i + 1 < text.length) {
                setDisplayedText((prev) => prev + text[i]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => {
            clearInterval(interval);
        };
    }, [text, speed]);

    return <p className={className}>{displayedText}</p>;
}

export default Typewriter;

import { JSX } from 'react';

interface Props {
    text: string;
    className?: string;
}

export default function AnimatedText({ text, className = "" }: Props): JSX.Element {
    const characters = text.split("");

    return (
        <span className={`relative flex overflow-hidden ${className}`}>
            {characters.map((char, i) => {
                const movesUp = i % 2 === 0;
                return (
                    <span
                        key={i}
                        className={`relative block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${movesUp ? 'group-hover:-translate-y-full' : 'group-hover:translate-y-full'
                            }`}
                    >
                        {char === " " ? "\u00A0" : char}
                        <span
                            className={`absolute left-0 ${movesUp ? 'top-full' : 'bottom-full'
                                }`}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    </span>
                );
            })}
        </span>
    );
}

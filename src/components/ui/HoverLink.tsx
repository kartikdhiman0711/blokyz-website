import React, { ReactNode, JSX } from 'react';
import Link from 'next/link';
import AnimatedText from './AnimatedText';

interface Props {
    href?: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    underline?: boolean;
}

export default function HoverLink({ href, children, className = "", onClick, underline = false }: Props): JSX.Element {
    const underlineClasses = underline
        ? "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.76,0,0.24,1)] hover:after:origin-left hover:after:scale-x-100"
        : "";

    const commonClasses = `group relative inline-block cursor-pointer overflow-hidden pb-0.5 ${underlineClasses} ${className}`;

    if (href) {
        return (
            <Link href={href} className={commonClasses} onClick={onClick}>
                {typeof children === 'string' ? <AnimatedText text={children} /> : children}
            </Link>
        );
    }

    return (
        <button className={commonClasses} onClick={onClick}>
            {typeof children === 'string' ? <AnimatedText text={children} /> : children}
        </button>
    );
}

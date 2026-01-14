import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    title?: string;
    subtitle?: string;
    id?: string;
    background?: string;
    className?: string;
}

export default function Section({
    children,
    title,
    subtitle,
    id,
    background = 'transparent',
    className = ''
}: Props) {
    return (
        <section
            id={id}
            className={`py-24 relative overflow-hidden animate-fade-in ${className}`}
            style={{ backgroundColor: background }}
        >
            <div className="container mx-auto px-4">
                {(title || subtitle) && (
                    <div className="text-center mb-16">
                        {subtitle && <span className="block text-primary uppercase tracking-widest text-sm font-bold mb-2">{subtitle}</span>}
                        {title && <h2 className="text-4xl md:text-5xl font-black leading-tight bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">{title}</h2>}
                    </div>
                )}
                <div className="relative">
                    {children}
                </div>
            </div>
        </section>
    );
}

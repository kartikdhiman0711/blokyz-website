import Link from 'next/link';
import { ogBlokyz } from '../../lib/data';
import Section from '../../components/Section';
import { JSX } from 'react';
import AnimatedText from '../../components/ui/AnimatedText';

export default function OGBlokyz(): JSX.Element {
    return (
        <div className="pt-20 min-h-screen">
            <Section title="OG Blokyz" subtitle="Genesis Collection">
                <p className="text-center mb-12 text-gray-400 text-lg">
                    The Genesis collection. 100% Onchain. 100% Phygital.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ogBlokyz.map((item) => (
                        <Link key={item.id} href={`/og-blokyz/${item.slug}`}>
                            <div className="bg-surface rounded-2xl border border-border overflow-hidden relative transition-transform hover:-translate-y-2 hover:shadow-xl group">
                                {item.whitelist && (
                                    <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg tracking-wider">
                                        WHITELIST
                                    </div>
                                )}
                                <div
                                    className="h-64 flex items-center justify-center"
                                    style={{ background: `linear-gradient(to bottom right, ${item.imageColor}, #1a1a1a)` }}
                                >
                                    <span className="text-5xl opacity-20 font-black">OG</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-4 text-foreground">{item.name}</h3>
                                    <div className="flex justify-between items-center mt-4">
                                        <div>
                                            <div className="text-foreground font-bold text-lg">{item.price}</div>
                                            <div className="text-xs text-gray-500 font-bold">or {item.fiatPrice}</div>
                                        </div>


                                        <span className="group relative bg-white text-black px-4 py-2 rounded-full font-bold text-sm transition-transform hover:scale-105 inline-block">
                                            <AnimatedText text="Buy Now" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </div>
    );
}

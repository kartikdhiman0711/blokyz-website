import Link from 'next/link';
import { partners } from '../../lib/data';
import Section from '../../components/Section';
import { JSX } from 'react';

export default function Partners(): JSX.Element {
    return (
        <div className="pt-20 min-h-screen">
            <Section title="Partner Blokyz" subtitle="Collaborations">
                <p className="text-center mb-12 text-gray-400 text-lg">
                    Exclusive drops with our partners. Claim yours if you are eligible.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {partners.map((item) => (
                        <Link key={item.id} href={`/partners/${item.slug}`}>
                            <div className="bg-surface rounded-2xl border border-border overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-xl group">
                                <div
                                    className="h-64 flex items-center justify-center relative"
                                    style={{ background: `linear-gradient(to bottom right, ${item.imageColor}, #1a1a1a)` }}
                                >
                                    <span className="text-5xl opacity-20 font-black">IMG</span>
                                </div>
                                <div className="p-6">
                                    <span className="text-xs text-primary uppercase font-bold tracking-widest mb-2 block">
                                        {item.partner}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-4 text-foreground">{item.name}</h3>
                                    <div className="flex gap-4 items-center mt-4">
                                        <span className="line-through text-gray-500 text-sm font-bold uppercase">Buy</span>
                                        <span className="text-emerald-500 font-bold uppercase text-sm">Claim Available</span>
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

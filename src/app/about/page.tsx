import Section from '../../components/Section';
import { Target, Cpu, Coins } from 'lucide-react';

export default function About() {
    return (
        <div className="about-page pt-20">

            {/* Header */}
            <Section title="About Blokyz" subtitle="Our Story">
                <div className="text-center max-w-3xl mx-auto text-xl text-gray-400">
                    <p>
                        Blokyz is revolutionizing the collectible industry by merging high-quality physical craftsmanship with the immutable power of the blockchain. We believe in strict ownership, digital utility, and a vibrant ecosystem.
                    </p>
                </div>
            </Section>

            {/* Vision */}
            <Section title="Our Vision" subtitle="The Goal" background="var(--surface)" className="bg-surface">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-background p-8 rounded-2xl border border-border">
                        <Target className="text-primary mb-4 w-12 h-12" />
                        <h3 className="text-2xl font-bold mb-2">Phygital Bridge</h3>
                        <p className="text-gray-400">Creating a seamless link between your shelf and your wallet.</p>
                    </div>
                    <div className="bg-background p-8 rounded-2xl border border-border">
                        <Cpu className="text-pink-500 mb-4 w-12 h-12" />
                        <h3 className="text-2xl font-bold mb-2">Onchain Logic</h3>
                        <p className="text-gray-400">Every toy has a soul on the blockchain, enabling gaming & utility.</p>
                    </div>
                </div>
            </Section>

            {/* Toys - Blokyz you HOLD */}
            <Section title="Blokyz You HOLD" subtitle="Physical Collection">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 min-w-[300px]">
                        <h3 className="text-4xl font-bold mb-4">Masterful Creations</h3>
                        <p className="text-gray-400 mb-4 text-lg">
                            Our toys are designed by top-tier artists and manufactured with premium materials.
                            Whether it's vinyl, resin, or plush, the quality is undeniable.
                        </p>
                    </div>
                    <div className="flex-1 h-[300px] bg-surface rounded-2xl w-full" />
                </div>
            </Section>

            {/* Token - Blokyz you HODL */}
            <Section title="$BLOKY Token" subtitle="Blokyz You HODL" background="var(--surface)" className="bg-surface">
                <div className="text-center">
                    <Coins className="text-yellow-500 mx-auto mb-6 w-16 h-16" />
                    <h3 className="text-4xl font-bold mb-4">The Fuel of the Ecosystem</h3>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        $BLOKY powers the marketplace, governance, and exclusive rewards.
                        Holders of Blokyz NFTs passively generate yield or unlock staking benefits.
                    </p>
                </div>
            </Section>

            {/* Ecosystem & Roadmap */}
            <Section title="Roadmap" subtitle="The Journey">
                <div className="max-w-3xl mx-auto">
                    <TimelineItem
                        phase="Phase 1"
                        title="Inception"
                        items={["Concept Design", "Community Building", "First Partnership Signed"]}
                        done
                    />
                    <TimelineItem
                        phase="Phase 2"
                        title="Launch"
                        items={["Website Live", "OG Blokyz Drop", "Staking Dashboard"]}
                        active
                    />
                    <TimelineItem
                        phase="Phase 3"
                        title="Expansion"
                        items={["Metaverse Integration", "Global Shipping", "Mobile Game Beta"]}
                    />
                </div>
            </Section>
        </div>
    );
}

function TimelineItem({ phase, title, items, done, active }: { phase: string, title: string, items: string[], done?: boolean, active?: boolean }) {
    const borderColor = done ? 'border-primary' : active ? 'border-pink-500' : 'border-border';
    const dotColor = done ? 'bg-primary border-primary' : active ? 'bg-pink-500 border-pink-500' : 'bg-surface border-gray-600';
    const textColor = active ? 'text-pink-500' : 'text-gray-400';

    return (
        <div className={`border-l-2 pl-8 pb-12 relative ${borderColor}`}>
            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${dotColor}`} />
            <span className={`font-bold ${textColor}`}>{phase}</span>
            <h3 className="text-2xl font-bold my-2">{title}</h3>
            <ul className="list-none text-gray-400">
                {items.map((item, i) => (
                    <li key={i} className="mb-2">• {item}</li>
                ))}
            </ul>
        </div>
    );
}

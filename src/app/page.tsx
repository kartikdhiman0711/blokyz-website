import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Section from '../components/Section';
import { ShieldCheck, Gem, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import HoverLink from '../components/ui/HoverLink';
import { ReactNode } from 'react';

export default function Home() {
    return (
        <div className="home">
            <Hero />
            <Categories />

            {/* What is Blokyz */}
            <Section
                title="What is Blokyz?"
                subtitle="The Vision"
                id="about"
            >
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Blokyz bridges the gap between physical collectibles and the digital world.
                        Every Blokyz toy is a handcrafted masterpiece that comes with a verifiable
                        digital twin on the blockchain. Hold the toy, own the asset.
                    </p>
                </div>
            </Section>

            {/* Partners & Toys Preview */}
            <Section
                title="Our Collection"
                subtitle="Explore"
                background="var(--surface)"
                className="bg-surface" // Tailwind class
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Mock Cards - In a real app these would be ToyCard components */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-background rounded-2xl p-6 border border-border transition-all hover:-translate-y-2 hover:shadow-xl">
                            <div className="h-48 bg-gray-800 rounded-lg mb-6 animate-pulse" />
                            <h3 className="text-2xl font-bold mb-2 text-foreground">Partner Toy #{i}</h3>
                            <p className="text-gray-400 mb-6">Limited Edition Phygital Collectible</p>
                            <HoverLink href="/partners" underline className="text-primary font-bold hover:underline">View Details &rarr;</HoverLink>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-12">
                    <HoverLink href="/partners" className="bg-transparent border border-border text-foreground px-8 py-4 rounded-full font-bold hover:bg-surface-hover transition-colors">
                        View All Partners
                    </HoverLink>
                </div>
            </Section>

            {/* Holder Benefits */}
            <Section title="Holder Benefits" subtitle="Why Hold?">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <BenefitCard
                        icon={<ShieldCheck size={32} color="#8b5cf6" />}
                        title="Authenticity"
                        desc="Blockchain-verified ownership ensures your collectible is 100% authentic."
                    />
                    <BenefitCard
                        icon={<Gem size={32} color="#ec4899" />}
                        title="Digital Twin"
                        desc="Receive an NFT that mirrors your physical toy with unique traits."
                    />
                    <BenefitCard
                        icon={<Zap size={32} color="#10b981" />}
                        title="Exclusive Access"
                        desc="Holders get early access to future drops, events, and merchandise."
                    />
                    <BenefitCard
                        icon={<Users size={32} color="#f59e0b" />}
                        title="Community"
                        desc="Join a vibrant community of collectors and creators."
                    />
                </div>
            </Section>
        </div>
    );
}

function BenefitCard({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-surface p-8 rounded-2xl border border-border text-center transition-transform hover:-translate-y-1">
            <div className="mb-4 flex justify-center">{icon}</div>
            <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

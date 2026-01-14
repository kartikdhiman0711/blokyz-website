"use client";
import type { OgItem } from '../../../lib/data';
import AnimatedText from '../../../components/ui/AnimatedText';
import { CreditCard, Wallet, Lock, Unlock } from 'lucide-react';
import { useState, ReactNode } from 'react';

interface Props {
    item: OgItem;
}

export default function OGClient({ item }: Props) {
    const [activeTab, setActiveTab] = useState<'crypto' | 'fiat'>('crypto');
    const [isWhitelisted, setIsWhitelisted] = useState(!item?.whitelist); // Mock verification status

    return (
        <div className="pt-24 min-h-screen pb-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Left: Image (Blind Box Concept) */}
                <div
                    className="rounded-2xl h-[500px] flex flex-col items-center justify-center border border-border animate-fade-in"
                    style={{ background: `radial-gradient(circle at center, ${item.imageColor}, #000)` }}
                >
                    <div className="text-8xl mb-4">📦</div>
                    <p className="text-white/70 font-medium">Blind Box + NFT</p>
                </div>

                {/* Right: Buy Logic */}
                <div className="animate-fade-in flex flex-col justify-center" style={{ animationDelay: '0.2s' }}>
                    <div className="mb-4">
                        <span className="bg-primary text-white px-3 py-1 rounded text-xs font-bold tracking-wider">
                            GENESIS COLLECTION
                        </span>
                    </div>
                    <h1 className="text-5xl font-black mb-2 text-foreground">{item.name}</h1>
                    <p className="text-gray-400 text-xl leading-relaxed mb-8">
                        {item.description}
                    </p>

                    <div className="mb-8">
                        <span className="text-4xl font-black text-foreground">{item.price}</span>
                        <span className="text-xl text-gray-400 ml-4 font-bold">/ {item.fiatPrice}</span>
                    </div>

                    <div className="bg-surface p-8 rounded-2xl border border-border">
                        {/* Whitelist Check */}
                        {item.whitelist && !isWhitelisted && (
                            <div className="bg-pink-500/10 border border-pink-500 p-4 rounded-lg mb-6 flex items-center gap-4">
                                <Lock className="text-pink-500" />
                                <div>
                                    <h4 className="text-pink-500 font-bold">Whitelist Required</h4>
                                    <p className="text-xs text-gray-400">Connect wallet to verify eligibility.</p>
                                </div>


                                <button
                                    onClick={() => setIsWhitelisted(true)} // Mock verify
                                    className="group ml-auto bg-pink-500 text-white px-3 py-2 rounded text-sm font-bold hover:bg-pink-600 transition-colors"
                                >
                                    <AnimatedText text="Verify" />
                                </button>
                            </div>
                        )}

                        <div className={`transition-opacity duration-300 ${item.whitelist && !isWhitelisted ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
                            <div className="flex gap-4 mb-6">
                                <TabButton active={activeTab === 'crypto'} onClick={() => setActiveTab('crypto')} icon={<Wallet size={18} />} label="Crypto" />
                                <TabButton active={activeTab === 'fiat'} onClick={() => setActiveTab('fiat')} icon={<CreditCard size={18} />} label="Card" />
                            </div>

                            <button className="group w-full bg-white text-black py-4 rounded font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                                {item.whitelist && !isWhitelisted ? <Lock size={18} /> : <Unlock size={18} />}
                                <AnimatedText text={activeTab === 'crypto' ? `Mint for ${item.price}` : `Buy for ${item.fiatPrice}`} />
                            </button>
                            <p className="text-center mt-4 text-xs text-gray-400">
                                Includes physical toy delivery & NFT airdrop.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

function TabButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: ReactNode, label: string }) {
    return (
        <button onClick={onClick} className={`group flex-1 flex items-center justify-center gap-2 p-3 rounded transition-all duration-200 border ${active ? 'bg-background text-white border-primary' : 'bg-transparent text-gray-400 border-border hover:border-gray-500'
            }`}>
            {icon}
            <span className="text-sm font-bold"><AnimatedText text={label} /></span>
        </button>
    );
}

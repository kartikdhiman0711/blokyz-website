"use client";
import { Wallet, Ticket, KeyRound, Twitter } from 'lucide-react';
import { useState, ReactNode } from 'react';
import type { PartnerItem } from '../../../lib/data';
import AnimatedText from '../../../components/ui/AnimatedText';

interface Props {
    item: PartnerItem;
}

export default function PartnerClient({ item }: Props) {
    const [activeTab, setActiveTab] = useState<'social' | 'wallet' | 'voucher' | 'nft'>('social');

    return (
        <div className="pt-24 min-h-screen pb-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Left: Image */}
                <div
                    className="rounded-2xl h-[500px] flex items-center justify-center animate-fade-in relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${item.imageColor}, #000)` }}
                >
                    <h1 className="text-6xl md:text-8xl font-black opacity-30 select-none text-white">{item.name.split(' ')[0]}</h1>
                </div>

                {/* Right: Details & Claim */}
                <div className="animate-fade-in flex flex-col justify-center" style={{ animationDelay: '0.2s' }}>
                    <span className="text-primary font-bold uppercase tracking-wider mb-2">{item.partner} Collab</span>
                    <h1 className="text-5xl font-black mb-4 leading-none text-foreground">{item.name}</h1>
                    <p className="text-gray-400 text-xl leading-relaxed mb-8">
                        {item.description}
                    </p>

                    <div className="bg-surface p-8 rounded-2xl border border-border">
                        <div className="flex justify-between mb-6 border-b border-border pb-4">
                            <span className="text-xl text-gray-500 line-through">Buy Now</span>
                            <span className="text-xl text-emerald-500 font-bold">Claim Only</span>
                        </div>

                        <h3 className="mb-4 font-bold text-foreground">Check Eligibility via:</h3>

                        <div className="flex gap-4 mb-6">
                            <TabButton active={activeTab === 'social'} onClick={() => setActiveTab('social')} icon={<Twitter size={18} />} label="Social" />
                            <TabButton active={activeTab === 'wallet'} onClick={() => setActiveTab('wallet')} icon={<Wallet size={18} />} label="Wallet" />
                            <TabButton active={activeTab === 'voucher'} onClick={() => setActiveTab('voucher')} icon={<Ticket size={18} />} label="Code" />
                            <TabButton active={activeTab === 'nft'} onClick={() => setActiveTab('nft')} icon={<KeyRound size={18} />} label="Badge" />
                        </div>



                        <div className="bg-background p-6 rounded-xl border border-border">
                            {activeTab === 'social' && (
                                <div>
                                    <p className="mb-4 text-sm text-gray-400">Verify if your X (Twitter) handle is whitelisted.</p>
                                    <button className="group w-full py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded font-bold hover:brightness-110 transition-all">
                                        <AnimatedText text="Connect X" />
                                    </button>
                                </div>
                            )}
                            {activeTab === 'wallet' && (
                                <div>
                                    <p className="mb-4 text-sm text-gray-400">Connect wallet to check address whitelist.</p>
                                    <button className="group w-full py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded font-bold hover:brightness-110 transition-all">
                                        <AnimatedText text="Connect Wallet" />
                                    </button>
                                </div>
                            )}
                            {activeTab === 'voucher' && (
                                <div>
                                    <p className="mb-4 text-sm text-gray-400">Enter your one-time claim code.</p>
                                    <input type="text" placeholder="XXXX-XXXX-XXXX" className="w-full p-3 rounded bg-surface border border-border text-white mb-4 focus:border-primary focus:outline-none" />
                                    <button className="group w-full py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded font-bold hover:brightness-110 transition-all">
                                        <AnimatedText text="Redeem Code" />
                                    </button>
                                </div>
                            )}
                            {activeTab === 'nft' && (
                                <div>
                                    <p className="mb-4 text-sm text-gray-400">You must hold the <strong>{item.partner} Badge</strong>.</p>
                                    <button className="group w-full py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded font-bold hover:brightness-110 transition-all">
                                        <AnimatedText text="Verify Ownership" />
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

function TabButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: ReactNode, label: string }) {
    return (
        <button onClick={onClick} className={`group flex-1 flex flex-col items-center gap-2 p-2 rounded transition-all duration-200 ${active ? 'bg-primary text-white' : 'bg-transparent text-gray-400 border border-border hover:border-gray-500'
            }`}>
            {icon}
            <span className="text-xs font-bold"><AnimatedText text={label} /></span>
        </button>
    );
}

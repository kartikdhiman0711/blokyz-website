"use client";
import Section from '../../components/Section';
import { useState } from 'react';

type FormType = 'partner' | 'investor';

export default function Contact() {
    const [formType, setFormType] = useState<FormType>('partner');

    return (
        <div className="pt-20 min-h-screen">
            <Section title="Get in Touch" subtitle="Join the Revolution">
                <div className="max-w-2xl mx-auto">

                    {/* Toggle */}
                    <div className="flex bg-surface p-2 rounded-full mb-12">
                        <button
                            onClick={() => setFormType('partner')}
                            className={`flex-1 py-3 rounded-full font-bold transition-all duration-300 ${formType === 'partner'
                                ? 'bg-primary text-white shadow-lg'
                                : 'bg-transparent text-gray-400 hover:text-white'
                                }`}
                        >
                            Partner Project
                        </button>
                        <button
                            onClick={() => setFormType('investor')}
                            className={`flex-1 py-3 rounded-full font-bold transition-all duration-300 ${formType === 'investor'
                                ? 'bg-pink-500 text-white shadow-lg'
                                : 'bg-transparent text-gray-400 hover:text-white'
                                }`}
                        >
                            Investor
                        </button>
                    </div>

                    {/* Form */}
                    <form className="bg-surface p-8 rounded-2xl border border-border">
                        <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                            {formType === 'partner' ? 'Collaborate with Blokyz' : 'Invest in the Future'}
                        </h3>

                        <div className="mb-6">
                            <label className="block mb-2 text-gray-400 text-sm">Name</label>
                            <input type="text" placeholder="John Doe" className="w-full p-3 rounded-lg border border-border bg-background text-white focus:border-primary focus:outline-none transition-colors" />
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-gray-400 text-sm">Email</label>
                            <input type="email" placeholder="john@example.com" className="w-full p-3 rounded-lg border border-border bg-background text-white focus:border-primary focus:outline-none transition-colors" />
                        </div>

                        {formType === 'partner' && (
                            <div className="mb-6">
                                <label className="block mb-2 text-gray-400 text-sm">Project / Company</label>
                                <input type="text" placeholder="Your NFT Project or Brand" className="w-full p-3 rounded-lg border border-border bg-background text-white focus:border-primary focus:outline-none transition-colors" />
                            </div>
                        )}

                        {formType === 'investor' && (
                            <div className="mb-6">
                                <label className="block mb-2 text-gray-400 text-sm">Investment Range</label>
                                <select className="w-full p-3 rounded-lg border border-border bg-background text-white focus:border-primary focus:outline-none transition-colors">
                                    <option>$10k - $50k</option>
                                    <option>$50k - $100k</option>
                                    <option>$100k+</option>
                                </select>
                            </div>
                        )}

                        <div className="mb-6">
                            <label className="block mb-2 text-gray-400 text-sm">Message</label>
                            <textarea rows={5} placeholder="Tell us more..." className="w-full p-3 rounded-lg border border-border bg-background text-white focus:border-primary focus:outline-none transition-colors"></textarea>
                        </div>

                        <button
                            type="submit"
                            className={`w-full py-4 rounded-lg font-bold text-white mt-4 transition-transform hover:-translate-y-1 hover:shadow-lg ${formType === 'partner' ? 'bg-primary' : 'bg-pink-500'
                                }`}
                        >
                            Send Request
                        </button>
                    </form>

                </div>
            </Section>
        </div>
    );
}

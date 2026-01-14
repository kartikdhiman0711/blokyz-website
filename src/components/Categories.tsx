"use client";
import React from 'react';
import Link from 'next/link';
import { CornerDownRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CATEGORIES = [
    {
        title: 'TOYS',
        description: 'Modern and creative figures that bring personality to your space, perfect for collectors or anyone looking to add a unique touch to their surroundings',
        image: '/images/categories/toys.png',
        href: '/shop/toys'
    },
    {
        title: 'KEYCHAINS',
        description: 'Bold and playful keychains designed to add a splash of personality to your everyday essentials while keeping things practical and stylish.',
        image: '/images/categories/keychains.png',
        href: '/shop/keychains'
    },
    {
        title: 'POSTERS',
        description: 'Eye-catching posters with bold graphics and vibrant designs that turn any blank wall into a stylish centerpiece for your space.',
        image: '/images/categories/posters.png',
        href: '/shop/posters'
    },
    {
        title: 'RUGS',
        description: 'Creative and colorful rugs with modern patterns, adding a unique and stylish touch to any room or space.',
        image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=2000&auto=format&fit=crop',
        href: '/shop/rugs'
    }
];

export default function Categories() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Header */}
                <div className="flex justify-between items-end mb-8">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] md:text-[12px] font-bold text-violet-500 uppercase tracking-[0.2em]">
                            CATEGORIES
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight">
                            SHOP BY CATEGORIES
                        </h2>
                    </div>
                    <Link
                        href="/shop"
                        className="bg-black text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md hover:bg-zinc-800 transition-colors"
                    >
                        View All
                    </Link>
                </div>

                {/* Categories List */}
                <div className="flex flex-col border-t border-zinc-200">
                    {CATEGORIES.map((cat, index) => (
                        <div key={cat.title} className="group border-b border-zinc-200">
                            <Link href={cat.href} className="flex flex-col md:flex-row gap-8 md:gap-16 py-12 md:py-16">
                                {/* Image Container */}
                                <div className="w-full md:w-[60%] aspect-[16/9] overflow-hidden rounded-sm relative">
                                    <motion.img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                                </div>

                                {/* Content Container */}
                                <div className="w-full md:w-[35%] flex flex-col justify-start pt-2">
                                    <h3 className="text-2xl md:text-4xl font-black text-black uppercase mb-4 tracking-tight">
                                        {cat.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm md:text-[15px] leading-relaxed mb-8 max-w-[400px]">
                                        {cat.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-black text-xs md:text-sm font-bold uppercase tracking-widest mt-auto">
                                        <CornerDownRight className="w-4 h-4" />
                                        <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300">
                                            Shop {cat.title}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

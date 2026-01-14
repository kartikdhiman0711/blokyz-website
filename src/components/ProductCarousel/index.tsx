'use client';

import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';
import { motion } from 'framer-motion';

// Mock Data matching the reference vibe
const PRODUCTS = [
    {
        id: '1',
        name: 'Midnight Bunny',
        category: 'STATUETTES',
        price: 100.00,
        images: [
            'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2670&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1631116618155-607240cd3929?q=80&w=2670&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2670&auto=format&fit=crop'
        ]
    },
    {
        id: '2',
        name: 'Sunny Surfer Ghost',
        category: 'CHARMS',
        price: 35.00,
        images: [
            'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2540&auto=format&fit=crop', // Abstract art
            'https://images.unsplash.com/photo-1629812456605-4a044aa38fbc?q=80&w=2574&auto=format&fit=crop',
        ]
    },
    {
        id: '3',
        name: 'Blue Bloom Rug',
        category: 'HOME DECOR',
        price: 175.00,
        images: [
            'https://images.unsplash.com/photo-1534887483569-8a30dd39ee9d?q=80&w=2669&auto=format&fit=crop', // Flower art
            'https://images.unsplash.com/photo-1563291074-2bf0375d8d3a?q=80&w=2727&auto=format&fit=crop'
        ]
    },
    {
        id: '4',
        name: 'Grid Buddy',
        category: 'STATUETTES',
        price: 120.00,
        images: [
            'https://images.unsplash.com/photo-1581557991964-125469da3b8a?q=80&w=2633&auto=format&fit=crop', // Cute toy
            'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=2670&auto=format&fit=crop'
        ]
    },
    {
        id: '5',
        name: 'Neon Rebel',
        category: 'STATUETTES',
        price: 90.00,
        images: [
            'https://images.unsplash.com/photo-1543536448-d209d2d12a1e?q=80&w=2670&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?q=80&w=2670&auto=format&fit=crop'
        ]
    }
];

export default function ProductCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = current.clientWidth / 2;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleQuickView = (product: typeof PRODUCTS[0]) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-8 border-b border-gray-200">
                    <div>
                        <span className="text-purple-600 font-bold text-xs tracking-wider uppercase mb-2 block">
                            NEW COLLECTION
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                            CREATIVE ITEMS
                        </h2>
                    </div>

                    <div className="flex items-center gap-6 mt-6 md:mt-0">
                        {/* Navigation Buttons */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => scroll('left')}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <ArrowLeft size={24} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <ArrowRight size={24} />
                            </button>
                        </div>

                        <button className="bg-black text-white font-bold px-8 py-3 rounded hover:bg-gray-900 transition-colors">
                            Shop All
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 -mx-6 px-6"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className="min-w-[100%] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(25%-1.5rem)] snap-start">
                            <ProductCard
                                product={product}
                                onQuickView={handleQuickView}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick View Modal */}
            <QuickViewModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={selectedProduct}
            />
        </section>
    );
}

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    images: string[];
}

interface ProductCardProps {
    product: Product;
    onQuickView: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
        <div
            className="group w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setCurrentImageIndex(0); // Reset to first image on leave
            }}
        >
            {/* Card Image Area */}
            <div className="relative aspect-square bg-[#f5f5f5] rounded-lg mb-4 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImageIndex}
                        src={product.images[currentImageIndex]}
                        alt={product.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full object-cover mix-blend-multiply"
                    />
                </AnimatePresence>

                {/* Hover UI Overlay */}
                <div
                    className={`absolute inset-0 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                >
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-sm transition-colors"
                    >
                        <ArrowLeft size={16} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-sm transition-colors"
                    >
                        <ArrowRight size={16} />
                    </button>

                    {/* Quick View Button */}
                    <button
                        onClick={() => onQuickView(product)}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-6 py-3 rounded shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                    >
                        Quick View
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-lg leading-tight mb-1">{product.name}</h3>
                    {/* Optional Category Label if needed, or keep clean as per ref */}
                </div>
                <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            </div>
        </div>
    );
}

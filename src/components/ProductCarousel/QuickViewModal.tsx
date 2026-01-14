'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, Minus, Plus } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    images: string[];
}

interface QuickViewModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product | null;
}

export default function QuickViewModal({ isOpen, onClose, product }: QuickViewModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    // Reset state when product changes
    React.useEffect(() => {
        if (isOpen) {
            setCurrentImageIndex(0);
            setQuantity(1);
        }
    }, [isOpen, product]);

    if (!product) return null;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-white z-[70] shadow-2xl overflow-y-auto"
                    >
                        <div className="p-6 h-full flex flex-col relative">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                            >
                                <X size={24} />
                            </button>
                            <div className="mb-4">
                                <h3 className="font-bold text-lg">QUICK VIEW</h3>
                            </div>

                            {/* Image Carousel */}
                            <div className="relative aspect-square bg-gray-50 rounded-lg mb-8 group">
                                <img
                                    src={product.images[currentImageIndex]}
                                    alt={product.name}
                                    className="w-full h-full object-contain p-8 mix-blend-multiply"
                                />

                                {/* Navigation Arrows */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <ArrowLeft size={20} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <ArrowRight size={20} />
                                </button>

                                {/* Index Indicator */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                                    {String(currentImageIndex + 1).padStart(2, '0')} / {String(product.images.length).padStart(2, '0')}
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="flex-1">
                                <span className="text-purple-600 font-bold text-xs tracking-wider uppercase mb-2 block">
                                    {product.category}
                                </span>
                                <h2 className="text-3xl font-black mb-2 leading-tight uppercase">{product.name}</h2>
                                <p className="text-xl font-bold mb-8">${product.price.toFixed(2)}</p>

                                {/* Quantity Selector */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center border border-gray-200 rounded-lg">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="p-3 hover:bg-gray-50 transition-colors"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="w-12 text-center font-bold">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="p-3 hover:bg-gray-50 transition-colors"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>

                                {/* Actions */}
                                <button className="w-full bg-black text-white font-bold py-4 rounded-lg mb-4 hover:bg-gray-900 transition-colors">
                                    Add to Cart
                                </button>
                                <button className="w-full text-sm font-bold underline hover:text-gray-600 transition-colors">
                                    View Full Details
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Slide {
    id: number;
    image: string;
    title: string;
    description: string;
    category: string;
}

const slides: Slide[] = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2674&auto=format&fit=crop',
        title: 'MYTHOS X OBSIDIAN',
        category: 'LIMITED EDITION',
        description: 'A partnership built on creativity. Explore how our brand and Sidewalk blend vibrant aesthetics with modern streetwear.',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2670&auto=format&fit=crop',
        title: 'CHROMA SERIES',
        category: 'COLLECTIBLE',
        description: 'Discover the fusion of art and fashion in our latest collaboration. Bold designs meet everyday functionality for your style.',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop',
        title: 'URBAN LEGENDS',
        category: 'NEW ARRIVAL',
        description: 'Our latest collection of designer figurines is crafted to perfection. Limited edition and ready to be part of your personal gallery.',
    },
];

const MARQUEE_TEXT = "OUTSIDERS X MINIQUE";

export default function EditorialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [cursorVariant, setCursorVariant] = useState<'default' | 'left' | 'right'>('default');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isOverCard, setIsOverCard] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Handle mouse movement for custom cursor
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleZoneHover = (variant: 'left' | 'right') => {
        if (!isOverCard) {
            setCursorVariant(variant);
        }
    };

    const handleZoneLeave = () => {
        if (!isOverCard) {
            setCursorVariant('default');
        }
    };

    const variants: Variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 1.1,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.8, ease: "easeOut" }
            }
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 1.1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
            }
        })
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[110vh] overflow-hidden bg-black text-white"
            style={{ cursor: isOverCard ? 'default' : 'none' }}
        >
            {/* Background Layer - Full Bleed */}
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={slides[currentIndex].id}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src={slides[currentIndex].image}
                        alt={slides[currentIndex].title}
                        className="w-full h-full object-cover blur-sm scale-110 opacity-60"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Marquee Layer - Behind Foreground Card */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full z-10 overflow-hidden mix-blend-overlay opacity-30 pointer-events-none">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                >
                    {[1, 2, 3, 4].map((item) => (
                        <p key={item} className="text-[12vw] font-black tracking-tighter mr-12 uppercase leading-none select-none">
                            {MARQUEE_TEXT}
                        </p>
                    ))}
                </motion.div>
            </div>

            {/* Foreground Card Layer */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={slides[currentIndex].id}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center"
                    >
                        {/* Image Card */}
                        <div className="relative w-[85vw] md:w-[70vw] lg:w-[55vw] max-w-[900px] aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl pointer-events-auto">
                            <img
                                src={slides[currentIndex].image}
                                alt={slides[currentIndex].title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content Below Image */}
                        <div
                            className="mt-8 md:mt-10 lg:mt-12 px-6 md:px-10 lg:px-12 text-center max-w-2xl pointer-events-auto cursor-default z-50 relative"
                            onMouseEnter={() => {
                                setIsOverCard(true);
                                setCursorVariant('default');
                            }}
                            onMouseLeave={() => {
                                setIsOverCard(false);
                            }}
                        >
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mb-5 text-sm md:text-base lg:text-lg text-white/90 leading-relaxed font-normal"
                            >
                                {slides[currentIndex].description}
                            </motion.p>
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 text-white border-b-2 border-white pb-1 font-semibold text-sm md:text-base hover:text-gray-200 hover:border-gray-200 transition-colors cursor-pointer"
                            >
                                Explore Collection <ArrowRight size={18} />
                            </motion.button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Invisible Navigation Zones - Full screen but disabled over card */}
            <div className="absolute inset-0 z-30 flex pointer-events-none">
                {/* Left navigation zone */}
                <div
                    className="w-1/2 h-full pointer-events-auto"
                    onClick={(e) => {
                        if (!isOverCard) prevSlide();
                    }}
                    onMouseEnter={() => handleZoneHover('left')}
                    onMouseLeave={handleZoneLeave}
                    style={{ cursor: 'none' }}
                />
                {/* Right navigation zone */}
                <div
                    className="w-1/2 h-full pointer-events-auto"
                    onClick={(e) => {
                        if (!isOverCard) nextSlide();
                    }}
                    onMouseEnter={() => handleZoneHover('right')}
                    onMouseLeave={handleZoneLeave}
                    style={{ cursor: 'none' }}
                />
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-4 pointer-events-auto">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className="group relative w-12 h-1"
                    >
                        <div className={`absolute inset-0 bg-white/30 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-white h-1.5 -translate-y-0.5' : 'group-hover:bg-white/50'}`} />
                    </button>
                ))}
            </div>

            {/* Custom Cursor */}
            <div
                className="hidden md:block fixed z-50 pointer-events-none mix-blend-difference"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    transform: 'translate(-50%, -50%)',
                    opacity: isOverCard ? 0 : 1,
                    transition: 'opacity 0.2s ease'
                }}
            >
                <motion.div
                    animate={{
                        scale: cursorVariant !== 'default' ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black"
                >
                    {cursorVariant === 'left' && <ArrowLeft size={24} strokeWidth={2.5} />}
                    {cursorVariant === 'right' && <ArrowRight size={24} strokeWidth={2.5} />}
                </motion.div>
            </div>

            {/* Fallback Mobile Indicator */}
            <div className="md:hidden absolute top-1/2 w-full px-4 flex justify-between z-10 pointer-events-none opacity-50">
                <ArrowLeft className="text-white drop-shadow-md" />
                <ArrowRight className="text-white drop-shadow-md" />
            </div>
        </div>
    );
}
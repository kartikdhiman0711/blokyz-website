"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SLIDES = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop',
        title: 'PRIME',
        subtitle: 'FIGURES',
        description: 'Where pop culture meets creativity — bold pieces for modern collectors.',
        cta: 'Explore Collection'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop',
        title: 'PRIME',
        subtitle: 'FIGURES',
        description: 'Hard-to-find and even harder to forget — shop rare and exclusive drops.',
        cta: 'Explore Collection'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=2000&auto=format&fit=crop',
        title: 'PRIME',
        subtitle: 'FIGURES',
        description: 'Blokyz: Revolutionizing the phygital bridge between your shelf and the blockchain.',
        cta: 'Explore Collection'
    }
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dragStart, setDragStart] = useState(0);
    const [dragging, setDragging] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    };

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setDragStart(clientX);
        setDragging(true);
    };

    const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
        if (!dragging) return;
        const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
        const diff = dragStart - clientX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        setDragging(false);
    };

    // Auto-advance logic disabled - interaction only
    useEffect(() => {
        // No auto-run
    }, []);

    return (
        <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center pt-24 pb-12 select-none">

            {/* Background Texture (Subtle Paper/Marble effect) */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/white-diamond.png")' }} />

            {/* Background Typography - Positioned like reference */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 pt-2 md:pt-4">
                <h2 className="text-[clamp(4.8rem,8.4vw,8.4rem)] font-black text-black uppercase text-center leading-[0.85] tracking-tight m-0">
                    Prime Figures
                </h2>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full max-w-[1800px] flex items-center justify-center h-[500px] md:h-[650px] mt-20 md:mt-32">

                {/* Navigation Arrows - Positioned closer to center image */}
                <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
                    <div className="w-full max-w-[900px] flex justify-between px-4 md:px-0">
                        <button
                            onClick={prevSlide}
                            className="pointer-events-auto transition-all hover:scale-110 active:scale-95 group"
                            aria-label="Previous slide"
                        >
                            <ArrowLeft className="w-10 h-10 md:w-14 md:h-14 text-black stroke-[2.5px] group-hover:-translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="pointer-events-auto transition-all hover:scale-110 active:scale-95 group"
                            aria-label="Next slide"
                        >
                            <ArrowRight className="w-10 h-10 md:w-14 md:h-14 text-black stroke-[2.5px] group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Slides Track */}
                <div
                    className="relative w-full flex items-center justify-center overflow-visible cursor-grab active:cursor-grabbing"
                    onMouseDown={handleDragStart}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchStart={handleDragStart}
                    onTouchEnd={handleDragEnd}
                >
                    <AnimatePresence initial={false}>
                        {SLIDES.map((slide, index) => {
                            const isCenter = index === currentIndex;
                            const isPrev = index === (currentIndex - 1 + SLIDES.length) % SLIDES.length;
                            const isNext = index === (currentIndex + 1) % SLIDES.length;

                            if (!isCenter && !isPrev && !isNext) return null;

                            return (
                                <motion.div
                                    key={slide.id}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.7,
                                        x: isNext ? '100%' : (isPrev ? '-100%' : 0)
                                    }}
                                    animate={{
                                        opacity: isCenter ? 1 : 0.6,
                                        scale: isCenter ? 1 : 0.58,
                                        x: isCenter ? '0%' : (isPrev ? '-145%' : '145%'),
                                        zIndex: isCenter ? 30 : 10,
                                        filter: isCenter ? 'blur(0px)' : 'blur(1px)'
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                        opacity: { duration: 0.4 },
                                        scale: { duration: 0.6 },
                                        x: { duration: 0.6 },
                                        filter: { duration: 0.3 }
                                    }}
                                    className={`absolute w-[65%] md:w-[420px] lg:w-[500px] aspect-[3.5/5] rounded-lg overflow-hidden shadow-2xl ${isCenter ? 'z-30' : 'cursor-pointer hover:opacity-70'
                                        }`}
                                    onClick={() => isPrev ? prevSlide() : isNext ? nextSlide() : null}
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover pointer-events-none"
                                    />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>

            {/* Caption Area - Positioned at bottom */}
            <div className="relative z-30 mt-8 md:mt-12 text-center max-w-2xl px-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                    >
                        <p className="text-black text-[11px] md:text-[13px] font-normal tracking-[0.1em] leading-relaxed max-w-[500px] mx-auto opacity-50 mb-8">
                            {SLIDES[currentIndex].description}
                        </p>
                        <Link
                            href="#"
                            className="relative inline-flex items-center gap-2 text-black text-sm font-medium uppercase tracking-wide group overflow-hidden"
                        >
                            <span className="relative z-10">{SLIDES[currentIndex].cta}</span>
                            <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0"></span>
                        </Link>
                    </motion.div>
                </AnimatePresence>
            </div>

        </section>
    );
}
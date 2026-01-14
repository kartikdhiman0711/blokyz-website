"use client";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

import { useTheme } from '../context/ThemeContext';
import SearchSidebar from './Sidebars/SearchSidebar';
import AccountSidebar from './Sidebars/AccountSidebar';
import CartSidebar from './Sidebars/CartSidebar';
import HoverLink from './ui/HoverLink';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const [activeSidebar, setActiveSidebar] = useState<'search' | 'account' | 'cart' | null>(null);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 1. Handle scrolled state (bg/blur/padding)
            setScrolled(currentScrollY > 50);

            // 2. Handle visibility (hide on scroll down, show on scroll up)
            if (currentScrollY <= 50) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current + 10) {
                // Scrolling Down - Hide
                setIsVisible(false);
                setIsOpen(false); // Close mobile menu if open
            } else if (currentScrollY < lastScrollY.current - 10) {
                // Scrolling Up - Show
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeSidebars = () => setActiveSidebar(null);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'translate-y-0' : '-translate-y-full'
                } ${scrolled
                    ? 'py-4 backdrop-blur-md border-b bg-[var(--navbar-scrolled-bg)] border-[var(--navbar-border)]'
                    : 'py-6 bg-transparent'
                }`}>
                <div className="container mx-auto px-4 grid grid-cols-[1fr_auto_1fr] items-center max-lg:flex max-lg:justify-between">

                    {/* Left: Navigation Links */}
                    <div className="flex items-center justify-start">
                        <div className="flex items-center gap-8 max-lg:hidden">
                            <HoverLink href="/shop" className="text-foreground text-sm font-bold tracking-wider uppercase hover:text-gray-400">SHOP</HoverLink>
                            <HoverLink href="/collections" className="text-foreground text-sm font-bold tracking-wider uppercase hover:text-gray-400">COLLECTIONS</HoverLink>
                            <HoverLink href="/about" className="text-foreground text-sm font-bold tracking-wider uppercase hover:text-gray-400">ABOUT</HoverLink>
                            <HoverLink href="/features" className="text-foreground text-sm font-bold tracking-wider uppercase hover:text-gray-400">FEATURES</HoverLink>
                        </div>
                        {/* Mobile Toggle */}
                        <button className="hidden max-lg:block" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X className="text-foreground w-6 h-6" /> : <Menu className="text-foreground w-6 h-6" />}
                        </button>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex justify-center items-center max-lg:flex-grow">
                        <Link href="/" className="text-3xl font-black tracking-tighter text-foreground uppercase font-['Arial_Black']">
                            BLOK<span className="bg-gradient-to-br from-violet-500 to-pink-500 bg-clip-text text-transparent">YZ</span>
                        </Link>
                    </div>

                    {/* Right: Utilities */}
                    <div className="flex items-center justify-end gap-8 max-lg:hidden">
                        <button onClick={toggleTheme} className="flex items-center gap-2 text-xs font-bold text-gray-400 tracking-wider cursor-pointer transition-colors hover:text-foreground">
                            <span className={theme === 'light' ? 'text-foreground' : ''}>LIGHT</span>
                            <span className="text-gray-400">—</span>
                            <span className={theme === 'dark' ? 'text-foreground' : ''}>DARK</span>
                        </button>
                        <HoverLink onClick={() => setActiveSidebar('search')} className="text-foreground text-sm font-bold tracking-wider uppercase hover:text-gray-400">SEARCH</HoverLink>
                        <HoverLink onClick={() => setActiveSidebar('account')} className="text-foreground text-sm font-bold tracking-wider uppercase hover:text-gray-400">ACCOUNT</HoverLink>
                        <HoverLink onClick={() => setActiveSidebar('cart')} className="text-foreground text-sm font-bold tracking-wider uppercase hover:text-gray-400">BAG: 0</HoverLink>
                    </div>

                    {/* Mobile Menu Overlay */}
                    {isOpen && (
                        <div className="flex flex-col absolute top-full left-0 w-full bg-surface p-8 gap-6 border-b border-border max-lg:flex hidden:lg">
                            <Link href="/shop" onClick={() => setIsOpen(false)} className="text-xl font-bold text-foreground uppercase">SHOP</Link>
                            <Link href="/collections" onClick={() => setIsOpen(false)} className="text-xl font-bold text-foreground uppercase">COLLECTIONS</Link>
                            <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-bold text-foreground uppercase">ABOUT</Link>
                            <Link href="/features" onClick={() => setIsOpen(false)} className="text-xl font-bold text-foreground uppercase">FEATURES</Link>
                            <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-border">
                                <button onClick={() => { toggleTheme(); setIsOpen(false); }} className="text-xl font-bold text-foreground uppercase text-left">
                                    {theme === 'light' ? 'SWITCH TO DARK' : 'SWITCH TO LIGHT'}
                                </button>
                                <button onClick={() => { setActiveSidebar('search'); setIsOpen(false); }} className="text-xl font-bold text-foreground uppercase text-left">SEARCH</button>
                                <button onClick={() => { setActiveSidebar('account'); setIsOpen(false); }} className="text-xl font-bold text-foreground uppercase text-left">ACCOUNT</button>
                                <button onClick={() => { setActiveSidebar('cart'); setIsOpen(false); }} className="text-xl font-bold text-foreground uppercase text-left">BAG: 0</button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Sidebars */}
            <SearchSidebar isOpen={activeSidebar === 'search'} onClose={closeSidebars} />
            <AccountSidebar isOpen={activeSidebar === 'account'} onClose={closeSidebars} />
            <CartSidebar isOpen={activeSidebar === 'cart'} onClose={closeSidebars} />
        </>
    );
}

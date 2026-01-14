import Link from 'next/link';
import HoverLink from './ui/HoverLink';

export default function Footer() {
    return (
        <footer className="bg-surface py-16 mt-auto border-t border-border">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-black text-foreground">BLOK<span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">YZ</span></h2>
                        <p className="text-gray-400 text-sm max-w-[250px]">Phygital Toys living eternally on the blockchain.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-bold text-foreground">Explore</h4>
                        <HoverLink href="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</HoverLink>
                        <HoverLink href="/partners" className="text-gray-400 hover:text-primary transition-colors">Partners</HoverLink>
                        <HoverLink href="/og-blokyz" className="text-gray-400 hover:text-primary transition-colors">OG Collection</HoverLink>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-bold text-foreground">Community</h4>
                        <HoverLink href="#" className="text-gray-400 hover:text-primary transition-colors">Twitter / X</HoverLink>
                        <HoverLink href="#" className="text-gray-400 hover:text-primary transition-colors">Discord</HoverLink>
                        <HoverLink href="#" className="text-gray-400 hover:text-primary transition-colors">Instagram</HoverLink>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-bold text-foreground">Stay Updated</h4>
                        <p className="text-gray-400 text-sm">Join our newsletter for drops.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-border px-4 py-2 rounded text-white w-full focus:outline-none focus:border-primary"
                            />
                            <button type="submit" className="bg-primary text-white px-4 py-2 rounded font-bold hover:bg-violet-600 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-center text-gray-500 pt-8 border-t border-white/5 text-sm">
                    &copy; {new Date().getFullYear()} Blokyz. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';
import { ReactNode } from 'react';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
    title: 'Blokyz | Phygital Toys Living Onchain',
    description: 'Collect, Hold, and Play with Blokyz - The future of Phygital collectibles.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={`${outfit.className} ${outfit.variable} antialiased`}>
                <ThemeProvider>
                    <Navbar />
                    <main className="min-h-screen pt-20">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}

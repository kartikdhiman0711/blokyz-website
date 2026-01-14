import { ReactNode } from 'react';

interface SidebarDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

export default function SidebarDrawer({ isOpen, onClose, title, children }: SidebarDrawerProps) {
    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[1999] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Sidebar Panel */}
            <div className={`fixed top-0 right-0 h-screen w-full max-w-[450px] bg-background border-l border-border z-[2000] p-8 overflow-y-auto shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-extrabold uppercase tracking-wider text-foreground">{title}</h2>
                    <button
                        className="text-sm font-bold uppercase tracking-wider text-gray-400 transition-colors hover:text-primary"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
                {children}
            </div>
        </>
    );
}

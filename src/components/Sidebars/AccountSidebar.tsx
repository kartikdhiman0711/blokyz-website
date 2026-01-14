import Link from 'next/link';
import SidebarDrawer from './SidebarDrawer';
import HoverLink from '../ui/HoverLink';
import AnimatedText from '../ui/AnimatedText';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function AccountSidebar({ isOpen, onClose }: Props) {
    return (
        <SidebarDrawer isOpen={isOpen} onClose={onClose} title="Account">
            <div className="mb-8">
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Access your account to view order history and manage preferences.
                </p>
                <button className="group w-full py-4 bg-foreground text-background font-bold uppercase text-sm border border-foreground transition-transform hover:opacity-90 hover:-translate-y-px">
                    <AnimatedText text="Log in" />
                </button>

                <div className="mt-6 text-center">
                    <HoverLink href="/register" className="text-sm text-gray-400 uppercase font-bold cursor-pointer transition-colors hover:text-foreground hover:underline">
                        ↪ Create Account
                    </HoverLink>
                </div>
            </div>
        </SidebarDrawer>
    );
}

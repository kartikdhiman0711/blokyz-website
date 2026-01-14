import SidebarDrawer from './SidebarDrawer';
import AnimatedText from '../ui/AnimatedText';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: Props) {
    return (
        <SidebarDrawer isOpen={isOpen} onClose={onClose} title="Shopping Bag: 0 Items">
            <div className="mb-8">
                {/* Shipping Progress */}
                <div className="bg-surface p-4 rounded mb-8">
                    <span className="text-xs text-gray-400 mb-2 block">You're $100.00 away from free shipping.</span>
                    <div className="w-full h-1 bg-gray-800">
                        <div className="h-full w-0 bg-primary"></div>
                    </div>
                </div>

                <h3 className="text-base font-medium mb-6 text-foreground">
                    Your Shopping Bag is Empty
                </h3>

                <button
                    className="group w-full py-4 bg-foreground text-background font-bold uppercase text-sm border border-foreground transition-transform hover:opacity-90 hover:-translate-y-px"
                    onClick={onClose}
                >
                    <AnimatedText text="Start Shopping" />
                </button>
            </div>
        </SidebarDrawer>
    );
}

import SidebarDrawer from './SidebarDrawer';
import AnimatedText from '../ui/AnimatedText';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchSidebar({ isOpen, onClose }: Props) {
    return (
        <SidebarDrawer isOpen={isOpen} onClose={onClose} title="What are you looking for?">
            <div className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Your Request"
                    className="flex-1 p-3 bg-surface border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                />
                <button className="group px-4 py-3 bg-foreground text-background font-bold uppercase text-sm border border-foreground transition-transform hover:opacity-90 hover:-translate-y-px">
                    <AnimatedText text="Search" />
                </button>
            </div>

            <div className="flex flex-wrap gap-4">
                {['Keychains', 'Rugs', 'Sale', 'Toys'].map(tag => (
                    <span key={tag} className="text-sm text-gray-400 cursor-pointer transition-colors hover:text-foreground hover:underline">
                        {tag}
                    </span>
                ))}
            </div>
        </SidebarDrawer>
    );
}

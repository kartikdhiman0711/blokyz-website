export interface PartnerItem {
    id: string;
    slug: string;
    name: string;
    partner: string;
    description: string;
    imageColor: string;
}

export const partners: PartnerItem[] = [
    {
        id: '1',
        slug: 'cyber-cat',
        name: 'Cyber Cat',
        partner: 'NeoTokyo',
        description: 'A futuristic feline roaming the neon streets. Exclusive for NeoTokyo citizens.',
        imageColor: '#10b981'
    },
    {
        id: '2',
        slug: 'mecha-dog',
        name: 'Mecha Dog',
        partner: 'CyberKongz',
        description: 'Robotic loyalty. This Mecha Dog protects your digital assets.',
        imageColor: '#3b82f6'
    },
    {
        id: '3',
        slug: 'void-walker',
        name: 'Void Walker',
        partner: 'Parallel',
        description: 'Emerging from the void to join your collection.',
        imageColor: '#6366f1'
    }
];

export interface OgItem {
    id: string;
    slug: string;
    name: string;
    price: string;
    fiatPrice: string;
    description: string;
    imageColor: string;
    whitelist: boolean;
}

export const ogBlokyz: OgItem[] = [
    {
        id: '1',
        slug: 'genesis-bot',
        name: 'Genesis Bot #001',
        price: '0.5 ETH',
        fiatPrice: '$1500',
        description: 'The very first Blokyz ever created. Pure OG status.',
        imageColor: '#ec4899',
        whitelist: true
    },
    {
        id: '2',
        slug: 'golden-ape',
        name: 'Golden Ape',
        price: '1.2 ETH',
        fiatPrice: '$3500',
        description: 'A symbol of wealth and power in the Blokyz jungle.',
        imageColor: '#fbbf24',
        whitelist: false
    }
];

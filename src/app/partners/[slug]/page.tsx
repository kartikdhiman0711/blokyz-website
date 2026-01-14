import { partners } from '../../../lib/data';
import PartnerClient from './PartnerClient';

export default async function PartnerDetail(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const item = partners.find(p => p.slug === params.slug);

    if (!item) {
        return <div className="text-center text-xl mt-20">Item not found</div>;
    }

    return <PartnerClient item={item} />;
}

import { ogBlokyz } from '../../../lib/data';
import OGClient from './OGClient';

export default async function OGDetail(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const item = ogBlokyz.find(p => p.slug === params.slug);

    if (!item) {
        return <div className="text-center text-xl mt-20">Item not found</div>;
    }

    return <OGClient item={item} />;
}

import { MOCK_LISTING } from '@/data/mock-data';
import Header from './header';
import Banner from './banner';
import style from './index.module.css';

interface FeaturedListingProps {
    listing: typeof MOCK_LISTING;
}

export default function FeaturedListing({ listing }: FeaturedListingProps) {
    const {
        gallery,
        agent: { logo, name, image },
    } = listing;

    return (
        <div className={style.container}>
            <Header logo={logo} agent={name} image={image} />
            <Banner images={gallery} />
        </div>
    );
}

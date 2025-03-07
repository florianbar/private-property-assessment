import { MOCK_LISTING } from '@/data/mock-data';
import Header from './header';
import Banner from './banner';
import Details from './details';
import PromotedBadge from './promotedBadge';
import style from './styles/index.module.scss';

interface FeaturedListingProps {
    listing: typeof MOCK_LISTING;
}

export default function FeaturedListing({ listing }: FeaturedListingProps) {
    const {
        gallery,
        agent: { logo, name, image },
        price,
        payment,
        bedrooms,
        bathrooms,
        garages,
        erfSize,
        floorSize,
        address,
        suburb,
        type,
        reduced,
        promoted,
        retirement,
        hdMedia,
    } = listing;

    return (
        <div className={style.container}>
            {promoted && (
                <div className="showOnSmOnly">
                    <PromotedBadge />
                </div>
            )}

            <Header 
                logo={logo} 
                agent={name} 
                image={image} 
            />
            <Banner 
                images={gallery} 
                reduced={reduced}
                retirement={retirement}
                hdMedia={hdMedia}
            />
            <Details 
                price={price} 
                payment={payment} 
                bedrooms={bedrooms}
                bathrooms={bathrooms}
                garages={garages}
                erfSize={erfSize}
                floorSize={floorSize}
                address={address}
                suburb={suburb}
                type={type}
                promoted={promoted}
            />
        </div>
    );
}

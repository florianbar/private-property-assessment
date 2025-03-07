import { MOCK_LISTING } from '@/data/mock-data';
import Header from './header';
import Banner from './banner';
import Details from './details';
import Badge, { BADGE_SIZES } from '@/components/badge';
import style from './styles/index.module.css';

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
                    <Badge size={BADGE_SIZES.small}>
                        Promoted
                    </Badge>
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

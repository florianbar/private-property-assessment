import { MOCK_LISTING } from '@/data/mock-data';
import Header from './header';
import Banner from './banner';
import Details from './details';
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
        province,
        type,
    } = listing;

    return (
        <div className={style.container}>
            <Header 
                logo={logo} 
                agent={name} 
                image={image} 
            />
            <Banner images={gallery} />
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
            />
        </div>
    );
}

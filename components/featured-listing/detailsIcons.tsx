import IconText from '@/components/icon-text';
import style from './styles/details.module.scss';

interface FeaturedListingDetailsIconsProps {
    bedrooms: number;
    bathrooms: number;
    garages: number;
    erfSize: number;
    floorSize: number;
}

export default function FeaturedListingDetailsIcons({ 
    bedrooms,
    bathrooms,
    garages,
    erfSize,
    floorSize,
}: FeaturedListingDetailsIconsProps) {
    return (
        <div className={style.icons}>
            <IconText 
                text={bedrooms.toString()} 
                imageUrl="/assets/icons/bedrooms.svg" 
                imageAlt="Bedrooms" 
            />
            <IconText 
                text={bathrooms.toString()} 
                imageUrl="/assets/icons/bathroom.svg" 
                imageAlt="Bathrooms" 
            />
            <IconText 
                text={garages.toString()} 
                imageUrl="/assets/icons/car.svg" 
                imageAlt="Cars"
            />
            <IconText 
                text={erfSize + " m²"} 
                imageUrl="/assets/icons/erf-size.svg" 
                imageAlt="Erf Size"
                className="hideOnSm"
            />
            <IconText 
                text={floorSize + " m²"} 
                imageUrl="/assets/icons/property-size.svg" 
                imageAlt="Property Size"
                className="hideOnSm"
            />
        </div>
    );
}
import DetailsIcon from './detailsIcon';
import style from './styles/details.module.css';

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
        <div className={style.detailsInfoIcons}>
            <DetailsIcon 
                text={bedrooms.toString()} 
                imageUrl="/assets/icons/bedrooms.svg" 
                imageAlt="Bedrooms" 
            />
            <DetailsIcon 
                text={bathrooms.toString()} 
                imageUrl="/assets/icons/bathroom.svg" 
                imageAlt="Bathrooms" 
            />
            <DetailsIcon 
                text={garages.toString()} 
                imageUrl="/assets/icons/car.svg" 
                imageAlt="Cars"
            />
            <DetailsIcon 
                text={erfSize + " m²"} 
                imageUrl="/assets/icons/erf-size.svg" 
                imageAlt="Erf Size"
                className="hideOnSm"
            />
            <DetailsIcon 
                text={floorSize + " m²"} 
                imageUrl="/assets/icons/property-size.svg" 
                imageAlt="Property Size"
                className="hideOnSm"
            />
        </div>
    );
}
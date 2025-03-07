import { getFormattedPrice } from '@/utils/numbers';
import LabelBadge from '@/components/label-badge'; 
import DetailsIcons from './detailsIcons';
import PromotedBadge from './promotedBadge';
import style from './styles/details.module.scss';

interface FeaturedListingDetailsProps {
    price: number;
    payment: string;
    bedrooms: number;
    bathrooms: number;
    garages: number;
    erfSize: number;
    floorSize: number;
    address: string;
    suburb: string;
    type: string;
    promoted?: boolean;
}

export default function FeaturedListingDetails({ 
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
    promoted,
}: FeaturedListingDetailsProps) {
    return (
        <footer className={style.details}>
            <p className={style.price}>
                <span className="Heading-2">
                    R {getFormattedPrice(price)}
                </span>{" "}
                <span className={`SmallBold ${style.payment}`}>
                    {payment}
                </span>
            </p>
            <div className={style.info}>
                <div className={`BaseRegular ${style.location}`}>
                    <p className={style.description}>
                        {bedrooms} Bedroom {type}{" "}
                        <span className="hideOnMdOnly">in <strong>{suburb}</strong></span>
                    </p>
                    <p className={style.address}>
                        <span className="showOnMdOnly">
                            <strong>{suburb}</strong>
                        </span>
                        <span className={style.addressText}>
                            {address}
                        </span>
                    </p>
                </div>
                <DetailsIcons
                    bedrooms={bedrooms}
                    bathrooms={bathrooms}
                    garages={garages}
                    erfSize={erfSize}
                    floorSize={floorSize}
                />
                <div className="showOnSmOnly">
                    <div className={style.badges}>
                        <LabelBadge 
                            label="Erf" 
                            value={`${erfSize} m²`} 
                        />
                        <LabelBadge 
                            label="Floor" 
                            value={`${floorSize} m²`} 
                        />
                    </div>
                </div>
            </div>
            {promoted && (
                <div className={`${style.detailsPromotedBadge} hideOnSm`}>
                    <PromotedBadge />
                </div>
            )}
        </footer>
    );
}
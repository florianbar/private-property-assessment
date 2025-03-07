import { getFormattedPrice } from '@/utils/numbers'; 
import DetailsIcons from './detailsIcons';
import DetailsBadge from './detailsBadge';
import style from './styles/details.module.css';

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
}: FeaturedListingDetailsProps) {
    return (
        <footer className={style.details}>
            <p className={style.detailsPrice}>
                <span className="Heading-2">
                    R {getFormattedPrice(price)}
                </span>{" "}
                <span className={`SmallBold ${style.detailsPricePayment}`}>
                    {payment}
                </span>
            </p>
            <div className={style.detailsInfo}>
                <div className={`BaseRegular ${style.detailsInfoLocation}`}>
                    <p className={style.detailsInfoDescription}>
                        {bedrooms} Bedroom {type}{" "}
                        <span className="hideOnMdOnly">in <strong>{suburb}</strong></span>
                    </p>
                    <p className={style.detailsInfoAddress}>
                        <span className="showOnMdOnly">
                            <strong>{suburb}</strong>
                        </span>
                        <span className={style.detailsInfoAddressText}>
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
                    <div className={style.detailsInfoBadges}>
                        <DetailsBadge 
                            label="Erf" 
                            value={`${erfSize} m²`} 
                        />
                        <DetailsBadge 
                            label="Floor" 
                            value={`${floorSize} m²`} 
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
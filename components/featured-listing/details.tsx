import style from './styles/details.module.css';

import { getFormattedPrice } from '@/utils/numbers'; 

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
                    <div className={style.detailsInfoDescription}>
                        {bedrooms} Bedroom {type}{" "}
                        <span className="hideOnMdOnly">in <strong>{suburb}</strong></span>
                    </div>
                    <div className={style.detailsInfoAddress}>
                        <div className="showOnMdOnly">
                            <strong>{suburb}</strong>
                        </div>
                        <div className={style.detailsInfoAddressText}>
                            {address}
                        </div>
                    </div>
                </div>
                <div>
                    <div>Bedrooms {bedrooms}</div>
                    <div>Bathrooms {bathrooms}</div>
                    <div>Garages {garages}</div>
                    <div>Erf Size {erfSize} m²</div>
                    <div>Floor Size {floorSize} m²</div>
                </div>
            </div>
        </footer>
    );
}
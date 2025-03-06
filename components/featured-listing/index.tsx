import { MOCK_LISTING } from '@/data/mock-data';
import style from './index.module.css';

interface FeaturedListingProps {
    listing: typeof MOCK_LISTING;
}

export default function FeaturedListing({ listing }: FeaturedListingProps) {
    const {
        gallery,
    } = listing;

    return (
        <div className={style.banner}>
            <div 
                className={`${style.bannerMain} ${style.bannerImage}`} 
                style={{ backgroundImage: `url(${gallery[0]})` }}
            />
            <div className={style.bannerSecondary}>
                <div
                    className={`${style.bannerSecondaryImage} ${style.bannerImage}`} 
                    style={{ backgroundImage: `url(${gallery[1]})` }}
                />
                <div
                    className={`${style.bannerSecondaryImage} ${style.bannerImage}`} 
                    style={{ backgroundImage: `url(${gallery[2]})` }}
                />
            </div>
        </div>
    );
}

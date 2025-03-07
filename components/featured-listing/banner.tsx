import Badge, { BADGE_SIZES, BADGE_COLORS } from '@/components/badge';
import style from './styles/banner.module.css';

interface FeaturedListingBannerProps {
    images: string[];
    reduced?: boolean;
    retirement?: boolean;
    hdMedia?: boolean;
}

export default function FeaturedListingBanner({ 
    images, 
    reduced,
    retirement,
    hdMedia, 
} : FeaturedListingBannerProps) {
    return (
        <main className={style.banner}>
            <div 
                className={`${style.bannerMain} ${style.bannerImage}`} 
                style={{ backgroundImage: `url(${images[0]})` }}
            >
                <div className={`${style.bannerBadges} ${style.bannerBadgesTop}`}>
                    {reduced && (
                        <Badge size={BADGE_SIZES.large} color={BADGE_COLORS.green}>
                            Reduced
                        </Badge>
                    )}
                </div>
                <div className={`${style.bannerBadges} ${style.bannerBadgesBottom}`}>
                    {hdMedia && (
                        <Badge color={BADGE_COLORS.orange}>
                            HD Media
                        </Badge>
                    )}
                    {retirement && (
                        <Badge color={BADGE_COLORS.dark}>
                            Retirement
                        </Badge>
                    )}
                </div>
            </div>
            <div className={style.bannerSecondary}>
                <div
                    className={`${style.bannerSecondaryImage} ${style.bannerImage}`} 
                    style={{ backgroundImage: `url(${images[1]})` }}
                />
                <div
                    className={`${style.bannerSecondaryImage} ${style.bannerImage}`} 
                    style={{ backgroundImage: `url(${images[2]})` }}
                />
            </div>
        </main>
    );
}

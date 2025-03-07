import style from './styles/banner.module.css';

interface FeaturedListingBannerProps {
    images: string[];
}

export default function FeaturedListingBanner({ images } : FeaturedListingBannerProps) {
    return (
        <main className={style.banner}>
            <div 
                className={`${style.bannerMain} ${style.bannerImage}`} 
                style={{ backgroundImage: `url(${images[0]})` }}
            />
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

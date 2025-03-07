import style from './styles/details.module.css';

interface FeaturedListingDetailsBadgeProps {
    label: string;
    value: string;
}

export default function FeaturedListingDetailsBadge({ label, value }: FeaturedListingDetailsBadgeProps) {
    return (
        <span className={style.detailsInfoBadge}>
            <span className={`SmallRegular ${style.detailsInfoBadgeLabel}`}>
                {label}
            </span>{" "}
            <span className={`BaseBold ${style.detailsInfoBadgeValue}`}>
                {value}
            </span>
        </span>
    );
}
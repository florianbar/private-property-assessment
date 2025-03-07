import style from './styles/details.module.scss';

interface FeaturedListingDetailsBadgeProps {
    label: string;
    value: string;
}

export default function FeaturedListingDetailsBadge({ label, value }: FeaturedListingDetailsBadgeProps) {
    return (
        <span className={style.badge}>
            <span className={`SmallRegular ${style.badgeLabel}`}>
                {label}
            </span>{" "}
            <span className={`BaseBold ${style.badgeValue}`}>
                {value}
            </span>
        </span>
    );
}
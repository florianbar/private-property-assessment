import style from './index.module.scss';

interface LabelBadgeProps {
    label: string;
    value: string;
}

export default function LabelBadge({ label, value }: LabelBadgeProps) {
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
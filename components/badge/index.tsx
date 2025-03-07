import style from './index.module.css';

export const BADGE_SIZES = {
    small: "sm",
    medium: "md",
    large: "lg",
};

export const BADGE_COLORS = {
    primary: "primary",
    green: "green",
    orange: "orange",
    dark: "dark",
};

interface BadgeProps {
    children: React.ReactNode | string;
    size?: (typeof BADGE_SIZES)[keyof typeof BADGE_SIZES];
    color?: (typeof BADGE_COLORS)[keyof typeof BADGE_COLORS];
}

export default function Badge({ 
    children, 
    size = BADGE_SIZES.medium,
    color = BADGE_COLORS.primary,
}: BadgeProps) {
    let badgeSizeClass = "";
    switch (size) {
        case BADGE_SIZES.small:
            badgeSizeClass = style["badge--sizeSm"];
            break;
        case BADGE_SIZES.large:
            badgeSizeClass = style["badge--sizeLg"];
            break;
    }

    let badgeColorClass = "";
    switch (color) {
        case BADGE_COLORS.green:
            badgeColorClass = style["badge--colorGreen"];
            break;
        case BADGE_COLORS.orange:
            badgeColorClass = style["badge--colorOrange"];
            break;
        case BADGE_COLORS.dark:
            badgeColorClass = style["badge--colorDark"];
            break;
    }

    return (
        <span className={`${style.badge} ${badgeSizeClass} ${badgeColorClass}`}>
            {children}
        </span>
    );
}
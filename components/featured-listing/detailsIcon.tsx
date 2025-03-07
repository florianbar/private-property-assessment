import Image from 'next/image';

import style from './styles/details.module.scss';

interface FeaturedListingDetailsIconProps {
    text: string;
    imageUrl: string;
    imageAlt: string;
    className?: string;
}

export default function FeaturedListingDetailsIcon({ 
    text, 
    imageUrl, 
    imageAlt, 
    className = "" 
}: FeaturedListingDetailsIconProps) {
    return (
        <div className={`${style.icon} ${className}`}>
            <Image 
                src={imageUrl} 
                alt={imageAlt}
                width={24} 
                height={24}
            />
            <strong className={`BaseBold ${style.iconText}`}>
                {text}
            </strong>
        </div>
    );
}
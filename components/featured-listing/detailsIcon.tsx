import Image from 'next/image';

import style from './styles/details.module.css';

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
        <div className={`${style.detailsInfoIcon} ${className}`}>
            <Image 
                src={imageUrl} 
                alt={imageAlt}
                width={24} 
                height={24}
            />
            <strong className={`BaseBold ${style.detailsInfoIconText}`}>
                {text}
            </strong>
        </div>
    );
}
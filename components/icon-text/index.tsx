import Image from 'next/image';

import style from './index.module.scss';

interface IconTextProps {
    text: string;
    imageUrl: string;
    imageAlt: string;
    className?: string;
}

export default function IconText({ 
    text, 
    imageUrl, 
    imageAlt, 
    className = ""
}: IconTextProps) {
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
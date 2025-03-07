import Image from 'next/image';

import style from './styles/header.module.css';

interface FeaturedListingHeaderProps {
    logo: string;
    agent: string;
    image: string;
}

export default function FeaturedListingHeader({ logo, agent, image } : FeaturedListingHeaderProps) {
    return (
        <header className={style.header}>
            <Image 
                src={logo} 
                alt="Agent Logo"
                width={352} 
                height={88} 
                className={style.headerLogo}
            />
            <div className={style.headerAgent}>
                <div className={`${style.headerAgentName} BaseSemi-Bold`}>{agent}</div>
                <Image 
                    src={image} 
                    alt={agent}
                    width={256} 
                    height={256} 
                    className={style.headerAgentImage}
                />
            </div>
        </header>
    );
}

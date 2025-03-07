import Image from 'next/image';

import style from './styles/header.module.scss';

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
                className={style.logo}
            />
            <div className={style.agent}>
                <div className={`${style.agentName} BaseSemi-Bold`}>{agent}</div>
                <Image 
                    src={image} 
                    alt={agent}
                    width={256} 
                    height={256} 
                    className={style.agentImage}
                />
            </div>
        </header>
    );
}

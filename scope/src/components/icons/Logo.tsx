import React from 'react';
import { Image } from "@heroui/react";
import logo from '../../assets/Logo.png';

export function Logo(): React.JSX.Element {
    return (
        <Image
            className='w-[400px]'
            alt="HeroUI hero Image"
            src={logo}
        />
    );
}

export default Logo;
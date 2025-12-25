import React from 'react';
import { Button, Divider } from "@heroui/react";
import ExcludeIcon from '../../assets/Exclude.png';
import SettingIcon from '../../assets/setting.png';

interface SensorCardProps {
    icon: React.JSX.Element;
    title: string;
    chart: React.JSX.Element;
    statusIcon: React.JSX.Element;
    onSettingClick?: () => void;
    className?: string;
}

export function SensorCard({
    icon,
    title,
    chart,
    statusIcon,
    onSettingClick,
    className = ''
}: SensorCardProps): React.JSX.Element {
    return (
        <div className={`shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl mx-5 w-[570px] pt-3 ${className}`}>
            <div className='flex gap-3 pl-2'>
                {icon}
                <div className='flex items-center'>
                    <p className='text-xl font-bold'> {title} </p>
                    <div className='flex ml-68 gap-2'>
                        <Button isIconOnly variant='light' radius='none' className='mt-2'>
                            {statusIcon}
                        </Button>
                        <Button isIconOnly variant='light' radius='none' className='mt-2'>
                            <img
                                className='w-[40px] h-[60px] object-contain'
                                alt='Exclude'
                                src={ExcludeIcon}
                            />
                        </Button>
                        <Button
                            isIconOnly
                            variant='light'
                            radius='none'
                            className='mt-2'
                            onPress={onSettingClick}
                        >
                            <img
                                className='w-[40px] h-[60px] object-contain'
                                alt='Setting'
                                src={SettingIcon}
                            />
                        </Button>
                    </div>
                </div>
            </div>
            <Divider />
            <div>
                {chart}
            </div>
        </div>
    );
}

export default SensorCard;
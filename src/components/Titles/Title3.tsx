import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Title3Props {
    text: string;
    borderColor?: string;
    bgCircleColor?: string;
    Icon: React.ComponentType;
}

export const Title3: React.FC<Title3Props> = ({ text, Icon, borderColor = 'border-turquoise-200', bgCircleColor = 'bg-turquoise-200' }) => {
    const borderClasses = twMerge('border', borderColor);
    const circleClasses = twMerge('w-1.5 h-1.5', bgCircleColor);


    return (
        <div className="relative inline-block h-14">
            <h3 className={twMerge("relative flex px-2 items-center gap-4 justify-around text-white lg:text-3xl text-xl  font-semibold w-full h-full", borderClasses)}>

                {text}
                <div className='w-px h-6 bg-zinc-400' />
                <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-3/4">
                    <Icon />
                </div>
            </h3 >

            <div className={twMerge(circleClasses, "absolute rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2")}></div>
            <div className={twMerge(circleClasses, "absolute rounded-full top-0 right-0 transform translate-x-1/2 -translate-y-1/2")}></div>
            <div className={twMerge(circleClasses, "absolute rounded-full bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2")}></div>
            <div className={twMerge(circleClasses, "absolute rounded-full bottom-0 right-0 transform translate-x-1/2 translate-y-1/2")}></div>
        </div >
    );
}

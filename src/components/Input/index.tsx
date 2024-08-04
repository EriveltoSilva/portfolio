import React from 'react';

import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentProps<'input'> {
    Icon?: React.ComponentType;
    className?: string;
    type: string;
    placeholder: string;
    name: string;
}


export const Input = ({ Icon, ...props }: InputProps) => {


    return (

        <div className="h-14 px-5 bg-gray-50 rounded-lg flex items-center gap-2">
            {Icon && <Icon />}
            <input {...props} className={twMerge('placeholder:text-gray-400 bg-transparent outline-none flex-1 text-gray-500', props.className)} />
        </div>
    );
};


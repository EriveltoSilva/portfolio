import React from "react";

type T = {
    color?: string;
    width?: string | number;
    height?: string | number
}

export const MenuIcon: React.FC<T> = ({ width, height, color }) => {
    return (
        <>
            <svg width={width || "40"} height={height || "40"} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.667 8.33325L33.3337 8.33325" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.66699 20L33.3337 20" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.66699 31.6665L23.3337 31.6665" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>


        </>
    );
};





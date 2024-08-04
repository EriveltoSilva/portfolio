import React from "react";

type T = {
    color?: string;
    width?: string | number;
    height?: string | number
}

export const UserIcon: React.FC<T> = ({ width, height, color }) => {
    return (
        <>
            <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25ZM9 15.75C11.8995 15.75 14.25 14.4069 14.25 12.75C14.25 11.0931 11.8995 9.75 9 9.75C6.10051 9.75 3.75 11.0931 3.75 12.75C3.75 14.4069 6.10051 15.75 9 15.75Z" fill="#6A6B70" />
            </svg>

        </>
    );
};





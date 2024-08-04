import React from "react";

type T = {
    color?: string;
    width?: string | number;
    height?: string | number
}

export const FacebookIcon: React.FC<T> = ({ width, height, color }) => {
    return (
        <>
            <svg width={width || "24"} height={height || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 12.0596C22.5 6.6419 17.9669 2.25 12.375 2.25C6.78311 2.25 2.25 6.6419 2.25 12.0596C2.25 16.9558 5.95255 21.0141 10.793 21.75V14.8952H8.22217V12.0596H10.793V9.89841C10.793 7.43988 12.3046 6.08187 14.6173 6.08187C15.7248 6.08187 16.8838 6.27346 16.8838 6.27346V8.68754H15.6071C14.3494 8.68754 13.957 9.44376 13.957 10.2203V12.0596H16.7651L16.3162 14.8952H13.957V21.75C18.7975 21.0141 22.5 16.9558 22.5 12.0596Z" fill="#0086DF" />
            </svg>
        </>
    );
};





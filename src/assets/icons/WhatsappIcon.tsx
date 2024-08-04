import React from "react";

type T = {
    color?: string;
    width?: string | number;
    height?: string | number
}

export const WhatsappIcon: React.FC<T> = ({ width, height, color }) => {
    return (
        <>
            <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_296_960)">
                    <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 10.0341 1.70931 11.0194 2.08787 11.9157C2.29708 12.4111 2.40169 12.6588 2.41465 12.846C2.4276 13.0332 2.3725 13.2391 2.26231 13.6509L1.5 16.5L4.34908 15.7377C4.76091 15.6275 4.96683 15.5724 5.15402 15.5854C5.3412 15.5983 5.58889 15.7029 6.08426 15.9121C6.98059 16.2907 7.96585 16.5 9 16.5Z" stroke="#6A6B70" stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M6.44112 9.283L7.09432 8.47173C7.36962 8.12981 7.70996 7.81147 7.7366 7.35619C7.74333 7.24121 7.66242 6.72492 7.5006 5.6924C7.437 5.28661 7.05815 5.25 6.72999 5.25C6.30236 5.25 6.08854 5.25 5.87621 5.34699C5.60785 5.46957 5.33234 5.81423 5.27188 6.103C5.22404 6.33147 5.25959 6.4889 5.33069 6.80377C5.63267 8.14111 6.34111 9.46189 7.43961 10.5604C8.53811 11.6589 9.85889 12.3673 11.1962 12.6693C11.5111 12.7404 11.6685 12.776 11.897 12.7281C12.1858 12.6677 12.5304 12.3921 12.653 12.1238C12.75 11.9115 12.75 11.6976 12.75 11.27C12.75 10.9419 12.7134 10.563 12.3076 10.4994C11.2751 10.3376 10.7588 10.2567 10.6438 10.2634C10.1885 10.29 9.87019 10.6304 9.52827 10.9057L8.717 11.5589" stroke="#6A6B70" stroke-width="1.5" />
                </g>
                <defs>
                    <clipPath id="clip0_296_960">
                        <rect width="18" height="18" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        </>
    );
};




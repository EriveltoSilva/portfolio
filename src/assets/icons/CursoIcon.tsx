import React from "react";

type T = {
  width?: string | number;
  height?: string | number;
  fill?: string;
  className?: string;
}

export const CursorIconTurquoise: React.FC<T> = ({ width, height, className, fill }) => {
  return (
    <>
      <svg className={className} width={width || "73"} height={height || "77"} viewBox="0 0 73 77" fill={fill || "none"} xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_121_2161)">
          <path d="M27.4058 20.9995C26.3907 20.2995 25.0151 21.077 25.0895 22.3077L26.5936 47.1863C26.6865 48.7215 28.6876 49.2437 29.519 47.9491L35.2183 39.066C35.3883 38.8011 35.6184 38.5801 35.89 38.421C36.1615 38.2618 36.4667 38.169 36.7809 38.15L46.4532 37.5652C47.9625 37.474 48.5039 35.5257 47.2578 34.6674L27.4058 20.9995Z" fill="#9FFEFF" />
        </g>
        <defs>
          <filter id="filter0_d_121_2161" x="0.886547" y="0.535168" width="71.2624" height="76.3473" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="12.1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.623529 0 0 0 0 0.996078 0 0 0 0 1 0 0 0 0.5 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_2161" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_121_2161" result="shape" />
          </filter>
        </defs>
      </svg>

    </>
  );
};

export const CursorIconPurple: React.FC<T> = ({ width, height, className, fill }) => {
  return (
    <>
      <svg width={width || "73"} height={height || "77"} viewBox="0 0 73 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_121_2215)">
          <path d="M27.4058 20.4995C26.3907 19.7995 25.0151 20.577 25.0895 21.8077L26.5936 46.6863C26.6865 48.2215 28.6876 48.7437 29.519 47.4491L35.2183 38.566C35.3883 38.3011 35.6184 38.0801 35.89 37.921C36.1615 37.7618 36.4667 37.669 36.7809 37.65L46.4532 37.0652C47.9625 36.974 48.5039 35.0257 47.2578 34.1674L27.4058 20.4995Z" fill="#9747FF" />
        </g>
        <defs>
          <filter id="filter0_d_121_2215" x="0.886608" y="0.0351524" width="71.2624" height="76.3473" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="12.1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.592157 0 0 0 0 0.278431 0 0 0 0 1 0 0 0 0.5 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_2215" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_121_2215" result="shape" />
          </filter>
        </defs>
      </svg>


    </>
  );
};

export const CursorIconOrange: React.FC<T> = ({ width, height, className, fill }) => {
  return (
    <>
      <svg width={width || "73"} height={height || "77"} viewBox="0 0 73 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_121_2203)">
          <path d="M27.4058 20.9995C26.3907 20.2995 25.0151 21.0769 25.0895 22.3077L26.5936 47.1862C26.6865 48.7214 28.6876 49.2436 29.519 47.9491L35.2183 39.066C35.3883 38.8011 35.6184 38.5801 35.89 38.4209C36.1615 38.2618 36.4667 38.1689 36.7809 38.15L46.4532 37.5652C47.9625 37.4739 48.5039 35.5257 47.2578 34.6674L27.4058 20.9995Z" fill="#FF7262" />
        </g>
        <defs>
          <filter id="filter0_d_121_2203" x="0.886547" y="0.535107" width="71.2624" height="76.3473" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="12.1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.447059 0 0 0 0 0.384314 0 0 0 0.5 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_2203" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_121_2203" result="shape" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export const CursorIconGreen: React.FC<T> = ({ width, height, className, fill }) => {
  return (
    <>
      <svg width={width || "73"} height={height || "77"} viewBox="0 0 73 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_121_2173)">
          <path d="M27.4058 20.9995C26.3907 20.2995 25.0151 21.077 25.0895 22.3077L26.5936 47.1863C26.6865 48.7215 28.6876 49.2437 29.519 47.9491L35.2183 39.066C35.3883 38.8011 35.6184 38.5801 35.89 38.421C36.1615 38.2618 36.4667 38.169 36.7809 38.15L46.4532 37.5652C47.9625 37.474 48.5039 35.5257 47.2578 34.6674L27.4058 20.9995Z" fill="#8CC84B" />
        </g>
        <defs>
          <filter id="filter0_d_121_2173" x="0.886608" y="0.535168" width="71.2624" height="76.3473" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="12.1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.54902 0 0 0 0 0.784314 0 0 0 0 0.294118 0 0 0 0.5 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_2173" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_121_2173" result="shape" />
          </filter>
        </defs>
      </svg>

    </>
  );
};

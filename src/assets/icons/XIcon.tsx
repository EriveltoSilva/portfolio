import React from "react";

type T = {
  color?: string;
  width?: string | number;
  height?: string | number;
};

export const XIcon: React.FC<T> = ({ width, height, color }) => {
  return (
    <>
      <svg
        width={width || "24"}
        height={height || "24"}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.03262 4.49976H9.44973L13.1727 9.56455L17.4387 4.49976H20.0825L14.3553 11.1635L21.0951 20.2498H15.8357L11.687 14.7222L6.95842 20.2498H4.30768L10.4922 13.0894L4.03262 4.49976ZM7.07462 6.06079H8.66541L17.9684 18.6165H16.5178L7.07462 6.06079Z"
          fill={color || "#0086DF"}
        />
      </svg>
    </>
  );
};

export const X2Icon: React.FC<T> = ({ width, height, color }) => {
  return (
    <>
      <svg
        width={width || "20"}
        height={height || "20"}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.53366 19.3334L0.666992 17.4667L8.13366 10.0001L0.666992 2.53341L2.53366 0.666748L10.0003 8.13341L17.467 0.666748L19.3337 2.53341L11.867 10.0001L19.3337 17.4667L17.467 19.3334L10.0003 11.8667L2.53366 19.3334Z"
          fill={color || "#A480f0"}
        />
      </svg>
    </>
  );
};

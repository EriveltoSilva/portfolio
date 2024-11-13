"use client"
import { twMerge } from "tailwind-merge";

interface Title2Props {
    text: string;
    className?: string;
}

export const Title2 = ({ text, ...props }: Title2Props) => {
    const classNameDefault = twMerge("lg:text-[40px] text-[28px] mt-7", props.className)
    return (
        <h2 className={classNameDefault}>
            {/* <span className="font-semibold bg-gradient-to-r from-[#00F0FF] to-[#2C82BC] text-transparent bg-clip-text"> */}
            <span className="font-semibold text-gradient from-gradient-start to-gradient-end text-transparent bg-clip-text">
                {"< "}
            </span>

            <span className="text-white">
                {text}
            </span>

            <span className="text-gradient from-gradient-start to-gradient-end text-transparent bg-clip-text">
                {" />"}
            </span>
        </h2>
    )
}
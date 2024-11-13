"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import React, { HTMLAttributes, useEffect } from "react";

interface FadeWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  dataAOS: string;
}

export const FadeWrapper = ({ children, dataAOS = "fade-up", className = "", ...props }: FadeWrapperProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Customize animation duration
    });
  }, []);

  return (
    <div data-aos={dataAOS} className={className} {...props}>
      {children}
    </div>
  );
};

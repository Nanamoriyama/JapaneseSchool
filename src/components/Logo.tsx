import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <Image
        src="/images/moriyamalogo.png"
        alt="Logo"
        width={100}
        height={100}
        className="mx-auto"
      />
    </div>
  );
};

export default Logo;

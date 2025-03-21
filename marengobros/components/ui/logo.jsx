// components/Logo.js
import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo">
      <Image
        src="/mb-logo.png"
        alt="MB Logo"
        width={150} 
        height={50} 
      />
    </div>
  );
};

export default Logo;

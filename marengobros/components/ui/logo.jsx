// components/Logo.js
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/about"} className="rounded-lg">
      <Image
        src="/mb-logo-border-rounded.png"
        alt="MB Logo"
        width={150}
        height={150}
        quality={100}
        
      />
    </Link>
  );
};

export default Logo;

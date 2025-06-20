"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CiLogo = () => {
  const pathname = usePathname();

  const isAboutPage = pathname === "/about";
  const isItinsPage = pathname === "/custom-itineries";

  return (
    <Link href={isAboutPage || isItinsPage ? "/" : "/about"} className="rounded-lg">
      <Image
        src="/mb-logo-border-rounded.png"
        alt="MB Logo"
        width={90}
        height={90}
        quality={100}
      />
    </Link>
  );
};

export default CiLogo;

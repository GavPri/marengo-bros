"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileHomeLogo = () => {
  const pathname = usePathname();

  const isAboutPage = pathname === "/about";
  const isItinsPage = pathname === "/custom-itineries";

  return (
    <Link href={isAboutPage || isItinsPage ? "/" : "/about"} className="rounded-lg">
      <Image
        src="/mb-logo-border-rounded.png"
        alt="MB Logo"
        width={120}
        height={120}
        quality={100}
      />
    </Link>
  );
};

export default MobileHomeLogo;

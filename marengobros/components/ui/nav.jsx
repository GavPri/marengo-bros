"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Content Writing", href: "/content-writings" },
  { label: "Custom Itineraries", href: "/custom-itineries" },
];

export default function NavPills() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Navigation */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            
            <button className={open ? `hidden` : `flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm shadow-lg border-2 border-gray-50`}>
              <Menu className="h-6 w-6 text-white" />
              <span className="sr-only">Open navigation menu</span>
            </button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="rounded-t-3xl  bg-transparent border-gray-50 pt-6 pb-10"
          >
            <nav className="flex flex-col items-center gap-6 mt-4">
              {navItems
                .filter(({ href }) => href !== pathname)
                .map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-xl font-bold text-stroke-orange text-center hover:underline underline-offset-4 transition-all"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      {/* <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 hidden sm:flex items-center border-4 font-bold border-gray-50 rounded-full flex-row justify-between gap-8 px-6 py-3 bg-gray backdrop-blur-md shadow-lg">
        {navItems.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="text-xl text-stroke-orange text-center hover:underline underline-offset-4 transition-all"
          >
            {label}
          </Link>
        ))}
      </nav> */}
    </>
  );
}

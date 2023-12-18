"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export function Navigation() {
  const pathname = usePathname();

  return (
    <header>
      <div className="px-6 py-2 md:px-16 md:py-4">
        <Image src={"/logo.webp"} width={210} height={45} alt="Med Express logo" />
      </div>

      <nav className="flex bg-primary-bg text-primary-fg px-6 md:px-16">
        <Link
          className={`hover:bg-primary-bg-hover p-2 ${
            pathname.includes("/genovian-pear") ? "bg-primary-bg-hover" : ""
          }`}
          href="/genovian-pear"
        >
          Genovian Pear
        </Link>
      </nav>
    </header>
  );
}

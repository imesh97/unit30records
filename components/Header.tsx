"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const isHome = pathname === "/";

  return (
    <header
      className={`bg-background sticky top-0 z-40 ${
        !isHome
          ? "border-b border-muted-foreground"
          : "border-none border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {!isHome ? (
            <span>
              <Image
                src={"/30_logo.png"}
                height={48}
                width={48}
                alt="UNIT30 Records Logo"
                className="object-contain"
              />
            </span>
          ) : (
            <span>
              <Image
                src={"/30_logo.png"}
                height={48}
                width={48}
                alt="UNIT30 Records Logo"
                className="object-contain invisible"
              />
            </span>
          )}
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/releases"
            className={`text-sm font-light tracking-widest transition-colors ${
              isActive("/releases")
                ? "text-accent"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            ⚡︎ RELEASES
          </Link>
          <Link
            href="/artists"
            className={`text-sm font-light tracking-widest transition-colors ${
              isActive("/artists")
                ? "text-accent"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            ⚡︎ ARTISTS
          </Link>
        </nav>
      </div>
    </header>
  );
}

import { Release } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import {
  FaSpotify,
  FaItunesNote,
  FaSoundcloud,
  FaYoutube,
} from "react-icons/fa6";

interface ReleaseCardProps {
  release: Release;
}

export function ReleaseCard({ release }: ReleaseCardProps) {
  const socialLinkClass =
    "text-muted-foreground hover:text-accent transition-colors duration-200 text-3xl";

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-square bg-card border border-border rounded-lg flex items-center justify-center overflow-hidden hover:border-accent hover-glow cursor-pointer transition-colors duration-300 group">
        {release.abbreviation ? (
          <span className="text-5xl md:text-6xl font-black text-muted-foreground group-hover:text-accent transition-colors duration-300">
            {release.abbreviation}
          </span>
        ) : (
          <Image
            src={release.img}
            alt={release.title}
            width={600}
            height={600}
            className="object-cover"
          />
        )}
      </div>

      <div className="space-y-1">
        <h3 className="text-3xl font-bold text-foreground italic">
          {release.title}
        </h3>

        {/* <p className="text-xl font-light text-muted-foreground">
          {release.artist}
        </p>

        <div className="flex items-center">
          <span className="text-sm font-medium text-accent uppercase tracking-wide">
            {release.type}
          </span>
          <span className="text-sm font-black text-muted-foreground mx-2">
            ·
          </span>
          <span className="text-sm text-muted-foreground">{release.year}</span>
        </div> */}
        {/* Flex container holding Artist/Meta (Left) and Icons (Right) */}
        <div className="flex items-end justify-between gap-4">
          {/* Left Side: Artist Name & Meta Info */}
          <div className="flex flex-col">
            <p className="text-xl font-light text-muted-foreground">
              {release.artist}
            </p>
            <div className="flex items-center pt-1">
              <span className="text-sm font-medium text-accent uppercase tracking-wide">
                {release.type}
              </span>
              <span className="text-sm font-black text-muted-foreground mx-2">
                ·
              </span>
              <span className="text-sm text-muted-foreground">
                {release.year}
              </span>
            </div>
          </div>

          {/* Right Side: Social Icons */}
          {/* Using 'items-center' within this div to keep icons aligned */}
          <div className="flex items-center gap-3 pr-1">
            {release.socialLinks?.spotify && (
              <Link
                href={release.socialLinks.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClass}
              >
                <FaSpotify />
              </Link>
            )}
            {release.socialLinks?.appleMusic && (
              <Link
                href={release.socialLinks.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClass}
              >
                <FaItunesNote />
              </Link>
            )}
            {release.socialLinks?.soundcloud && (
              <Link
                href={release.socialLinks.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClass}
              >
                <FaSoundcloud />
              </Link>
            )}
            {release.socialLinks?.youtube && (
              <Link
                href={release.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClass}
              >
                <FaYoutube />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

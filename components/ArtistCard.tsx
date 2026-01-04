import { Artist } from '@/lib/constants';
import Image from "next/image";
import Link from 'next/link';
import { FaInstagram, FaItunesNote, FaSpotify, FaSoundcloud, FaYoutube, FaTiktok } from "react-icons/fa6";

interface ArtistCardProps {
  artist: Artist;
}

export function ArtistCard({ artist }: ArtistCardProps) {
    const socialLinkClass = `text-2xl font-medium text-muted-foreground hover:text-accent transition-colors`;

  return (
    <div className="flex flex-col gap-6">
      <div className="aspect-square bg-card border border-border rounded-lg flex items-center justify-center overflow-hidden hover:border-accent hover-glow transition-colors duration-300 group">
        <Image src={artist.img} alt={artist.name} width={600} height={600} className="object-cover" />
      </div>

      <div className="space-y-2">
        <h3 className="text-3xl italic font-bold text-foreground">
          {artist.name}
        </h3>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {artist.description}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          {artist.socialLinks.spotify && (
            <Link
              href={artist.socialLinks.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
            >
              <FaSpotify />
            </Link>
          )}
          {artist.socialLinks.appleMusic && (
            <Link
              href={artist.socialLinks.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
            >
              <FaItunesNote />
            </Link>
          )}
          {artist.socialLinks.soundcloud && (
            <Link
              href={artist.socialLinks.soundcloud}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
            >
              <FaSoundcloud />
            </Link>
          )}
          {artist.socialLinks.youtube && (
            <Link
              href={artist.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
            >
              <FaYoutube />
            </Link>
          )}
          {artist.socialLinks.tiktok && (
            <Link
              href={artist.socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
            >
              <FaTiktok />
            </Link>
          )}
          {artist.socialLinks.instagram && (
            <Link
              href={artist.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
            >
              <FaInstagram />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

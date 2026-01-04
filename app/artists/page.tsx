import { ARTISTS } from "@/lib/constants";
import { ArtistCard } from "@/components/ArtistCard";

export default function ArtistsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div className="mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-3">
          🎤 Artists
        </h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Meet the roster behind the music.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {ARTISTS.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}

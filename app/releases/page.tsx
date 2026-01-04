'use client';

import { useState } from 'react';
import { RELEASES } from '@/lib/constants';
import { ReleaseCard } from '@/components/ReleaseCard';

export default function ReleasesPage() {
  const [selectedArtist, setSelectedArtist] = useState<string>('ALL');

  const filteredReleases =
    selectedArtist === 'ALL'
      ? RELEASES
      : RELEASES.filter((release) => release.artist === selectedArtist);

  const uniqueArtists = Array.from(new Set(RELEASES.map((r) => r.artist)));
  const artists = ['ALL', ...uniqueArtists];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div className="mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-3">
          💿 Releases
        </h1>
        <p className="text-base md:text-lg text-muted-foreground">
          The latest sounds from our collective.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-12">
        { artists.map((artist) => (
          <button
            key={artist}
            onClick={() => setSelectedArtist(artist)}
            className={
              `text-sm uppercase tracking-widest transition-colors cursor-pointer ${
                selectedArtist === artist
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            {artist}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
        {filteredReleases.map((release) => (
          <ReleaseCard key={release.id} release={release} />
        ))}
      </div>
    </div>
  );
}

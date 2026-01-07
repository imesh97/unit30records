export interface Artist {
  id: string;
  name: string;
  img: string;
  description: string;
  socialLinks: {
    spotify?: string;
    instagram?: string;
    appleMusic?: string;
    soundcloud?: string;
    tiktok?: string;
    youtube?: string;
  };
}

export interface Release {
  id: string;
  title: string;
  abbreviation?: string;
  img: string;
  artist: string;
  type: "EP" | "Single" | "Album" | "Feature";
  year: number;
  socialLinks: {
    spotify?: string;
    youtube?: string;
    appleMusic?: string;
    soundcloud?: string;
  };
}

export const ARTISTS: Artist[] = [
  {
    id: "unit30",
    name: "UNIT30",
    img: "/artists/30_logo.png",
    description:
      "Operating under the label's own banner, this Canadian group defines the collective's ethos. A 4-piece combo with no sonic boundaries, they share a multi-disciplinary approach, collaborating on every layer of the production and engineering. They deliver a limitless style crafted entirely in-house.",
    socialLinks: {
      spotify:
        "https://open.spotify.com/artist/1N2d0k3Af7is2JVUJX6654?si=LhxrzBTUTXSZaTwn35XoKw&utm_medium=share&utm_source=linktree",
      instagram: "https://www.instagram.com/unit30records",
      soundcloud: "https://www.soundcloud.com/unit30",
      youtube: "https://www.youtube.com/@unit30records",
    },
  },
  {
    id: "naraiyan",
    name: "Naraiyan",
    img: "/artists/nryn.webp",
    description:
      "Blurring the lines between Hip-Hop and R&B, Naraiyan crafts a unique soundscape that balances deep emotion with high energy. Based outside Toronto, this singer-songwriter produces his own material, creating a safe space for listeners to connect with his inner thoughts. #DREAMBOY",
    socialLinks: {
      spotify:
        "https://open.spotify.com/artist/052umPGYxvid13SBhXaWNz?si=bQBlwpFNQSKKr2rQpYVzpA&utm_medium=share&utm_source=linktree",
      instagram: "https://instagram.com/naraiyanmann",
      appleMusic: "https://music.apple.com/ca/artist/naraiyan/1742995164",
      tiktok: "https://tiktok.com/@naraiyanmann",
    },
  },
  {
    id: "hesmi",
    name: "hesmi",
    img: "/artists/hesmi.png",
    description:
      "Emerging from the shadows, hesmi is an enigmatic figure in the producer scene. Currently releasing instrumental beat tapes, their work is rooted in Hip-Hop but constantly expanding into new subgenres. They maintain total anonymity, letting soundscape speak louder than identity.",
    socialLinks: {
      spotify:
        "https://open.spotify.com/artist/42EFOWPV81pQfdvMl9R6yW?si=L2WD1K1RTa6Gcdrv-K52Hw",
      appleMusic: "https://music.apple.com/us/artist/hesmi/1865129286",
      youtube: "https://youtube.com/@hes-mi",
    },
  },
  {
    id: "escobar-brown",
    name: "escobar brown",
    img: "/artists/escobar_brown.png",
    description: "escobar season returns...",
    socialLinks: {},
  },
];

export const RELEASES: Release[] = [
  {
    id: "bron",
    title: "B R O N",
    img: "/releases/bron.png",
    artist: "hesmi",
    type: "EP",
    year: 2026,
    socialLinks: {
      spotify:
        "https://open.spotify.com/album/2GOl0xCRJFp8YSM1lvA6MU?si=u8xsm9YVTVWUrt-gCKmo_A",
      appleMusic: "https://music.apple.com/us/album/b-r-o-n-single/1865431381",
    },
  },
  {
    id: "demon7ime",
    title: "demon7ime",
    img: "/releases/demon7ime.png",
    artist: "hesmi",
    type: "EP",
    year: 2025,
    socialLinks: {
      spotify:
        "https://open.spotify.com/album/07zqDGfi2QJPeVpV9mAfdc?si=VicLfV95S96nrfr8lzT2FA",
      appleMusic: "https://music.apple.com/us/album/demon7ime-ep/1865563030",
    },
  },
  {
    id: "thnkn_abt_me-nryn",
    title: "Thinking About Me",
    img: "/releases/thnkn_abt_me.png",
    artist: "Naraiyan",
    type: "Single",
    year: 2025,
    socialLinks: {
      spotify:
        "https://open.spotify.com/album/479PYy2CPlvQWy3qNpywrJ?si=CTuI7x9cRpup5mdnt-iicg",
      appleMusic:
        "https://music.apple.com/us/album/thinking-about-me-single/1854336767",
    },
  },
  {
    id: "vibe-nryn",
    title: "Vibe",
    img: "/releases/vibe.png",
    artist: "Naraiyan",
    type: "Single",
    year: 2025,
    socialLinks: {
      spotify:
        "https://open.spotify.com/album/2vUQ3leZucVvN8BIX5Zmkc?si=OlakGOMAR6KubIKEpALAdg",
      appleMusic: "https://music.apple.com/us/album/vibe-single/1849780690",
    },
  },
  {
    id: "bestfriend-nryn",
    title: "Bestfriend",
    img: "/releases/bestfriend.png",
    artist: "Naraiyan",
    type: "Single",
    year: 2025,
    socialLinks: {
      spotify:
        "https://open.spotify.com/album/5VGhBLCHBAsc8VimOvGgxT?si=7AtP3tvoSpaufoYPUNoEkw",
      appleMusic:
        "https://music.apple.com/us/album/bestfriend-single/1838759131",
    },
  },
  {
    id: "pull-up-nryn",
    title: "Pull Up",
    img: "/releases/pull_up.png",
    artist: "Naraiyan",
    type: "Single",
    year: 2025,
    socialLinks: {
      spotify:
        "https://open.spotify.com/album/479PYy2CPlvQWy3qNpywrJ?si=C3ICRM5GQDe2HvU5nIVQ7g",
      appleMusic:
        "https://music.apple.com/us/album/pull-up-feat-sean-hamad-single/1831531898",
    },
  },
  {
    id: "sincerely-nryn",
    title: "Sincerely, Naraiyan",
    img: "/releases/sincerely_naraiyan.png",
    artist: "Naraiyan",
    type: "Album",
    year: 2025,
    socialLinks: {
      spotify:
        "https://open.spotify.com/album/77ZYeoP58KEn9fJJJ8M2OK?si=yUfhBX34TJqVi23bU5FZyw",
      appleMusic:
        "https://music.apple.com/us/album/sincerely-naraiyan/1801684871",
    },
  },
  {
    id: "move",
    title: "Move (feat. UNIT30)",
    img: "/releases/sincerely_naraiyan.png",
    artist: "Naraiyan",
    type: "Feature",
    year: 2025,
    socialLinks: {
      spotify:
        "https://open.spotify.com/track/5mFuCydIlszdfNJf8X3ODh?si=e34fb80ceed94991",
      appleMusic: "https://music.apple.com/us/song/move-feat-unit30/1801685003",
    },
  },
];

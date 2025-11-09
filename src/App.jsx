import React, { useEffect, useRef, useState } from "react";

// Single-file React component (Tailwind CSS assumed in project).
// Replace placeholder images in /public or with your own hosted assets.

export default function BowOfDestiny() {
  const [musicOn, setMusicOn] = useState(false);
  const [mapRegion, setMapRegion] = useState(null);
  const bowRef = useRef(null);

  useEffect(() => {
    // Simple parallax on mouse move for hero
    const handleMove = (e) => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;
      hero.style.transform = `translate(${x * 10}px, ${y * 8}px)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Bow draw animation (click to animate)
  const drawBow = () => {
    const el = bowRef.current;
    if (!el) return;
    el.animate([
      { transform: "scale(1) translateY(0)" },
      { transform: "scale(0.96) translateY(-6px)" },
      { transform: "scale(1) translateY(0)" },
    ], { duration: 600, easing: "ease-out" });
  };

  const characters = [
    {
      name: "Aarav",
      title: "The Chosen one",
      bio: "A young warrior chosen by fate. An unyielding warrior who defied fate itself.",
      img: "/assets/aarav.jpg",
    },
    {
      name: "Mira",
      title: "The Guardian Sage",
      bio: "Keeper of ancient lore and mentor to Aarav. Wields celestial rites.",
      img: "/assets/mira.jpg",
    },
    {
      name: "Mahira",
      title: "The Eternal Adversary",
      bio: "A demon-king reborn — cunning, mighty, and bound to the eclipse.",
      img: "/assets/mahira.JPG",
    },
  ];

  const regions = [
    { id: "mortal realm", name: "Mortal Realm", desc: "The golden city of kings; heart of the mortal realm." },
    { id: "lanka", name: "Lanka", desc: "An island stronghold shrouded in sorcery and steel." },
    { id: "dandaka", name: "Dandaka Forest", desc: "Wildwood full of spirits, bandits, and hidden trials." },
    { id: "celestial", name: "Celestial Realms", desc: "The realms above where gods whisper of destiny." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white antialiased">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div
          id="hero"
          className="relative h-[70vh] md:h-[80vh] flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {/* background placeholder - replace with video or cinematic image */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{
              backgroundImage: "url('/assets/hero-forest.jpg')",
              filter: "brightness(0.45) saturate(0.9)",
              transform: "translateZ(-1px) scale(1.05)",
            }}
          />

          {/* godly vignette */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/40 to-black" />

          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4" style={{ fontFamily: '"Cinzel", serif' }}>
              Bow of Destiny
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-6">
              When gods fall silent, the hero must rise.
            </p>

            <div className="flex items-center justify-center gap-4">
              <button
                className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-600 rounded-lg font-semibold shadow-lg hover:scale-105 transform transition"
                onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
              >
                Pre-order Now
              </button>

              <button
                className="px-5 py-3 border border-white/20 rounded-lg hover:bg-white/5"
                onClick={() => {
                  const el = document.getElementById("trailer");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Watch Trailer
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <div
                ref={bowRef}
                onClick={() => {
                  drawBow();
                }}
                className="cursor-pointer select-none"
                title="Click to draw the bow"
              >
                {/* simple SVG bow icon */}
                <svg width="120" height="40" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 70 C80 60, 80 20, 10 10" stroke="#FCD34D" strokeWidth="6" strokeLinecap="round" />
                  <path d="M190 70 C120 60, 120 20, 190 10" stroke="#F97316" strokeWidth="6" strokeLinecap="round" />
                  <line x1="10" y1="10" x2="190" y2="10" stroke="#FFF" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <p className="mt-6 text-sm opacity-70">Inspired by the mythic tapestry of Ramayana — reimagined for an epic RPG experience.</p>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="px-6 md:px-16 lg:px-28 -mt-12 relative z-20">
        {/* STORY */}
        <section className="bg-gradient-to-t from-black/70 to-transparent rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm mb-10">
          <div className="md:flex md:gap-8 items-center">
            <div className="md:flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: '"Cinzel", serif' }}>
                The Story
              </h2>
              <p className="opacity-90 leading-relaxed">
                In an age where dharma fades and shadows grow long, a celestial weapon — a relic of the gods — awakens.
                A young chosen one named Aarav must traverse fallen kingdoms, strike deals with sages, and face an adversary
                reborn to plunge the world into eclipse. Choices echo through fate: will you restore balance or let
                destiny unravel?
              </p>

              <div className="mt-6 flex gap-3 flex-wrap">
                
              </div>
            </div>

            <div className="md:w-96 mt-6 md:mt-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/assets/aarav-story.jpg" alt="Story" className="w-full h-56 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* GAMEPLAY FEATURES */}
        <section className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="col-span-2 bg-gradient-to-r from-gray-900/60 to-black/40 p-8 rounded-2xl backdrop-blur-sm shadow">
            <h3 className="text-2xl font-bold mb-4">Gameplay</h3>
            <p className="opacity-90 mb-6">Dynamic, visceral combat with mythic abilities and open-world exploration set across shifting eras and realms.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Feature icon="🏹" title="Real-time Combat" desc="Precision archery, parry & mounted combat." />
              <Feature icon="🌍" title="Mythic Open World" desc="From golden cities to haunted forests and celestial peaks." />
              <Feature icon="⚖️" title="Karma & Destiny" desc="Choices affect fate, NPCs, and multiple endings." />
              <Feature icon="🛡️" title="Factions & Allies" desc="Join sages, kings, or rebels to gain unique quests." />
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-b from-yellow-900/10 to-black/20 shadow">
            <h4 className="font-bold text-xl mb-4">Pre-order Editions</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li><strong>Standard</strong> — Game + Digital soundtrack</li>
              <li><strong>Deluxe</strong> — Skins, Digital artbook</li>
              <li><strong>Collector's</strong> — Physical statue, OST, artbook</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a className="px-3 py-2 bg-blue-700 rounded-md">Steam</a>
              <a className="px-3 py-2 bg-gray-700 rounded-md">PlayStation</a>
              <a className="px-3 py-2 bg-gray-700 rounded-md">Xbox</a>
            </div>
          </div>
        </section>

        {/* CHARACTERS */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-6">Characters</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {characters.map((c) => (
              <div key={c.name} className="bg-black/30 rounded-xl p-4 shadow-lg hover:scale-102 transform transition">
                <div className="rounded-md overflow-hidden h-48 mb-3">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold">{c.name}</h4>
                <p className="text-sm opacity-90 mb-2">{c.title}</p>
                <p className="text-sm opacity-80">{c.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WORLD MAP */}
        <section className="mb-10 bg-gradient-to-b from-black/60 to-transparent rounded-2xl p-6 shadow-md">
          <h3 className="text-2xl font-bold mb-4">World</h3>
          <div className="md:flex gap-6 items-start">
            <div className="md:flex-1">
              <div className="rounded-lg overflow-hidden h-64 bg-black/20 flex items-center justify-center">
            <img
    src="/assets/world_map.jpg"
    alt="World Map"
    className="w-full h-64 md:h-96 lg:h-[520px] object-coverw-full max-w-full h-auto max-h-[520px] object-contain"
  />
</div>6
              <div className="mt-4 grid grid-cols-2 gap-3">
                {regions.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setMapRegion(r)}
                    className="text-left p-3 rounded-md bg-white/3 hover:bg-white/5"
                  >
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-sm opacity-80">{r.desc.substring(0, 50)}...</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="md:w-80 mt-4 md:mt-0">
              <div className="p-4 rounded-md bg-black/40 h-full">
                <h4 className="font-bold mb-2">Region Info</h4>
                {mapRegion ? (
                  <div>
                    <div className="font-semibold">{mapRegion.name}</div>
                    <p className="text-sm opacity-90 mt-2">{mapRegion.desc}</p>
                    <div className="mt-4 text-xs opacity-80">Secrets, quests, and boss lairs await here.</div>
                  </div>
                ) : (
                  <div className="text-sm opacity-80">Select a region to see lore and nearby quests.</div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* MEDIA / TRAILER */}
        <section id="trailer" className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Media</h3>
          <div className="md:flex gap-6">
            <div className="md:flex-1 rounded-lg overflow-hidden shadow-lg">
              {/* Embedded YouTube placeholder - replace VIDEO_ID */}
              <div className="aspect-video bg-black">
                <video 
                 src="/assets/trailer.mp4"
                 controls
                 className="w-full h-full rounded-lg shadow-2xl"
                 poster="/assets/aarav-story.jpg"
                 >
                  Your browser does not support the video tag.
                  </video>

              </div>
            </div>

            
          </div>
        </section>

        {/* NEWS */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">News & Updates</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <NewsCard title="Alpha Demo Live" date="feb 12, 2026" excerpt="Sign up for the alpha demo and test combat systems." />
            <NewsCard title="New Boss Reveal" date="Sep 18, 2026" excerpt="Ravana Reborn revealed — fight in the volcanic arena." />
            <NewsCard title="Soundtrack Preview" date="jun 3, 2025" excerpt="Listen to a 3-track preview from our composer." />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-12 border-t border-white/6 py-8 px-6 md:px-16 lg:px-28">
        <div className="md:flex md:justify-between items-center">
          <div>
            <div className="font-bold">Picacod</div>
            <div className="text-sm opacity-80">© {new Date().getFullYear()} Bow of Destiny. All rights reserved.</div>
          </div>

        
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="p-4 rounded-md bg-white/2">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm opacity-80">{desc}</div>
    </div>
  );
}

function NewsCard({ title, date, excerpt }) {
  return (
    <div className="p-4 rounded-md bg-black/30">
      <div className="text-sm opacity-80">{date}</div>
      <div className="font-semibold mt-2">{title}</div>
      <div className="text-sm opacity-80 mt-2">{excerpt}</div>
    </div>
  );
}
export type Entry = {
  slug: string;
  title: string;
  date: string; // ISO date
  category: string;
  icon: string;
  paragraphs: string[];
};

// Newest first. Add new entries to the TOP of this array.
export const entries: Entry[] = [
  {
    slug: "transformers",
    title: "Transformers",
    date: "2026-09-11",
    category: "AI & reasoning",
    icon: "✨",
    paragraphs: [
      `I recently read this classic test case in AI research: "the trophy didn't fit in the suitcase because it was too big." Simple question, does "it" mean the trophy or the suitcase?`,
      `I got it instantly. Trophy. Obviously, trophies are usually smaller than suitcases, so the thing that's "too big" has to be the trophy. I didn't read left to right and stop, I skipped past "didn't" and "the" without even noticing them, and went straight to weighing two words against each other, trophy versus suitcase, size versus size.`,
      `That instinct, reaching back across a sentence and deciding which words actually matter, is close to what's happening inside every AI model right now, including the one I was using to think this through. It's called attention. Every word in a sentence "looks" at every other word and decides how much to care about it. The model isn't reading in order, it's weighing.`,
      `Here's what stopped me. The model learned to do that by reading a trillion sentences. I did it after reading maybe one. My first reaction was, that's not understanding, that's brute-force memorization at a scale I can't even picture. Real understanding, I thought, comes with lived experience, with sensation, with actually having sympathy for a trophy that doesn't fit in a suitcase, not just scanning for patterns.`,
      `My instinct didn't come from nowhere either. I've seen trophies. I've packed suitcases. I've absorbed thousands of sentences shaped like that one, over an entire lifetime, without ever calling it training. So is my gut instinct actually that different from the model's pattern-matching, or is it the exact same trick, just running on a smaller, slower, more expensive dataset called my life?`,
      `Here's where I'm at.`,
      `The difference between me and the model isn't the pattern-matching itself. It's that I have the ability to reason. That's what lets me pay attention and make sense of information on gut instinct, not just match it. The model can weigh trophy against suitcase because it's seen the pattern before. I can weigh trophy against suitcase, or something it's never seen before, because I can reason my way there even without the pattern.`,
      `Instinct, for me, isn't the end of the process. It's reasoning happening fast enough that it feels automatic.`,
    ],
  },
  {
    slug: "panpsychism",
    title: "Panpsychism",
    date: "2026-09-10",
    category: "Philosophy & identity",
    icon: "✨",
    paragraphs: [
      `There's a theory in philosophy called panpsychism. It says consciousness isn't something that switches on only in complex brains. It says every piece of matter, down to a single electron, carries some flicker of experience. Put enough of those flickers together in the right structure, a brain, a body, and you get a full human "you-ness." Billions of tiny experiences, combining into one.`,
      `I don't fully buy it. Physics only ever describes what matter does, never what it is. Panpsychism fills that gap by saying the "inside" of matter is experience. It sounds clever, but it doesn't really explain anything, it just renames the mystery and moves it one level down. Nobody has a good answer for how trillions of separate tiny experiences would combine into one unified you. That's the theory's real weak point.`,
      `But as a way to think about identity, it's the most useful reframe I've come across in a while. I keep telling people: you've already got what you need, it's all in your head. I say it so often it started to feel like a line I repeat without checking if it's true. Then I ran into this theory and something clicked.`,
      `If every atom in you already carries some flicker of "you-ness," nothing external needs to be added for you to become who you're trying to become. You're not missing an ingredient. You're not waiting for the right conditions. The work isn't acquisition, it's arrangement.`,
      `That idea sat oddly next to something else I believe just as strongly, that you're always growing. You're constantly learning, adapting, becoming someone slightly different than you were yesterday. So if you already have everything, how are you still changing?`,
      `Here's what resolved it for me. The material itself is what's learning. The same atoms that make up "you" are the ones rearranging every time you take in something new, every choice, every thought, every meal, every conversation. You're not built once and left static. You're built from parts you already own, and those parts never stop moving.`,
      `Panpsychism isn't a proof of anything, and I won't defend it as physics. But it's a good mirror. Your "you-ness" was never something you had to go find. It was already distributed through every atom you're made of, waiting to be arranged, and it's still arranging itself right now.`,
    ],
  },
];

export function getEntry(slug: string): Entry | undefined {
  return entries.find((e) => e.slug === slug);
}

export function getAdjacent(slug: string): { prev?: Entry; next?: Entry } {
  const i = entries.findIndex((e) => e.slug === slug);
  if (i === -1) return {};
  // entries[0] is newest. "next" = newer (lower index), "prev" = older (higher index).
  return {
    next: i > 0 ? entries[i - 1] : undefined,
    prev: i < entries.length - 1 ? entries[i + 1] : undefined,
  };
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

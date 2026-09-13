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
    slug: "hofstede-software-of-the-mind",
    title: "What Hofstede Taught Me About the Software Running in All of Us",
    date: "2026-09-12",
    category: "Culture & identity",
    icon: "✨",
    paragraphs: [
      `I've been reading Hofstede's "Cultures and Organizations: Software of the Mind," and the central metaphor stuck with me before I even agreed with it: your mind runs on software installed early, mostly between birth and age twelve, and most of what you call your personality is really just code you didn't choose.`,
      `I buy the timing part. The deepest layer, values, honesty, faith, what counts as right and wrong, gets written early, at home and at school, more than from any wider social circle. But I don't think that code is frozen the way the book implies. You keep patching it. Every diverse group I've worked in, every culture I've actually lived inside instead of just visited, has added a line or two. I don't think the core is fixed so much as it's slow to move, which is a different claim.`,
      `Where the book got me completely is the layer above values, practices. Rituals stay remarkably stable. I still pray to the same deities, still celebrate the same festivals, still practice my values the way I was raised to, even now, thousands of miles from where I learned them. But the outer layer, symbols, words, slang, gestures, that's the part I've watched myself actively trade in and out. My gestures aren't purely mine anymore. Half of them are borrowed, picked up from rooms I sat in, people I worked with, cultures I only touched for a season. I like that about myself. Every group I'm in has something I want to steal, a phrase, a habit, a way of holding a conversation, and I take it on purpose.`,
      `The line that actually moved me: mental programming isn't just what you're taught, it's a continuous process that folds in your genes and everything you learn along the way, forever, not just in the first twelve years. That's the whole argument for cultural intelligence, actually. If the software keeps updating, staying closed off to other ways of living isn't just narrow, it's leaving updates on the table. Every culture I've let in has unlocked something I couldn't have reached staying inside my own.`,
      `Here's where I push back, though. Hofstede treats values as the fixed core, the thing practices orbit around but never touch. I don't buy that as absolute. I think you can take in a genuinely new value, not just a new practice, and let it replace an old one, if you meet the right person or the right place at the right time. Not a rewrite of the whole system, that would be dishonest to how identity actually works, but a real edit to the core, not just the shell around it.`,
      `Software of the mind, sure. I just don't think anyone ships version 1.0 and runs it unpatched for life.`,
      `Source: Hofstede, Hofstede & Minkov, "Cultures and Organizations: Software of the Mind," 3rd ed.`,
    ],
  },
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

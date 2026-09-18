export type Block =
  | { type: "p"; text: string }
  | { type: "section"; label: string }
  | {
      type: "company";
      n: string;
      name: string;
      headline: string;
      founders?: string;
      rows?: { label: string; text: string }[];
      bullets?: string[];
      take?: string;
    }
  | { type: "stat"; big: string; text: string }
  | { type: "one"; title?: string; paras: string[] }
  | { type: "free"; paras: string[]; cta: string }
  | { type: "signoff"; text: string };

export type Issue = {
  slug: string;
  number: string;
  date: string; // ISO
  title: string;
  subtitle: string;
  blocks: Block[];
};

export const LINKEDIN_SUBSCRIBE =
  "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7067249684259495936";
export const SUBSTACK = "https://bhavyainsf.substack.com";

// Newest first.
export const issues: Issue[] = [
  {
    slug: "before-todays-pitch",
    number: "02",
    date: "2026-09-10",
    title: "Before Today's Pitch",
    subtitle: "What HERA, Palette, and OneTriangle built before anyone was watching.",
    blocks: [
      { type: "section", label: "This week's angle" },
      {
        type: "p",
        text: "YC's Demo Day is today. A few hundred companies get ninety seconds each, and by tonight most coverage moves on to whoever raised the most.",
      },
      { type: "p", text: "Here are three founders worth knowing before that happens." },
      { type: "section", label: "The Three" },
      {
        type: "company",
        n: "1",
        name: "HERA",
        headline: "HERA",
        founders: "Meera Patel & Noelle So",
        bullets: [
          "Automates design review for mechanical drawings, catching errors before they hit the shop floor",
          "Met on a factory tour as engineering students. Noelle grew up in an industrial park in the Philippines, Meera's family has worked in factories for generations",
          "$550K raised already. The room believes them faster because they didn't discover this problem, they were raised in it.",
        ],
      },
      {
        type: "company",
        n: "2",
        name: "Palette",
        headline: "Palette",
        founders: "Josephine Lee & Serena Pei",
        bullets: [
          "AI media platform that turns natural language into brand-consistent video and ads",
          "Met at an art program, both went on to MIT computer science.",
          "That founder story is what people repeat to each other after the demo ends, not the product.",
        ],
      },
      {
        type: "company",
        n: "3",
        name: "OneTriangle",
        headline: "OneTriangle",
        founders: "Hannah Chung & Medha Venkatapathy",
        bullets: [
          "Cuts AI inference costs by transferring cache from a small model to a large one",
          "Both MIT CSAIL grads. Already cut costs 20% and time-to-first-token 40% for early customers",
          "With real customers and a real cost number already, this pitch barely needs the stage.",
        ],
      },
      { type: "section", label: "One thing worth your time" },
      {
        type: "stat",
        big: "$65 billion",
        text: "Anthropic raised $65 billion last quarter, close to a third of all global venture funding. Keep that in mind when today's rounds get announced in the low millions.",
      },
      { type: "section", label: "Free this week" },
      {
        type: "free",
        paras: [
          "7 communities every founder building in San Francisco should know, from FoundHer House to Astia to How Women Invest, with who runs each one.",
        ],
        cta: "Reply “COMMUNITY” for the list",
      },
    ],
  },
  {
    slug: "june-capital-f-foundher-at-openai",
    number: "01",
    date: "2026-09-03",
    title: "June, Capital F, FoundHer @OpenAI",
    subtitle: "What access looks like when nobody hands it to you.",
    blocks: [
      { type: "p", text: "Hi," },
      {
        type: "p",
        text: "I'm Bhavya. I built personal brands for B2B AI executives in Dubai, London and San Francisco, and grew my own LinkedIn to 62,000 followers along the way. Now I'm in SF for my master's, writing weekly about women building AI. Building one next.",
      },
      {
        type: "p",
        text: "Here's how this works. Three women-built AI companies in San Francisco every week, and how each one actually got funded, sold, or noticed.",
      },
      { type: "section", label: "This week's angle" },
      {
        type: "p",
        text: "Every story worth reading this month was about the same thing. Not the product, not the model, not the raise. The room. Who is in it, how they got there, and what people do when the invitation never comes.",
      },
      { type: "p", text: "None of these three waited for one." },
      { type: "section", label: "The Three" },
      {
        type: "company",
        n: "1",
        name: "June",
        headline: "June raised $20M before it had a product",
        rows: [
          {
            label: "Where they started",
            text: "A second-time founder with one Salesforce exit behind her already. Efrat Rapoport founded Bonobo AI in 2017, then sold it to Salesforce in 2019, and ran its Israel R&D team until leaving in January 2024.",
          },
          {
            label: "What they did",
            text: "Came out of stealth on 3 August with a $20M pre-seed led by Marc Benioff's Time Ventures, with personal checks from Michael Dell, Aaron Levie and George Kurtz. No deck, by her own account.",
          },
          {
            label: "What it's for",
            text: "Deploying enterprise AI properly, not just buying it, the least glamorous, most expensive part everyone skips.",
          },
        ],
        take: "The sequence behind this isn't public. Nobody's said how she reconnected with Benioff, or how long it took. What is real: a completed exit buys trust a track record alone doesn't, and it shows up in meetings years later. First-time founders don't get that shortcut, and pretending otherwise helps nobody. The exit bought her the meetings.",
      },
      {
        type: "company",
        n: "2",
        name: "Capital F",
        headline: "Capital F closed a $17M fund, and the marketing was the fundraise",
        rows: [
          {
            label: "Where they started",
            text: "Two first-time fund managers, Margaret Coblentz and Dawn Dobras, without the track record that normally convinces big institutions like university endowments and pension funds to back a new fund.",
          },
          {
            label: "What they did",
            text: "Closed $17M on 26 August with roughly 80 to 85% of the capital coming from women, recruited through small in-person salons for women curious about investing.",
          },
          {
            label: "What it's for",
            text: "A thesis covering women's health, commerce and AI tools, funded by a class of investor they had to create first.",
          },
        ],
        take: "This is the smartest thing in this issue and it is barely a tech story. The salons were not marketing that supported the raise. The salons were the raise. If your buyer does not exist yet, you do not run a campaign at them. You convene them, and the room becomes the pipeline. I have not seen a cleaner example of that this year.",
      },
      {
        type: "company",
        n: "3",
        name: "FoundHer",
        headline: "The FoundHer Summit ran inside OpenAI's building",
        rows: [
          {
            label: "Where they started",
            text: "FoundHer House, a community for women founders rather than an institution with a venue of its own.",
          },
          {
            label: "What they did",
            text: "Put on a summit at OpenAI's San Francisco headquarters on 21 August, with Lucy Guo (co-founded Scale AI, now runs Passes), Sarah Sachs (Head of AI, Notion) and Lucia Tian (Head of Advanced Energy, Google).",
          },
          {
            label: "What it's for",
            text: "Putting women founders in front of each other, in the building where the thing they are all building around gets made.",
          },
        ],
        take: "Three speakers, three different routes in. Guo built her own company. Sachs runs AI inside one that already has customers. Tian runs advanced energy at Google, the least visible and the closest to AI's real bottleneck. Almost every conversation about women in AI describes only the first route. This lineup shows the other two.",
      },
      { type: "section", label: "One thing worth your time" },
      {
        type: "one",
        title: "Podcast: Silicon Valley Girl, by Marina Mogilko",
        paras: [
          "I have been watching Marina since a video about her plan to make a million dollars, 5 years ago. I was in India, nowhere near any of this, and it was the first time I saw someone lay out the actual numbers instead of just the outcome.",
          "The interviews are the draw. Reid Hoffman, Mustafa Suleyman, Aravind Srinivas. But the solo episodes are the ones I keep, because that is where she stops asking and starts arguing, and you find out what she actually thinks.",
          "It is a business and career show rather than a technical one, which is worth knowing before you start.",
          "Worth it if you are outside the AI industry and trying to understand how people inside it make decisions.",
        ],
      },
      { type: "section", label: "Free this week" },
      {
        type: "free",
        paras: [
          "Before I wrote a word of this, I read every women-in-AI newsletter I could find. Fourteen of them, with links, sorted by whether they are actually worth your inbox.",
          "It includes the ones I now compete with. That seemed like the honest way to do it.",
        ],
        cta: "Comment “LIST” and I will send it over",
      },
      { type: "signoff", text: "See you next week." },
    ],
  },
];

export function getIssue(slug: string) {
  return issues.find((i) => i.slug === slug);
}

export function getAdjacentIssue(slug: string) {
  const i = issues.findIndex((x) => x.slug === slug);
  return { newer: i > 0 ? issues[i - 1] : null, older: i < issues.length - 1 ? issues[i + 1] : null };
}

export function formatIssueDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

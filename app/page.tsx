import Link from "next/link";
import Header from "@/components/Header";
import { entries, formatDate } from "@/lib/entries";

export default function Home() {
  const [latest, ...rest] = entries;

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-12 sm:px-10 sm:py-16">
        <p className="mb-10 text-sm text-neutral-400">
          Well, that&rsquo;s interesting.
        </p>

        <article>
          <p className="text-xs uppercase tracking-wide text-neutral-400">
            {formatDate(latest.date)} · {latest.category}
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-neutral-900 sm:text-3xl">
            {latest.title}
          </h1>
          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-neutral-700">
            {latest.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>

        {rest.length > 0 && (
          <section className="mt-16 border-t border-neutral-100 pt-8">
            <h2 className="mb-4 text-sm font-medium text-neutral-400">
              Learning notes
            </h2>
            <ul className="space-y-3">
              {rest.map((e) => (
                <li key={e.slug}>
                  <Link
                    href={`/entry/${e.slug}`}
                    className="flex items-center justify-between text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    <span>
                      {e.title} {e.icon}
                    </span>
                    <span className="text-neutral-400">
                      {formatDate(e.date)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </>
  );
}

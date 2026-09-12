import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { entries, getAdjacent, getEntry, formatDate } from "@/lib/entries";

export function generateStaticParams() {
  return entries.map((e) => ({ slug: e.slug }));
}

export default async function EntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getEntry(slug);

  if (!entry) notFound();

  const { prev, next } = getAdjacent(slug);

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-12 sm:px-10 sm:py-16">
        <article>
          <p className="text-xs uppercase tracking-wide text-neutral-400">
            {formatDate(entry.date)} · {entry.category}
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-neutral-900 sm:text-3xl">
            {entry.title}
          </h1>
          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-neutral-700">
            {entry.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>

        <nav className="mt-16 flex items-center justify-between gap-4 border-t border-neutral-100 pt-6 text-sm">
          {prev ? (
            <Link
              href={`/entry/${prev.slug}`}
              className="group flex flex-col text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <span className="text-xs">&larr; Previous</span>
              <span className="text-neutral-600 group-hover:text-neutral-900">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/entry/${next.slug}`}
              className="group flex flex-col items-end text-right text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <span className="text-xs">Next &rarr;</span>
              <span className="text-neutral-600 group-hover:text-neutral-900">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>
    </>
  );
}

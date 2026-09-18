import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { entries, getAdjacent, getEntry, formatDate } from "@/lib/entries";

export function generateStaticParams() {
  return entries.map((e) => ({ slug: e.slug }));
}

export default async function EntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();
  const { prev, next } = getAdjacent(slug);

  return (
    <>
      <Header />
      <main className="notes-main">
        <article className="notes-frame" style={{ marginTop: 0 }}>
          <p className="notes-eb">
            {formatDate(entry.date)} · {entry.category}
          </p>
          <h1 className="notes-title">{entry.title}</h1>
          <div className="notes-body" style={{ marginTop: 18 }}>
            {entry.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>

        <nav className="notes-nav">
          {prev ? (
            <Link href={`/entry/${prev.slug}`}>
              &larr; Previous<span>{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/entry/${next.slug}`} style={{ textAlign: "right" }}>
              Next &rarr;<span>{next.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>
      <div className="stripe-band" />
      <p className="site-foot">Bhavya Goel · San Francisco</p>
    </>
  );
}

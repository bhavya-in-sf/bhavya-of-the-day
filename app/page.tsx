import Link from "next/link";
import Header from "@/components/Header";
import { entries, formatDate } from "@/lib/entries";

export default function Home() {
  const [latest, ...rest] = entries;

  return (
    <>
      <Header />
      <main className="notes-main">
        <p className="notes-eb">Well, that&rsquo;s interesting.</p>

        <article className="notes-frame">
          <p className="notes-eb">
            {formatDate(latest.date)} · {latest.category}
          </p>
          <h1 className="notes-title">{latest.title}</h1>
          <div className="notes-body" style={{ marginTop: 18 }}>
            {latest.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>

        <Link href="/newsletter" className="teaser">
          <span className="teaser-eb">Newsletter · Thursdays</span>
          <span className="teaser-sf" style={{ display: "block" }}>SF</span>
          <span className="teaser-nm" style={{ display: "block" }}>SHORTLISTED</span>
          <span className="teaser-sub" style={{ display: "block" }}>
            Three women-built AI companies in San Francisco, every week.
          </span>
        </Link>

        {rest.length > 0 && (
          <section className="notes-list">
            <p className="notes-eb">Learning notes</p>
            <ul>
              {rest.map((e) => (
                <li key={e.slug}>
                  <Link href={`/entry/${e.slug}`} className="notes-row">
                    <span className="notes-row-title">{e.title}</span>
                    <span className="notes-row-date">{formatDate(e.date)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <div className="stripe-band" />
      <p className="site-foot">Bhavya Goel · San Francisco</p>
    </>
  );
}

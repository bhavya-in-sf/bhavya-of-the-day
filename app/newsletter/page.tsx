import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { Strip } from "@/components/IssueEmail";
import { issues, formatIssueDate, LINKEDIN_SUBSCRIBE, SUBSTACK } from "@/lib/newsletter";

export const metadata: Metadata = {
  title: "SF Shortlisted",
  description:
    "Three women-built AI companies in San Francisco, every week, and how they actually got funded, sold, or noticed.",
};

export default function NewsletterIndex() {
  return (
    <>
      <Header />
      <main className="sfsl-page">
        <Strip />
        <div className="sfsl-stripes sfsl-hero-wrap">
          <div className="sfsl-head">
            <div className="sfsl-eb">Weekly · Thursdays · San Francisco</div>
            <div className="sfsl-sf sfsl-sf-lg">SF</div>
            <div className="sfsl-nm sfsl-nm-lg">SHORTLISTED</div>
            <p className="sfsl-promise">
              Three women-built AI companies in San Francisco, every week, and
              how they actually got funded, sold, or noticed.
            </p>
            <div className="sfsl-ctas">
              <a className="sfsl-btn" href={LINKEDIN_SUBSCRIBE} target="_blank" rel="noreferrer">
                Subscribe on LinkedIn
              </a>
              <a className="sfsl-btn sfsl-btn-o" href={SUBSTACK} target="_blank" rel="noreferrer">
                Or by email
              </a>
            </div>
          </div>
        </div>

        <section className="sfsl-list">
          <div className="sfsl-l">Issues</div>
          <ul>
            {issues.map((i) => (
              <li key={i.slug}>
                <Link href={`/newsletter/${i.slug}`} className="sfsl-row">
                  <span className="sfsl-row-kind">Issue {i.number} · {formatIssueDate(i.date)}</span>
                  <span className="sfsl-row-title">{i.title}</span>
                  <span className="sfsl-row-sub">{i.subtitle}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <Strip />
      </main>
    </>
  );
}

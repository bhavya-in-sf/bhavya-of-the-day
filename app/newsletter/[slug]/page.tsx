import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import IssueEmail from "@/components/IssueEmail";
import { issues, getIssue, getAdjacentIssue } from "@/lib/newsletter";

export function generateStaticParams() {
  return issues.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = getIssue(slug);
  return {
    title: issue ? `${issue.title} · SF Shortlisted` : "SF Shortlisted",
    description: issue?.subtitle,
  };
}

export default async function IssuePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = getIssue(slug);
  if (!issue) notFound();
  const { newer, older } = getAdjacentIssue(slug);

  return (
    <>
      <Header />
      <main className="sfsl-page sfsl-issue-page">
        <p className="sfsl-back">
          <Link href="/newsletter">&larr; All issues</Link>
        </p>
        <IssueEmail issue={issue} />
        <nav className="sfsl-nav">
          {older ? <Link href={`/newsletter/${older.slug}`}>&larr; {older.title}</Link> : <span />}
          {newer ? <Link href={`/newsletter/${newer.slug}`}>{newer.title} &rarr;</Link> : <span />}
        </nav>
      </main>
    </>
  );
}

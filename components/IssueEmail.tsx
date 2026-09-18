import type { Issue } from "@/lib/newsletter";
import { formatIssueDate, LINKEDIN_SUBSCRIBE } from "@/lib/newsletter";

export function Strip({ blush, text }: { blush?: boolean; text?: string }) {
  const t = Array(10).fill((text ?? "SF Shortlisted").toUpperCase()).join("  ·  ");
  return <div className={blush ? "sfsl-strip sfsl-strip-b" : "sfsl-strip"}>{t}</div>;
}

export default function IssueEmail({ issue }: { issue: Issue }) {
  return (
    <div className="sfsl-email">
      <Strip />
      <div className="sfsl-stripes">
        <div className="sfsl-head">
          <div className="sfsl-eb">{formatIssueDate(issue.date)} · San Francisco</div>
          <div className="sfsl-sf">SF</div>
          <div className="sfsl-nm">SHORTLISTED</div>
          <div className="sfsl-kicker">Issue {issue.number}</div>
        </div>
      </div>
      <div className="sfsl-body">
        <h1 className="sfsl-title">{issue.title}</h1>
        <p className="sfsl-subtitle">{issue.subtitle}</p>
        {issue.blocks.map((b, i) => {
          switch (b.type) {
            case "p":
              return <p key={i} className="sfsl-p">{b.text}</p>;
            case "section":
              return <Strip key={i} blush text={b.label} />;
            case "company":
              return (
                <div key={i} className="sfsl-co">
                  <span className="sfsl-n">{b.n}</span>
                  <h3>{b.headline}</h3>
                  {b.founders && <div className="sfsl-f">{b.founders}</div>}
                  {b.rows && (
                    <dl className="sfsl-rows">
                      {b.rows.map((r, j) => (
                        <div key={j}>
                          <dt>{r.label}</dt>
                          <dd>{r.text}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  {b.bullets && (
                    <ul>
                      {b.bullets.map((t, j) => (
                        <li key={j}>{t}</li>
                      ))}
                    </ul>
                  )}
                  {b.take && <p className="sfsl-take">{b.take}</p>}
                </div>
              );
            case "stat":
              return (
                <div key={i} className="sfsl-one">
                  <div className="sfsl-big">{b.big}</div>
                  {b.text}
                </div>
              );
            case "one":
              return (
                <div key={i} className="sfsl-one">
                  {b.title && <div className="sfsl-one-title">{b.title}</div>}
                  {b.paras.map((t, j) => (
                    <p key={j} className="sfsl-p">{t}</p>
                  ))}
                </div>
              );
            case "free":
              return (
                <div key={i} className="sfsl-free">
                  {b.paras.map((t, j) => (
                    <p key={j} className="sfsl-p">{t}</p>
                  ))}
                  <span className="sfsl-btn">{b.cta}</span>
                </div>
              );
            case "signoff":
              return (
                <p key={i} className="sfsl-signoff">
                  {b.text}
                  <br />
                  Bhavya G
                </p>
              );
          }
        })}
      </div>
      <div className="sfsl-foot">
        Three women-built AI companies in San Francisco, every week.
        <br />
        <a className="sfsl-btn" href={LINKEDIN_SUBSCRIBE} target="_blank" rel="noreferrer">
          Subscribe on LinkedIn
        </a>
      </div>
      <Strip />
    </div>
  );
}

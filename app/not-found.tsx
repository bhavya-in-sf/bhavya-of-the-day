import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="notes-main">
        <div className="notes-frame" style={{ marginTop: 0, textAlign: "center" }}>
          <p className="notes-title">Not on the shortlist.</p>
          <p className="notes-eb" style={{ marginTop: 12 }}>
            <Link href="/" style={{ color: "var(--forest)" }}>Back home</Link>
          </p>
        </div>
      </main>
    </>
  );
}

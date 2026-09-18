import Link from "next/link";
import SearchModal from "./SearchModal";

export default function Header() {
  return (
    <>
      <div className="marquee">
        {Array(12).fill("THINGS I'M LEARNING  ·  SF SHORTLISTED").join("  ·  ")}
      </div>
      <header className="site-header">
        <Link href="/" className="site-brand">
          bhavya<span>of the day</span>
        </Link>
        <nav className="site-nav">
          <Link href="/">Notes</Link>
          <Link href="/newsletter">Newsletter</Link>
          <SearchModal />
        </nav>
      </header>
    </>
  );
}

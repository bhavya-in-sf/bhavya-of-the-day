import Link from "next/link";
import SearchModal from "./SearchModal";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-neutral-100 px-6 py-4 sm:px-10">
      <Link
        href="/"
        className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
      >
        Home
      </Link>
      <SearchModal />
    </header>
  );
}

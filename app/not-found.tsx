import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-start justify-center px-6 py-16 sm:px-10">
        <p className="text-sm text-neutral-400">That entry doesn&rsquo;t exist.</p>
        <Link
          href="/"
          className="mt-3 text-sm text-neutral-600 underline hover:text-neutral-900"
        >
          Back home
        </Link>
      </main>
    </>
  );
}

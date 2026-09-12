"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { entries, formatDate } from "@/lib/entries";

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q) ||
        e.paragraphs.some((p) => p.toLowerCase().includes(q))
    );
  }, [query]);

  function go(slug: string) {
    setOpen(false);
    router.push(`/entry/${slug}`);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
        aria-label="Search entries"
      >
        Find
        <kbd className="rounded border border-neutral-200 px-1.5 py-0.5 text-xs text-neutral-400">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/20 px-4 pt-24"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-neutral-200 bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search entries..."
              className="w-full border-b border-neutral-100 px-4 py-3 text-sm outline-none placeholder:text-neutral-400"
            />
            <ul className="max-h-80 overflow-y-auto py-2">
              {results.length === 0 && (
                <li className="px-4 py-3 text-sm text-neutral-400">
                  No entries found.
                </li>
              )}
              {results.map((e) => (
                <li key={e.slug}>
                  <button
                    onClick={() => go(e.slug)}
                    className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm hover:bg-neutral-50"
                  >
                    <span className="flex items-center gap-2">
                      <span>{e.icon}</span>
                      <span>{e.title}</span>
                    </span>
                    <span className="text-xs text-neutral-400">
                      {formatDate(e.date)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

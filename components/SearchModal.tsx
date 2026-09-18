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
      <button onClick={() => setOpen(true)} aria-label="Search entries" style={{ background: "none", border: 0, cursor: "pointer" }}>
        Find<kbd className="kbd">⌘K</kbd>
      </button>

      {open && (
        <div
          className="search-overlay"
          onClick={() => setOpen(false)}
        >
          <div
            className="search-box"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search entries..."
            />
            <ul>
              {results.length === 0 && (
                <li className="search-empty">No entries found.</li>
              )}
              {results.map((e) => (
                <li key={e.slug}>
                  <button onClick={() => go(e.slug)}>
                    <span className="t">{e.title}</span>
                    <span className="d">{formatDate(e.date)}</span>
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

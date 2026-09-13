"use client";

import { useEffect, useRef } from "react";

/**
 * The "(bhavya)" install screen: morphs into "bhavya :)" once, then
 * dissolves into the blog. Shows once per full page load (lives in the
 * root layout, so it never remounts on client-side nav between entries).
 */
export default function SmileLoader() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const open = root.querySelector<HTMLElement>(".open")!;
    const colon = root.querySelector<HTMLElement>(".colon")!;
    const close = root.querySelector<HTMLElement>(".close")!;
    const w = root.querySelector<HTMLElement>(".w")!;

    let openW = 0;
    let colonW = 0;

    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    function measure() {
      openW = open.getBoundingClientRect().width;
      colonW = colon.getBoundingClientRect().width;
    }

    // p = 0 -> "(bhavya)"   p = 1 -> "bhavya :)"
    function setProgress(p: number) {
      const e = ease(Math.max(0, Math.min(1, p)));
      open.style.opacity = (1 - e).toFixed(3);
      open.style.transform = `translateX(${(-openW * 0.6 * e).toFixed(2)}px)`;
      colon.style.opacity = e.toFixed(3);
      colon.style.transform = `translateX(${(-colonW * (1 - e)).toFixed(2)}px)`;
      close.style.transform = `translateX(${(-colonW * (1 - e)).toFixed(2)}px)`;
      w.style.transform = `translateX(${(
        (colonW * (1 - e) - openW * e) *
        0.5
      ).toFixed(2)}px)`;
    }

    // timeline (ms): hold plain, morph to smile, hold smile, morph back
    const HOLD = 1300;
    const MORPH = 520;
    const CYCLE = (HOLD + MORPH) * 2;

    function progressAt(ms: number) {
      let t = ms % CYCLE;
      if (t < HOLD) return 0;
      t -= HOLD;
      if (t < MORPH) return t / MORPH;
      t -= MORPH;
      if (t < HOLD) return 1;
      t -= HOLD;
      return 1 - t / MORPH;
    }

    let start: number | null = null;
    let hover = false;
    let raf = 0;

    function frame(now: number) {
      if (start === null) start = now;
      setProgress(hover ? 1 : progressAt(now - (start as number)));
      raf = requestAnimationFrame(frame);
    }

    function onEnter() {
      hover = true;
    }
    function onLeave() {
      hover = false;
      start = null;
    }
    root.addEventListener("mouseenter", onEnter);
    root.addEventListener("mouseleave", onLeave);

    let dismissed = false;
    function dismiss() {
      if (dismissed) return;
      dismissed = true;
      cancelAnimationFrame(raf);
      root!.classList.add("out");
      setTimeout(() => {
        root!.style.display = "none";
      }, 500);
    }

    document.fonts.ready.then(() => {
      measure();
      setProgress(0);
      raf = requestAnimationFrame(frame);
    });

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    // min 2.2s so the smile shows once, same as the standalone loader
    const t0 = Date.now();
    function scheduleDismiss() {
      const wait = Math.max(0, 2200 - (Date.now() - t0));
      setTimeout(dismiss, wait);
    }
    if (document.readyState === "complete") {
      scheduleDismiss();
    } else {
      window.addEventListener("load", scheduleDismiss, { once: true });
    }

    return () => {
      cancelAnimationFrame(raf);
      root.removeEventListener("mouseenter", onEnter);
      root.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div id="smile-loader" ref={rootRef} aria-label="bhavya">
      <style jsx>{`
        #smile-loader {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-poppins), "Helvetica Neue", Arial, sans-serif;
          font-weight: 600;
          font-size: clamp(40px, 6vw, 96px);
          color: #111111;
          letter-spacing: -0.01em;
          opacity: 1;
          transition: opacity 0.45s ease;
          -webkit-font-smoothing: antialiased;
          cursor: default;
          user-select: none;
        }
        #smile-loader.out {
          opacity: 0;
          pointer-events: none;
        }
        .w {
          display: inline-flex;
          align-items: baseline;
          will-change: transform;
        }
        .w > span {
          display: inline-block;
          will-change: transform, opacity;
        }
        .open {
          color: #8a8a8a;
        }
        .colon {
          opacity: 0;
        }
      `}</style>
      <div className="w">
        <span className="open">(</span>
        <span className="name">bhavya</span>
        <span className="colon">&nbsp;:</span>
        <span className="close">)</span>
      </div>
    </div>
  );
}

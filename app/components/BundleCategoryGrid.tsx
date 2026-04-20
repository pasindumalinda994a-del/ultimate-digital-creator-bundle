"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { BundleCategory } from "../bundle-data";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

const glassCardFrame =
  "rounded-2xl border border-white/10 bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/10 hover:-translate-y-0.5 overflow-hidden";

const glassCardInner = "flex flex-col gap-4 p-5 sm:p-6";

const glassButton =
  "inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-md transition duration-300 hover:border-cyan-300/40 hover:bg-white/15 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)] active:translate-y-0";

type BundleCategoryGridProps = {
  categories: BundleCategoryWithHero[];
};

type BundleCategoryWithHero = BundleCategory & {
  heroSrc?: string;
};

function linkCountFor(cat: BundleCategory) {
  return cat.sections.reduce((n, s) => n + s.links.length, 0);
}

export function BundleCategoryGrid({
  categories,
}: BundleCategoryGridProps) {
  const [selected, setSelected] = useState<BundleCategoryWithHero | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const syncAfterNativeClose = () => {
      setSelected(null);
      triggerRef.current?.focus();
      triggerRef.current = null;
    };
    d.addEventListener("close", syncAfterNativeClose);
    return () => d.removeEventListener("close", syncAfterNativeClose);
  }, []);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d || !selected) return;
    if (!d.open) d.showModal();
  }, [selected]);

  function closeDialog() {
    dialogRef.current?.close();
  }

  function openDetails(cat: BundleCategoryWithHero, trigger: HTMLElement | null) {
    triggerRef.current = trigger;
    setSelected(cat);
  }

  function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) closeDialog();
  }

  const selectedHeroSrc = selected?.heroSrc;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {categories.map((cat) => {
          const heroSrc = cat.heroSrc;
          return (
            <article
              key={cat.id}
              className={`${glassCardFrame} flex flex-col`}
            >
              <div className="relative aspect-[16/10] w-full shrink-0 bg-slate-900/80">
                {heroSrc ? (
                  <Image
                    src={heroSrc}
                    alt={`${cat.title} — bundle preview`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={cat.id === "reels"}
                  />
                ) : null}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent"
                  aria-hidden
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cyan-500/10 to-transparent mix-blend-screen" aria-hidden />
              </div>
              <div className={glassCardInner}>
                <div className="flex flex-wrap items-center gap-2">
                  <Heading
                    as="h3"
                    className="text-lg font-semibold tracking-tight text-white"
                  >
                    {cat.title}
                  </Heading>
                  <span className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-cyan-200/90">
                    {linkCountFor(cat)} links
                  </span>
                </div>
              <Paragraph className="text-sm leading-relaxed text-slate-300">
                {cat.description}
              </Paragraph>
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    className={`${glassButton} w-full sm:w-auto`}
                    onClick={(e) => openDetails(cat, e.currentTarget)}
                  >
                    View contents
                  </button>
                  <a
                    href={cat.folderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${glassButton} w-full text-center sm:w-auto`}
                  >
                    Open Folder
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        className="bundle-sheet m-auto w-[min(32rem,calc(100%-2rem))] max-h-[min(90dvh,720px)] overflow-hidden rounded-2xl border border-white/15 bg-slate-950/90 p-0 text-slate-100 shadow-2xl backdrop-blur-xl"
        onMouseDown={handleBackdropClick}
      >
        {selected ? (
          <div className="flex max-h-[min(90dvh,720px)] flex-col">
            <div className="relative shrink-0">
              <div className="relative aspect-[2.4/1] min-h-[7.5rem] w-full max-h-36 bg-slate-900 sm:min-h-[8.5rem] sm:max-h-40">
                {selectedHeroSrc ? (
                  <Image
                    src={selectedHeroSrc}
                    alt={`${selected.title} — bundle preview`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 32rem"
                  />
                ) : null}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-slate-950/25"
                  aria-hidden
                />
              </div>
              <button
                type="button"
                className="absolute right-3 top-3 rounded-lg border border-white/20 bg-slate-950/70 px-3 py-1.5 text-sm text-white shadow-lg backdrop-blur-md transition hover:bg-slate-900/90"
                onClick={() => closeDialog()}
              >
                Close
              </button>
            </div>
            <div className="flex items-end justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div className="min-w-0 pr-2">
                <Heading as="h2" className="text-lg font-semibold text-white">
                  {selected.title}
                </Heading>
                <Paragraph className="mt-1 text-sm text-slate-400">
                  Folders & links
                </Paragraph>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-3 py-3 sm:px-5">
              {selected.sections.map((section, sectionIndex) => (
                <div
                  key={`${selected.id}-section-${sectionIndex}`}
                  className={sectionIndex > 0 ? "mt-6 border-t border-white/5 pt-6" : ""}
                >
                  {section.title?.trim() ? (
                    <Heading
                      as="h3"
                      className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-200/85"
                    >
                      {section.title}
                    </Heading>
                  ) : null}
                  <ul className="space-y-0">
                    {section.links.map((item) => (
                      <li
                        key={`${selected.id}-${sectionIndex}-${item.label}-${item.url}`}
                        className="flex flex-col gap-2 border-b border-white/5 py-3 last:border-0 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <span className="text-sm font-medium text-slate-200">
                          {item.label}
                        </span>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${glassButton} shrink-0 px-3 py-2 text-xs`}
                        >
                          Open link
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}

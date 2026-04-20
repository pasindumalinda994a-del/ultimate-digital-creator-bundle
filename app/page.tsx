import { BundleCategoryGrid } from "./components/BundleCategoryGrid";
import { Heading } from "./components/Heading";
import { Paragraph } from "./components/Paragraph";

const glassButtonPrimary =
  "cta-glow inline-flex items-center justify-center rounded-2xl border border-cyan-300/35 bg-white/10 px-8 py-3.5 text-base font-semibold text-white shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-white/15 hover:shadow-[0_0_32px_rgba(34,211,238,0.35)] active:translate-y-0";

const glassPanel =
  "rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/10";

const features = [
  {
    title: "Instant email access",
    description: "Receive your links right after checkout — no waiting.",
    icon: (
      <svg className="h-8 w-8 text-cyan-300/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Lifetime updates",
    description: "New drops and refreshes included for the life of the product.",
    icon: (
      <svg className="h-8 w-8 text-cyan-300/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: "Beginner-friendly",
    description: "Organized folders so you can start fast, even if you are new.",
    icon: (
      <svg className="h-8 w-8 text-cyan-300/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 0-6-2.292c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Huge resource library",
    description: "Thousands of assets across video, design, fonts, courses, and more.",
    icon: (
      <svg className="h-8 w-8 text-cyan-300/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="relative isolate min-h-dvh overflow-x-hidden bg-slate-950 font-sans text-slate-100">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(56,189,248,0.22),transparent_55%),radial-gradient(ellipse_80%_50%_at_100%_50%,rgba(99,102,241,0.12),transparent),linear-gradient(to_bottom,#020617,#0f172a_45%,#0c1929)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" aria-hidden />

      <main className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pt-20">
        <header className="flex flex-col items-center text-center">
          <Paragraph className="mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-widest text-cyan-200/90 backdrop-blur-md">
            Digital creator bundle
          </Paragraph>
          <Heading
            as="h1"
            className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]"
          >
            Ultimate Digital Creator Bundle
          </Heading>
          <Paragraph className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-slate-300 sm:text-xl">
            All-in-one resource pack for creators, designers, and entrepreneurs
          </Paragraph>
          <div className="mt-10">
            <a href="#categories" className={glassButtonPrimary}>
              Get Instant Access
            </a>
          </div>
        </header>

        <section
          id="categories"
          className="mt-20 scroll-mt-24 sm:mt-24"
          aria-labelledby="categories-heading"
        >
          <div className="mb-10 text-center">
            <Heading
              as="h2"
              id="categories-heading"
              className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Bundle categories
            </Heading>
            <Paragraph className="mx-auto mt-3 max-w-2xl text-slate-400">
              Explore curated Google Drive folders. Open a category or jump straight to the main folder.
            </Paragraph>
          </div>
          <BundleCategoryGrid />
        </section>

        <section
          className="mt-20 sm:mt-24"
          aria-labelledby="features-heading"
        >
          <Heading as="h2" id="features-heading" className="sr-only">
            Features
          </Heading>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className={`${glassPanel} flex flex-col gap-4`}
              >
                {f.icon}
                <div>
                  <Heading as="h3" className="text-base font-semibold text-white">
                    {f.title}
                  </Heading>
                  <Paragraph className="mt-2 text-sm leading-relaxed text-slate-400">
                    {f.description}
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="cta"
          className="mt-20 scroll-mt-24 sm:mt-24"
          aria-labelledby="cta-heading"
        >
          <div
            className={`${glassPanel} flex flex-col items-center gap-6 px-6 py-12 text-center sm:px-10 sm:py-14`}
          >
            <Heading
              as="h2"
              id="cta-heading"
              className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Get Full Access Now
            </Heading>
            <Paragraph className="max-w-md text-slate-400">
              Join creators who ship faster with templates, assets, and learning in one place.
            </Paragraph>
            <a href="#categories" className={glassButtonPrimary}>
              Unlock Bundle
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-8 text-center text-sm text-slate-500 backdrop-blur-md">
        <Paragraph>© {new Date().getFullYear()} Ultimate Digital Creator Bundle. All rights reserved.</Paragraph>
        <Paragraph className="mt-2">
          <a
            href="mailto:support@example.com"
            className="text-slate-400 underline decoration-white/20 underline-offset-4 transition hover:text-cyan-200/90"
          >
            support@example.com
          </a>
        </Paragraph>
      </footer>
    </div>
  );
}

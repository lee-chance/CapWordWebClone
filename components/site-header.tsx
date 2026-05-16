import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--ring)] bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--accent)] text-sm font-extrabold text-white shadow-[0_10px_30px_-12px_rgba(255,92,77,0.65)]"
            aria-hidden
          >
            CW
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-tight">CapWord 웹 클론</p>
            <p className="text-[11px] text-[var(--muted)]">학습용 비공식 데모</p>
          </div>
        </Link>
        <nav className="flex items-center gap-2 text-sm font-semibold">
          <Link
            href="/demo"
            className="rounded-full bg-[var(--ink)] px-4 py-2 text-white shadow-sm transition hover:bg-[color-mix(in_oklab,var(--ink)_88%,white)]"
          >
            데모 체험
          </Link>
        </nav>
      </div>
    </header>
  );
}

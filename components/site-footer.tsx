export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--ring)] bg-[color-mix(in_oklab,var(--card)_70%,var(--bg))]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="max-w-xl leading-relaxed">
          이 사이트는 교육용 클론 데모입니다. 상표·카피·UI는 원작{" "}
          <a
            className="font-semibold text-[var(--ink)] underline-offset-4 hover:underline"
            href="https://capwords.app/"
            target="_blank"
            rel="noreferrer"
          >
            CapWords
          </a>
          와 무관하며, 카메라 인식·앱스토어 배포본과 기능이 다릅니다.
        </p>
        <p className="font-mono text-xs text-[color-mix(in_oklab,var(--muted)_75%,var(--ink))]">
          오픈소스: github.com/lee-chance/CapWordWebClone
        </p>
      </div>
    </footer>
  );
}

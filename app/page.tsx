import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[var(--ring)] bg-[var(--card)] px-3 py-1 text-xs font-bold text-[var(--muted)] shadow-sm">
                웹에서 바로 보는 클론 데모
                <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                브라우저만 있으면 OK
              </p>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[var(--ink)] sm:text-5xl">
                익숙한 사물에서
                <span className="block text-[var(--accent)]">새 단어가 생긴다</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                CapWords가 들려준 컨셉—주변을 스캔해 단어 카드로 만든다—를 웹 환경에 맞춘{" "}
                <strong className="font-semibold text-[var(--ink)]">
                  학습용 비공식 구현
                </strong>
                입니다. 카메라 파이프라인 대신, 지금은 플래시카드 데모로 학습 흐름을 눈으로
                확인할 수 있게 했어요.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--accent)] px-6 py-3 text-base font-extrabold text-white shadow-[0_18px_45px_-22px_rgba(255,92,77,0.85)] transition hover:brightness-105"
                >
                  데모 플래시카드 열기
                </Link>
                <a
                  href="https://github.com/lee-chance/CapWordWebClone"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-[var(--ring)] bg-[var(--card)] px-6 py-3 text-base font-bold text-[var(--ink)] transition hover:bg-[color-mix(in_oklab,var(--card)_88%,var(--accent-soft))]"
                >
                  소스 코드 보기
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "장면 기반",
                    body: "어디서 마주친 단어인지 맥락을 남겨 기억을 돕습니다.",
                  },
                  {
                    title: "카드 복습",
                    body: "앞·뒤를 번갈아 보며 발음·의미를 빠르게 확인합니다.",
                  },
                  {
                    title: "웹에서 즉시",
                    body: "배포 파이프라인만 연결하면 링크 하나로 공유할 수 있어요.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-[var(--ring)] bg-[color-mix(in_oklab,var(--card)_78%,transparent)] p-5 shadow-sm"
                  >
                    <p className="text-sm font-extrabold text-[var(--ink)]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-br from-[rgba(255,92,77,0.18)] via-transparent to-[rgba(13,148,136,0.18)] blur-2xl" />
              <div className="rounded-[32px] border border-[var(--ring)] bg-[var(--card)] p-7 shadow-[0_30px_80px_-45px_rgba(20,18,26,0.45)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[var(--muted)]">오늘의 스티커</p>
                    <p className="mt-1 text-2xl font-extrabold">succulent</p>
                  </div>
                  <span className="text-5xl">🪴</span>
                </div>
                <div className="mt-8 rounded-3xl bg-[var(--accent-soft)] p-5">
                  <p className="text-sm font-semibold text-[var(--ink)]">예문</p>
                  <p className="mt-2 text-base leading-relaxed text-[color-mix(in_oklab,var(--muted)_35%,var(--ink))]">
                    “I watered the <span className="font-bold text-[var(--accent)]">succulent</span>{" "}
                    by the window.”
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-semibold">
                  <div className="rounded-2xl border border-[var(--ring)] bg-[color-mix(in_oklab,var(--bg)_70%,var(--card))] px-4 py-3">
                    발음 듣기 <span className="text-[var(--muted)]">(준비중)</span>
                  </div>
                  <div className="rounded-2xl border border-[var(--ring)] bg-[color-mix(in_oklab,var(--bg)_70%,var(--card))] px-4 py-3">
                    카메라 스캔 <span className="text-[var(--muted)]">(웹 한계)</span>
                  </div>
                </div>
                <p className="mt-6 text-xs leading-relaxed text-[var(--muted)]">
                  실제 CapWords 앱은 디바이스 네이티브 기능으로 이미지 인식·복습 동기화를
                  처리합니다. 웹 클론은 우선 UI·학습 리듬에 집중합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--ring)] bg-[color-mix(in_oklab,var(--card)_65%,var(--bg))] py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight">
                바로 보려면
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                GitHub Actions로 정적 사이트가 배포되도록 워크플로를 추가했습니다. 저장소 설정에서
                Pages 소스가 &quot;GitHub Actions&quot;인지 확인하면{" "}
                <span className="font-semibold text-[var(--ink)]">
                  https://lee-chance.github.io/CapWordWebClone/
                </span>{" "}
                형태로 접속할 수 있습니다. 로컬에서는{" "}
                <code className="rounded-md bg-[var(--accent-soft)] px-2 py-1 font-mono text-xs">
                  npm run dev
                </code>
                로 즉시 확인하세요.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

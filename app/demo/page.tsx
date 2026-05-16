import Link from "next/link";
import { FlashcardDemo } from "@/components/flashcard-demo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function DemoPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
              interactive
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              플래시카드 데모
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              카드를 탭해 앞·뒤를 번갈아 보세요. 다음 버튼으로 장면이 바뀝니다.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-xl">
            <FlashcardDemo />
          </div>

          <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-dashed border-[color-mix(in_oklab,var(--ring)_55%,var(--teal))] bg-[color-mix(in_oklab,var(--card)_82%,transparent)] p-6 text-sm leading-relaxed text-[var(--muted)]">
            <p className="font-semibold text-[var(--ink)]">다음에 붙일 기능 후보</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>브라우저 카메라로 정적 프레임 캡처 → 클라이언트 라벨링(모델 연동)</li>
              <li>복습 큐·SRS 간격, 로컬 저장소 동기화</li>
              <li>모바일 제스처·햅틱에 맞춘 카드 애니메이션</li>
            </ul>
          </div>

          <div className="mx-auto mt-10 flex justify-center">
            <Link
              href="/"
              className="text-sm font-bold text-[var(--teal)] underline-offset-4 hover:underline"
            >
              ← 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

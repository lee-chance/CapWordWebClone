"use client";

import { useMemo, useState } from "react";

type Card = {
  scene: string;
  word: string;
  meaning: string;
  hint: string;
  emoji: string;
};

const DECK: Card[] = [
  {
    scene: "부엌 조명 아래",
    word: "mug",
    meaning: "머그컵",
    hint: "따뜻한 음료를 마실 때 자주 쓰는 컵",
    emoji: "☕️",
  },
  {
    scene: "창가 선반",
    word: "succulent",
    meaning: "다육식물",
    hint: "물을 적게 줘도 살아남는 작은 화분 식물",
    emoji: "🪴",
  },
  {
    scene: "책상 위",
    word: "charger",
    meaning: "충전기",
    hint: "케이블을 꽂아 전원을 넣는 장치",
    emoji: "🔌",
  },
  {
    scene: "현관 근처",
    word: "umbrella",
    meaning: "우산",
    hint: "비 올 때 들고 나가는 물건",
    emoji: "☂️",
  },
];

export function FlashcardDemo() {
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const card = DECK[index];

  const progress = useMemo(
    () => `${index + 1} / ${DECK.length}`,
    [index],
  );

  function next() {
    setShowBack(false);
    setIndex((i) => (i + 1) % DECK.length);
  }

  function prev() {
    setShowBack(false);
    setIndex((i) => (i - 1 + DECK.length) % DECK.length);
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="mb-4 flex items-center justify-between text-sm font-semibold text-[var(--muted)]">
        <span>플래시카드 연습</span>
        <span className="font-mono">{progress}</span>
      </div>

      <button
        type="button"
        onClick={() => setShowBack((v) => !v)}
        className="group relative w-full rounded-[28px] border border-[var(--ring)] bg-[var(--card)] p-8 text-left shadow-[0_24px_70px_-40px_rgba(20,18,26,0.35)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--teal)]"
        aria-label={showBack ? "앞면 보기" : "뜻 보기"}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
              장면
            </p>
            <p className="mt-1 text-lg font-extrabold text-[var(--ink)]">
              {card.scene}
            </p>
          </div>
          <span className="text-4xl" aria-hidden>
            {card.emoji}
          </span>
        </div>

        <div className="mt-10">
          {!showBack ? (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                단어
              </p>
              <p className="mt-2 font-mono text-4xl font-semibold tracking-tight text-[var(--ink)]">
                {card.word}
              </p>
              <p className="mt-6 text-sm text-[var(--muted)]">
                탭해서 뜻·설명 보기
              </p>
            </div>
          ) : (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                뜻 · 힌트
              </p>
              <p className="mt-2 text-3xl font-extrabold text-[var(--accent)]">
                {card.meaning}
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                {card.hint}
              </p>
              <p className="mt-6 text-sm font-semibold text-[var(--teal)]">
                다시 탭하면 단어로 돌아가요
              </p>
            </div>
          )}
        </div>

        <span className="pointer-events-none absolute bottom-6 right-8 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-bold text-[color-mix(in_oklab,var(--accent)_55%,var(--ink))] opacity-0 transition group-hover:opacity-100">
          클릭/탭으로 뒤집기
        </span>
      </button>

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={prev}
          className="flex-1 rounded-2xl border border-[var(--ring)] bg-[var(--card)] px-4 py-3 text-sm font-bold text-[var(--ink)] transition hover:bg-[color-mix(in_oklab,var(--card)_88%,var(--accent-soft))]"
        >
          이전
        </button>
        <button
          type="button"
          onClick={next}
          className="flex-1 rounded-2xl bg-[var(--ink)] px-4 py-3 text-sm font-bold text-white transition hover:bg-[color-mix(in_oklab,var(--ink)_88%,white)]"
        >
          다음 카드
        </button>
      </div>
    </div>
  );
}

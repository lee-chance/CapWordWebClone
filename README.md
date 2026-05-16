# CapWord 웹 클론

CapWords 스타일의 **단어 학습 웹 데모**(비공식)입니다. Next.js(App Router) + TypeScript + Tailwind CSS로 구현했습니다.

## 로컬에서 바로 보기

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` — 플래시카드 데모는 `/demo` 입니다.

## 공개 URL (GitHub Pages)

`main`에 푸시하면 `.github/workflows/deploy-pages.yml`이 정적 사이트를 빌드해 Pages에 올립니다.

1. 저장소 **Settings → Pages → Build and deployment**
2. Source를 **GitHub Actions**로 선택 (처음 한 번)
3. 배포가 끝나면 보통 아래 주소로 접속합니다:  
   **https://lee-chance.github.io/CapWordWebClone/**

> 프로젝트 Pages는 하위 경로(`/CapWordWebClone`)로 호스팅되므로 워크플로에서 `BASE_PATH`를 설정합니다. 로컬 개발은 경로 없이 루트에서 동작합니다.

## 빌드

```bash
npm run build   # 결과물은 out/ (gitignore)
npm run lint
```

원작 앱은 [CapWords](https://capwords.app/) 입니다. 본 저장소는 학습용 클론이며 원작과 무관합니다.

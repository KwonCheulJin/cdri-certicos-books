# CDRI 프론트엔드 사전과제

## 목차

- [프로젝트 개요](#프로젝트-개요)
- [기술 스택](#기술-스택)
- [환경 설정 및 실행 방법](#환경-설정-및-실행-방법)
- [폴더 구조 및 주요 코드 설명](#폴더-구조-및-주요-코드-설명)
- [라이브러리 선택 이유](#라이브러리-선택-이유)
- [강조 하고 싶은 기능](#강조-하고-싶은-기능)
- [배운점](#배운점)

## 프로젝트 개요

카카오 다음 검색 - 책 API를 활용한 도서 검색 서비스

## 기술 스택

- 📦 패키지 매니저

  - pnpm: 빠르고 효율적인 패키지 설치를 위해 선택한 패키지 매니저입니다. 모듈 중복 제거와 캐시 활용이 뛰어나 빌드 속도와 디스크 사용량을 줄여줍니다.

- 🧑‍💻 언어

  - TypeScript: 정적 타입을 통해 코드의 안정성과 예측 가능성을 높이며, 협업 및 유지보수에 강점을 가짐

- 🧱 라이브러리

  - React 19: 사용자 인터페이스 구축을 위한 핵심 라이브러리
  - React Router DOM (v7): 라우팅 관리
  - React Intersection Observer: 스크롤 기반 요소 감지를 위한 라이브러리 (무한 스크롤 등 구현)
  - Downshift: 자동완성/드롭다운 등 접근성 높은 UI 컴포넌트 제어용 라이브러리
  - Styled-components: CSS-in-JS 방식의 스타일링 도구

- ⚙️ 상태 관리 및 데이터 처리

  - Zustand: 간단하고 직관적인 전역 상태 관리 라이브러리
  - Immer: 불변성 유지를 위한 도우미 라이브러리
  - TanStack Query (v5): 서버 상태 관리, 비동기 데이터 fetching/caching 도구
  - TanStack Devtools: React Query 상태 디버깅을 위한 도구

- 🌐 네트워크

  - Axios: HTTP 클라이언트 라이브러리, API 요청 처리에 사용

- 🔔 사용자 경험
  - React Toastify: 토스트 알림 라이브러리 (에러, 성공 등의 피드백 제공)

## 환경 설정 및 실행 방법

- 프로젝트 환경 설정

  - `.env` 파일 필요(메일로 제공)
  - 제공된 .env 파일을 프로젝트 루트 경로에 추가한 후 실행해야 합니다.

- 프로젝트 실행 방법

  ```bash
  pnpm install

  pnpm dev
  ```

## 폴더 구조 및 주요 코드 설명

`src`

- [api/](./src/api)
  - [queries/](./src/api/queries)
    - [useSavedBook.ts](./src/api/queries/useSavedBook.ts)
      - 내가 찜한 책 데이터를 불러오는 요청 훅
    - [useSearchBook.ts](./src/api/queries/useSearchBook.ts)
      - 도서 검색 데이터를 불러오는 API 요청 훅
  - [service/](./src/api/service)
    - [ApiService.ts](./src/api/service/ApiService.ts)
      - 기본 ApiService 클래스(싱글톤)
    - [SearchBookApiService.ts](./src/api/service/SearchBookApiService.ts)
      - 도서 검색 ApiService 클래스
- [assets/](./src/assets)
  - [arrow-down-large.svg](./src/assets/arrow-down-large.svg)
  - [arrow-down.svg](./src/assets/arrow-down.svg)
  - [like-empty.svg](./src/assets/like-empty.svg)
  - [like.svg](./src/assets/like.svg)
  - [search.svg](./src/assets/search.svg)
  - [xmark-small.svg](./src/assets/xmark-small.svg)
  - [xmark.svg](./src/assets/xmark.svg)
- [components/](./src/components)

  - [book/](./src/components/book)
    - [hook/](./src/components/book/hook)
      - [useAccordion.ts](./src/hook/useAccordion.ts)
        - 도서 검색 / 내가 찜한 책 아이템 아코디언 기능 훅
      - [useStoredSavedBook.ts](./src/components/book/hook/useStoredSavedBook.ts)
        - 도서 검색 찜하기 기능 / 내가 찜한 책 데이터 저장 / 내가 찜한 책 찜하기 해제 업데이트 종합 hook
    - [BookActionsSection.tsx](./src/components/book/BookActionsSection.tsx)
      - 도서 검색 / 내가 찜한 책 상세보기 아코디언 action 컴포넌트
    - [BookInfoSection.tsx](./src/components/book/BookInfoSection.tsx)
      - 도서 검색 / 내가 찜한 책 정보(이미지, 제목, 저자) 컴포넌트
    - [BookItem.tsx](./src/components/book/BookItem.tsx)
      - 도서 검색 / 내가 찜한 책 리스트 아이템 컴포넌트
    - [BookListSection.tsx](./src/components/book/BookListSection.tsx)
      - 도서 검색 / 내가 찜한 책 리스트 컴포넌트
    - [EmptyBookMessage.tsx](./src/components/book/EmptyBookMessage.tsx)
      - 도서 검색 / 내가 찜한 책 빈 데이터 화면 컴포넌트
    - [LikeWrapper.tsx](./src/components/book/LikeWrapper.tsx)
      - 찜하기 버튼(이미지를 감싸서 사용되도록 구현) 컴포넌트
    - [PriceGroup.tsx](./src/components/book/PriceGroup.tsx)
      - 상세 화면 금액 표기 컴포넌트
    - [PurchaseButton.tsx](./src/components/book/PurchaseButton.tsx)
      - 구매하기 버튼 컴포넌트
    - [ResultBooksCountMessage.tsx](./src/components/book/ResultBooksCountMessage.tsx)
      - 도서 검색 / 내가 찜한 책 결과 숫자 컴포넌트
  - [common/](./src/components/common)
    - [Button.tsx](./src/components/common/Button.tsx)
      - 공용 버튼 컴포넌트
    - [ErrorBoundary.tsx](./src/components/common/ErrorBoundary.tsx)
      - 에러 발생 시 폴백 UI 제공 컴포넌트
    - [InfiniteScrollSection.tsx](./src/components/common/InfiniteScrollSection.tsx)
      - 무한 스크롤 구역 컴포넌트
    - [NavBar.tsx](./src/components/common/NavBar.tsx)
      - 헤더 네비게이션 컴포넌트
    - [NavLink.tsx](./src/components/common/NavLink.tsx)
      - 커스텀 스타일 네비게이션 링크 컴포넌트
    - [PageContainer.tsx](./src/components/common/PageContainer.tsx)
      - 공용 페이지 컨테이너 컴포넌트
    - [PageTitle.tsx](./src/components/common/PageTitle.tsx)
      - 공용 페이지 제목 컴포넌트
    - [Typography.tsx](./src/components/common/Typography.tsx)
      - 공용 타이포그라피 컴포넌트
  - [saved-book/](./src/components/saved-book)
    - [hook/](./src/components/saved-book/hook)
      - [useSavedBookInfiniteScroll.ts](./src/components/saved-book/hook/useSavedBookInfiniteScroll.ts)
        - 내가 찜한 책 무한 스크롤 관련 훅
  - [search/](./src/components/search)
    - [hook/](./src/components/search/hook)
      - [useSearchBasic.ts](./src/components/search/hook/useSearchBasic.ts)
        - 도서 검색(기본 검색) 로직 훅
      - [useSearchDetail.ts](./src/components/search/hook/useSearchDetail.ts)
        - 도서 검색(상세 검색) 로직 훅
      - [useSearchInfiniteScroll.ts](./src/components/search/hook/useSearchInfiniteScroll.ts)
        - 도서 검색 무한 스크롤 관련 훅
      - [useStoredKeywords.ts](./src/components/search/hook/useStoredKeywords.ts)
        - 도서 검색 내역 히스토리 관련 훅
    - [SearchBasicContainer.tsx](./src/components/search/SearchBasicContainer.tsx)
      - 도서 검색(기본 검색) 컨테이너 컴포넌트
    - [SearchBasicInput.tsx](./src/components/search/SearchBasicInput.tsx)
      - 도서 검색(기본 검색) 인풋 컴포넌트
    - [SearchBasicHistory.tsx](./src/components/search/SearchBasicHistory.tsx)
      - 도서 검색(기본 검색) 검색 내역 히스토리 컴포넌트
    - [SearchDetailButton.tsx](./src/components/search/SearchDetailButton.tsx)
      - 도서 검색(상세 검색) 버튼 컴포넌트
    - [SearchDetailContainer.tsx](./src/components/search/SearchDetailContainer.tsx)
      - 도서 검색(상세 검색) 컨테이너 컴포넌트
    - [SearchDetailModal.tsx](./src/components/search/SearchDetailModal.tsx)
      - 도서 검색(상세 검색) 모달 컴포넌트
    - [SearchDetailSelect.tsx](./src/components/search/SearchDetailSelect.tsx)
      - 도서 검색(상세 검색) 필터 셀렉트 컴포넌트

- [pages/](./src/pages)
  - [saved-books/](./src/pages/saved-books)
    - [SavedBooksPage.tsx](./src/pages/saved-books/SavedBooksPage.tsx)
  - [search/](./src/pages/search)
    - [SearchPage.tsx](./src/pages/search/SearchPage.tsx)
  - [Layout.tsx](./src/pages/Layout.tsx)
    - 페이지 레이아웃을 구성하는 컴포넌트
- [storage/](./src/storage)
  - [saved-book.ts](./src/storage/saved-book.ts)
    - 내가 찜한 책 로컬스토리지 동작 객체
  - [search.ts](./src/storage/search.ts)
    - 도서 검색 로컬스토리지 동작 객체
- [store/](./src/store)
  - [useSearchStore.ts](./src/store/useSearchStore.ts)
    - 도서 검색(기본 / 상세 검색) 기능을 위한 전역 상태 관리
- [styles/](./src/styles)
  - [button.ts](./src/styles/button.ts)
  - [theme.ts](./src/styles/theme.ts)
  - [typography.ts](./src/styles/typography.ts)
- [types/](./src/types)
  - [common.ts](./src/types/common.ts)
  - [constant.ts](./src/types/constant.ts)
  - [saved-book.ts](./src/types/saved-book.ts)
  - [search.ts](./src/types/search.ts)
  - [storage.ts](./src/types/storage.ts)
  - [styled.d.ts](./src/types/styled.d.ts)
  - [utils.ts](./src/types/utils.ts)
- [utils/](./src/utils)
  - [book.test.ts](./src/utils/book.test.ts)
  - [book.ts](./src/utils/book.ts)
  - [localStorageManager.ts](./src/utils/localStorageManager.ts)
  - [search.test.ts](./src/utils/search.test.ts)
  - [search.ts](./src/utils/search.ts)
  - [waitFor.test.ts](./src/utils/waitFor.test.ts)
  - [waitFor.ts](./src/utils/waitFor.ts)
- [App.tsx](./src/App.tsx)
- [index.css](./src/index.css)
- [main.tsx](./src/main.tsx)
- [vite-env.d.ts](./src/vite-env.d.ts)

## 라이브러리 선택 이유

- downshift를 사용한 이유

  - 현재까지 기본 `<select>` 요소는 브라우저별 스타일 차이로 인해 일관된 UI 제공이 어렵고, 커스텀 스타일을 적용하려면 추가적인 wrapper와 CSS 작업이 필요하며, 또한, 키보드 네비게이션, 필터링 등의 기능을 직접 구현해야 하므로, 라이브러리를 활용하는 것이 개발 생산성과 유지보수성 측면에서 유리하다고 판단했습니다.
  - 이 과정에서 `react-select` 라이브러리와 비교를 하였는데 `downshift`가 `hook으로 제공한다는 점에서 스타일 커스텀이 많이 유리`하다고 생각되었고 라이브러리 용량도 `react-select`에 비해서 `1/3정도 밖에 되지 않아서 select만을 위한 라이브러리로 좋다`고 생각하였습니다.
  - 마지막으로 `downshift`는 WAI-ARIA 표준을 준수하여 접근성(A11Y) 측면에서도 장점이 있습니다.

- react-intersection-observer를 사용한 이유

  - 라이브러리에 의존하지 않고 자체적으로 IntersectionObserver를 활용한 무한 스크롤 데이터 패칭을 진행해 보려고 하였으나 초기화 시점의 차이, 타이밍 이슈, 의존성 누락으로 인한 무한 스크롤이 정상적으로 동작하지 않는 문제가 발생하였습니다.
  - 그래서 지속적으로 보완 조치를 취하기 보다는 앳지케이스도 보완되어있는 잘 만들어진 라이브러리를 사용하는 방향으로 변경하였습니다. 과제 제출까지의 제한 기간이 얼마 남지 않았기 때문에 시간을 더 할애하는거는 리소스 낭비라고 판단 하였습니다.

    `useIntersectionObserver`

    ```tsx
    import { RefObject, useEffect, useRef, useState } from 'react';

    type Elem = Element | null;

    const useIntersectionObserver = (
      elemRef: RefObject<Elem>,
      options: IntersectionObserverInit = { threshold: 0 }
    ) => {
      const observerRef = useRef<IntersectionObserver>(null);
      const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

      useEffect(() => {
        const node = elemRef.current;
        if (!node) return;

        observerRef.current = new IntersectionObserver(setEntries, options);
        observerRef.current.observe(node);

        return () => {
          observerRef.current?.disconnect();
        };
      }, [elemRef, options]);

      return {
        entries,
        observerRef,
      };
    };

    export default useIntersectionObserver;
    ```

    `useSearchInfiniteScroll`

    ```tsx
    import useSearchBook from '@/api/queries/useSearchBook';
    import useIntersectionObserver from '@/hook/useIntersectionObserver';
    import { useEffect, useRef } from 'react';

    const ioOptions = { threshold: 1 };

    export default function useSearchInfiniteScroll() {
      const { data, fetchNextPage } = useSearchBook();
      const moreRef = useRef<HTMLDivElement>(null);
      const {
        entries: [entry],
      } = useIntersectionObserver(moreRef, ioOptions);
      const isIntersecting = entry?.isIntersecting;

      useEffect(() => {
        if (isIntersecting) {
          fetchNextPage();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isIntersecting]);

      return { data, moreRef };
    }
    ```

- axios

  - fetch를 사용하는 것보다 에러 핸들링, 타입 안정성, JSON 자동 변환, 요청/응답 인터셉터 지원 등으로 인해 더 효율적인 API 관리가 가능하여 선택하였습니다.

- zustand + immer

  - Zustand에서는 상태 변경 시 불변성을 유지해야 하기 때문에, 직접 객체를 복사해야 하지만, Immer를 사용하면 기존 객체를 직접 수정하는 방식으로 작성할 수 있습니다.

  - set(state => { state.count += 1 }) 처럼 직접 상태를 수정하는 방식으로 작성할 수 있으며, 일반적인 Zustand 사용 방식(set(state => ({ count: state.count + 1 })))보다 코드가 더 직관적이고 간결해집니다.

  - 상태가 깊게 중첩된 경우, 직접 불변성을 관리하려면 spread 연산자(...state)를 여러 번 사용해야 하지만 Immer를 사용하면 복잡한 객체나 배열을 쉽게 업데이트할 수 있습니다.

  - 예시 (Zustand 기본 사용)

    ```ts
    const useStore = create(set => ({
      user: {
        name: '철진',
        details: { age: 30, city: 'Seoul' },
      },
      updateCity: newCity =>
        set(state => ({
          user: {
            ...state.user,
            details: { ...state.user.details, city: newCity },
          },
        })),
    }));
    ```

  - 예시 (Immer 적용 후)

    ```ts
    const useStore = create(
      immer(set => ({
        user: {
          name: '철진',
          details: { age: 30, city: 'Seoul' },
        },
        updateCity: newCity =>
          set(state => {
            state.user.details.city = newCity;
          }),
      }))
    );
    ```

- react-toastify

  - react-toastify를 사용하여 API 요청 중 발생하는 400번대 클라이언트 오류를 사용자에게 직관적으로 전달하고, 500번대 서버 오류는 ErrorBoundary에서 처리하도록 분리하였습니다. 이를 통해 사용자의 실수로 인한 요청 오류와 서버 오류를 명확히 구분하여 더 나은 UX를 제공할 수 있도록 하였습니다.

- styled-components
  - props 기반 동적 스타일링, ThemeProvider를 활용한 테마 시스템 등을 통해 유연하면서도 일관된 UI를 쉽게 구현할 수 있어 선택했습니다.

## 강조 하고 싶은 기능

- axios를 활용한 싱글톤 패턴 apiService

  - axios를 싱글톤 패턴으로 구현안 이유는 단일 인스턴스를 사용하여 리소스를 줄이고 클래스로 구현하여 각 서비스에 맞는 api 요청에 대한 부분을 명확하게 구분 지을 수 있는 부분이 장점이라고 생각하였습니다.
  - 그리고 base가 되는 apiService에서는 에러 핸들링에 관한 부분을 중앙에서 관리하도록 구성하여 관리에 용이하도록 작성하였습니다.

- localStorageManager 싱글톤 패턴

  - 검색 히스토리와 내가 찜한 책 기능에서 localStorage를 활용하여 브라우저가 종료 되었어도 데이터가 지워지지 않게 하는 기능을 구현하기 위해서 localStorageManager를 싱글톤 패턴으로 구현하여 불필요한 객체 생성을 방지하고, 메모리를 효율적으로 관리할 수 있도록 하였습니다. 또한, 이벤트 리스너를 활용하여 여러 컴포넌트에서 로컬 스토리지 변경 사항을 실시간으로 감지할 수 있도록 구현하였습니다.

- useStoredSavedBook(localStorage 데이터)과 react-query를 활용한 데이터 패치 기능

  - 내가 찜한 책 페이지에서도 도서 검색 기능과 동일하게 무한 스크롤을 적용하여 페이지당 10개의 아이템만 가져오도록 구현하였습니다.
  - 이때 사용된 데이터는 localStorage의 찜한 책 데이터를 가지고 활용하였는데 도서 검색에서 찜하기 기능과 내가 찜한 책 찜하기 기능이 동일하지만 도서 검색에서는 찜하기 기능만 동작해야하는 반면 내가 찜한 책에서는 찜하기를 해제했을 때 리스트에서 사라져야 한다는 부분을 염두해서 실시간 성을 보장하기 위해 react-query의 useMutation을 활용해서 POST api를 호출하는 방식으로 기능을 구현해보았습니다.

- 유틸리티 함수 단위 테스트 작성
  - 각 도메인에서 활용하는 유틸리티 함수의 신뢰성을 높이기 위해 `vitest`를 활용하여 단위 테스트를 작성하였습니다.
    - `describe`와 `test` 블록을 활용하여 각 함수의 입력값과 예상 출력을 검증하였습니다.
  - `book.test.ts`
    - `getIsLastPage`: 로컬스토리지 데이터에서 마지막 페이지 여부를 판별
    - `getBooksByPage`: 저장된 찜한 책 데이터를 페이지 단위로 분할
    - `getTotalPages`: 찜한 책 데이터 전체의 총 페이지 수 계산
  - `search.test.ts`
    - `formatAuthorList`: 검색 API 응답에서 저자 목록을 형식에 맞게 변환
    - `generateThumbnailUrls`: 책 데이터에서 썸네일 URL을 작은 사이즈와 큰 사이즈 생성
    - `transformSearchData`: 검색 API 응답 데이터를 프론트엔드에서 사용할 형태로 변환

## 배운점

- `로컬스토리지 데이터의 실시간 반영을 위한 커스텀 이벤트(Custom Event) 처리`
  - 기존에는 localStorage.getItem()과 localStorage.setItem()을 단순히 데이터 저장 용도로만 사용했었습니다.
  - 이번 프로젝트에서는 useState에서 로컬스토리지 데이터를 가져와 사용하고, setState를 통해 UI를 리렌더링하는 과정에서 같은 탭/윈도우에서도 변경 사항이 반영되어야 한다는 점을 고려해야 했습니다.
  - 이를 위해 Custom Event를 활용하여 특정 로컬스토리지 키 값이 변경될 때 현재 탭에서도 업데이트가 반영되도록 처리하는 방법을 배웠습니다.
- `로컬스토리지 매니저를 싱글톤 패턴으로 관리하여 메모리 효율성 개선`
  - 기존에는 싱글톤 패턴을 ApiService에서만 사용했지만, 이번 프로젝트를 통해 로컬스토리지 관리에도 적용할 수 있다는 점을 새롭게 깨달았습니다.
  - 이를 통해 불필요한 메모리 사용을 줄이고, 여러 컴포넌트에서 일관된 방식으로 로컬스토리지 데이터를 관리할 수 있었습니다.
  - 싱글톤 패턴이 다양한 상황에서 활용될 수 있다는 점을 직접 경험하며, 디자인 패턴의 중요성을 다시금 인식하게 되었습니다.
- `로컬스토리지 데이터를 React Query를 활용하여 데이터 패칭과 연동`
  - 기존에는 로컬스토리지 데이터를 단순히 직접 읽고 쓰는 방식으로만 사용했었지만, 이번 프로젝트에서는 React Query를 활용하여 로컬스토리지 데이터를 비동기 데이터 패칭 흐름과 유사하게 다룰 수 있음을 발견했습니다.
  - 예를 들어, 도서 검색 API를 호출하는 방식과 동일한 방식으로 “내가 찜한 책” 데이터를 React Query의 fetch 함수와 유사하게 설계하면, API 요청을 보내는 것처럼 동일한 패턴으로 데이터 관리가 가능하다는 점을 깨달았습니다.
  - 이를 통해 기존보다 더 유연한 방식으로 데이터를 다룰 수 있게 되었으며, 앞으로 개발할 때도 다양한 관점에서 접근하는 습관을 기를 필요가 있다는 점을 느꼈습니다.
- `공통 컴포넌트의 유연한 설계`
  - `Button`, `Typography` 등의 공통 컴포넌트를 설계할 때, `shadcn/ui`나 `MUI` 같은 라이브러리들을 참고하여 프로젝트 전반에서 일관되게 사용할 수 있도록 설계해보았습니다.
  - 이 과정을 통해 왜 널리 사용되는 UI 라이브러리들이 특정 방식으로 컴포넌트를 설계했는지에 대해 스스로 고민하고 이해해볼 수 있는 좋은 기회가 되었습니다.
  - 특히, 컴포넌트의 재사용성, 확장성, 사용자 정의의 유연함을 고려하며 설계하는 중요성을 체감할 수 있었습니다.

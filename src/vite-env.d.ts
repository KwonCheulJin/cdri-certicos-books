/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_KAKAO_REST_API_KEY: string; // 환경 변수 타입 정의
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

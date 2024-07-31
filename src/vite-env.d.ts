/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_URL: string;
  // Добавьте другие переменные окружения, если они у вас есть
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

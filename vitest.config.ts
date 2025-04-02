/// <reference types="vitest" />
import { defineConfig, InlineConfig, UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
export default defineConfig({
  test: {
    include: ['**/*.test.?(c|m)[jt]s?(x)'],
  },
  plugins: [tsconfigPaths()],
} as UserConfig & { test: InlineConfig });

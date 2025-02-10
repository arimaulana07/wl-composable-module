import { defineVitestConfig } from '@nuxt/test-utils/config';
import { fileURLToPath } from 'node:url'

export default defineVitestConfig({
  define: {
    'process.env.NUXT_APP_URL': JSON.stringify(process.env.NUXT_APP_URL)
  },
  test: {
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL('./playground', import.meta.url)),
        overrides: {
          runtimeConfig: {
            public: {
              appUrl: JSON.stringify(process.env.NUXT_APP_URL)
            }
          }
        }
      }
    }
  }
});
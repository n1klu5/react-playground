import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const baseConfig = {
    plugins: [svgr(), react(), tsconfigPaths()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'src/setupTests',
      include: ['**/*.test.{ts,tsx}'],
    },
  };
  if (command === 'serve') {
    return {
      ...baseConfig,
      server: {
        port: 3001,
        proxy: {
          '/api': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            secure: false,
          },
        },
      },
    };
  } else {
    return baseConfig;
  }
});

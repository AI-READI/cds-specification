import { SearchPlugin } from 'vitepress-plugin-search';
import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['@braintree/sanitize-url'],
  },
  plugins: [
    SearchPlugin({
      buttonLabel: 'Search',
      placeholder: 'Search docs',
      tokenize: 'full',
    }),
  ],
  resolve: {
    alias: {
      dayjs: 'dayjs/',
    },
  },
});

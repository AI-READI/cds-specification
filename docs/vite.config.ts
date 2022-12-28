import { SearchPlugin } from 'vitepress-plugin-search';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    SearchPlugin({
      buttonLabel: 'Search',
      placeholder: 'Search docs',
      encode: false,
      tokenize: 'full',
    }),
  ],
});

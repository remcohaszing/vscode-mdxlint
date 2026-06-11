import { defineConfig } from 'rolldown'

export default defineConfig({
  external: 'vscode',
  platform: 'node',
  output: {
    cleanDir: true,
    minify: true
  },
  input: {
    'mdxlint-language-server': 'mdxlint-language-server',
    extension: './src/extension.ts'
  }
})

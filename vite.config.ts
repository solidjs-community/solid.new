import solid from 'solid-start/vite'
import { defineConfig } from 'vite'
import devtools from 'solid-devtools/vite'
import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [devtools({ name: true }), solid(), unocss()],
  build: {
    target: 'esnext',
  },
})

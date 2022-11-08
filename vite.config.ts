import solid from 'solid-start/vite'
import { defineConfig } from 'vite'
import devtools from 'solid-devtools/vite'
import unocss from 'unocss/vite'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  plugins: [
    devtools({ name: true }),
    solid({ islands: true }),
    unocss({
      presets: [presetWind()],
      shortcuts: {
        h3: 'text-xl font-bold',
        'text-link-l': 'text-xl font-medium',
        'center-child': 'flex items-center justify-center',
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
})

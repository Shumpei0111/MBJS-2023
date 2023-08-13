import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dc7a7d",
        black: "#121212",
        white: "#ffefef"
      },
      fontSize: {
        // usage: text-1, text-2, text-3, ...
        ...Object.fromEntries(
          [...Array(200)].map((_, i) => i + 1).map((num) => [num, `${num}px`]),
        ),
      },
      borderWidth: {
        // 1 ~ 10px
        // usage: border-1, border-2, border-3, ...
        ...Object.fromEntries(
          [...Array(10)].map((_, i) => i + 1).map((num) => [num, `${num}px`]),
        ),
      },
      width: {
        // 1 ~ 1000px
        // usage: w-1, w-2, w-3, ...
        ...Object.fromEntries(
          [...Array(1000)].map((_, i) => i + 1).map((num) => [num, `${num}px`]),
        ),
      },
      height: {
        // 1 ~ 500px
        // usage: h-1, h-2, h-3, ...
        ...Object.fromEntries(
          [...Array(500)].map((_, i) => i + 1).map((num) => [num, `${num}px`]),
        ),
        'fandom-index-cover-height': '620px',
        'fandom-contents-cover-height': '378px',
      },
      container: {
        screens: {
          // 1280pxまでしか広がらないように
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [],
}
export default config

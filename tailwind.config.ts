import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
          './components/**/*.{js,ts,jsx,tsx,mdx}',
              './app/**/*.{js,ts,jsx,tsx,mdx}',
                ],
                  theme: {
                      extend: {
                            backgroundImage: {
                                    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                                            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                                                  },
                                                        colors: {
                                                                'fitness-orange': '#FF6B35',
                                                                        'fitness-dark': '#1A1A2E',
                                                                                'fitness-darker': '#16213E',
                                                                                        'fitness-blue': '#0F3460',
                                                                                                'fitness-accent': '#E94560',
                                                                                                      },
                                                                                                            animation: {
                                                                                                                    'fade-in': 'fadeIn 0.5s ease-in-out',
                                                                                                                            'slide-up': 'slideUp 0.5s ease-out',
                                                                                                                                    'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                                                                                                                                          },
                                                                                                                                                keyframes: {
                                                                                                                                                        fadeIn: {
                                                                                                                                                                  '0%': { opacity: '0' },
                                                                                                                                                                            '100%': { opacity: '1' },
                                                                                                                                                                                    },
                                                                                                                                                                                            slideUp: {
                                                                                                                                                                                                      '0%': { transform: 'tran{
                                                                                                                                                                                                          "compilerOptions": {
                                                                                                                                                                                                              "lib": ["dom", "dom.iterable", "esnext"],
                                                                                                                                                                                                                  "allowJs": true,
                                                                                                                                                                                                                      "skipLibCheck": true,
                                                                                                                                                                                                                          "strict": true,
                                                                                                                                                                                                                              "noEmit": true,
                                                                                                                                                                                                                                  "esModuleInterop": true,
                                                                                                                                                                                                                                      "module": "esnext",
                                                                                                                                                                                                                                          "moduleResolution": "bundler",
                                                                                                                                                                                                                                              "resolveJsonModule": true,
                                                                                                                                                                                                                                                  "isolatedModules": true,
                                                                                                                                                                                                                                                      "jsx": "preserve",
                                                                                                                                                                                                                                                          "incremental": true,
                                                                                                                                                                                                                                                              "plugins": [
                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                            "name": "next"module.exports = {
                                                                                                                                                                                                                                                                                  plugins: {
                                                                                                                                                                                                                                                                                      tailwindcss: {},
                                                                                                                                                                                                                                                                                          autoprefixer: {},
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                      ],
                                                                                                                                                                                                                                                                                          "paths": {
                                                                                                                                                                                                                                                                                                "@/*": ["./*"]
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                                        "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
                                                                                                                                                                                                                                                                                                          "exclude": ["node_modules"]
                                                                                                                                                                                                                                                                                                          }slateY(20px)', opacity: '0' },
                                                                                                                                                                                                                '100%': { transform: 'translateY(0)', opacity: '1' },
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                      plugins: [],
                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                      export default config
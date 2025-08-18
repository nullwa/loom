export type Theme = 'light-mode' | 'dark-mode'

export interface ThemeModeProvider {
  theme: Theme
  toggleTheme: (mode: Theme) => void
}

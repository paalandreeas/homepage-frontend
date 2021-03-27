export const TOGGLE_THEME = "TOGGLE_THEME";

export interface Theme {
  dark: boolean;
}

interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
}

export type ThemeActionTypes = ToggleThemeAction;

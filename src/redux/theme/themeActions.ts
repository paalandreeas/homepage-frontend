import { ThemeActionTypes, TOGGLE_THEME } from "./themeTypes";

export const toggleTheme = (): ThemeActionTypes => {
  return {
    type: TOGGLE_THEME,
  };
};

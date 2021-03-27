import { Theme, ThemeActionTypes, TOGGLE_THEME } from "./themeTypes";

const initialState: Theme = {
  dark: false,
};

const themeReducer = (
  state = initialState,
  action: ThemeActionTypes
): Theme => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        dark: !state.dark,
      };

    default:
      return state;
  }
};

export default themeReducer;

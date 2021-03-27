import { combineReducers } from "redux";
import menuReducer from "./menu/menuReducer";
import { Menu } from "./menu/menuTypes";
import themeReducer from "./theme/themeReducer";
import { Theme } from "./theme/themeTypes";

export interface rootState {
  theme: Theme;
  menu: Menu;
}

const rootReducer = combineReducers({
  theme: themeReducer,
  menu: menuReducer,
});

export default rootReducer;

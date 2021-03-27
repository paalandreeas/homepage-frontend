import { MenuActionTypes, SET_MENU } from "./menuTypes";

export const setMenu = (open: boolean): MenuActionTypes => {
  return {
    type: SET_MENU,
    payload: open,
  };
};

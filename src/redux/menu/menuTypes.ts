export const SET_MENU = "SET_MENU";

export interface Menu {
  open: boolean;
}

interface setMenuAction {
  type: typeof SET_MENU;
  payload: boolean;
}

export type MenuActionTypes = setMenuAction;

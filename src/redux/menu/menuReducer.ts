import { Menu, MenuActionTypes, SET_MENU } from "./menuTypes";

const initialState: Menu = {
  open: false,
};

const menuReducer = (state = initialState, action: MenuActionTypes): Menu => {
  switch (action.type) {
    case SET_MENU:
      return {
        open: action.payload,
      };

    default:
      return state;
  }
};

export default menuReducer;

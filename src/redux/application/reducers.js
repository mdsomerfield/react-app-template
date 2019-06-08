import { TOGGLE_MENU } from './actions'

const defaultState = {
  menus: [],
}

const toggleMenu = (state, menuId) => {
  const existingMenu = state.menus.find(m => m.menuId === menuId);
  const visible = existingMenu ? !existingMenu.visible : true;  
  const menus = state.menus.filter(m => m.menuId !== menuId);
  menus.push({ menuId, visible });
  return { ...state, menus }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return toggleMenu(state, action.menuId);
    default:
      return state;
  }
}

export const TOGGLE_MENU = 'Application.ToggleMenu';

const toggleMenu = (menuId) => ({ type: TOGGLE_MENU, menuId });

export default {
  toggleMenu
}
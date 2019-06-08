const showMenu = (menus, menuId) => {
  const menu = menus.find(m => m.menuId === menuId);
  return menu && menu.visible;
}

export default {
  showMenu
}
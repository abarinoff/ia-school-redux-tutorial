export const ThemeActionTypes = {
  TOGGLE_THEME: '[THEME] Toggle'
};

export const toggleTheme = () => ({
  type: ThemeActionTypes.TOGGLE_THEME,
  payload: {}
});
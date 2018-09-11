import {ThemeActionTypes} from '../actions';

const Themes = {
  LIGHT: {color: "#6c757d", bgColor: "#FFFFFF"},
  DARK: {color: "#DDDDDD", bgColor: "#3C3F41"}
};

const defaultState = Themes.LIGHT;

const ThemeReducer = (state = defaultState, action) => {
  switch (action.type) {

    case ThemeActionTypes.TOGGLE_THEME:
      return state === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;

    default:
      return state;
  }
};

export default ThemeReducer;
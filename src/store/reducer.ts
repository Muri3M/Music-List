/* eslint-disable no-case-declarations */
import * as actionTypes from './actionTypes';

const initialState: MusicState = {
  musics: [],
};

export const musicReducer = (
  state: MusicState = initialState,
  action: MusicAction
): MusicState => {
  const { type } = action;
  switch (type) {
    case actionTypes.ADD_MUSIC:
      const newMusic: MusicInterface = action.music;
      if (state.musics.includes(action.music)) {
        return state;
      }
      return {
        ...state,
        musics: state.musics.concat(newMusic),
      };
    case actionTypes.REMOVE_MUSIC:
      const updatedMusics: MusicInterface[] = state.musics.filter(
        (music) => music.id !== action.music.id
      );
      return {
        ...state,
        musics: updatedMusics,
      };
    default:
      return state;
  }
};

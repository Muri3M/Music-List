/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as actionTypes from './actionTypes';

export function addMusic(music: MusicInterface) {
  const action: MusicAction = {
    type: actionTypes.ADD_MUSIC,
    music,
  };

  return action;
}

export function removeMusic(music: MusicInterface) {
  const action: MusicAction = {
    type: actionTypes.REMOVE_MUSIC,
    music,
  };
  return action;
}

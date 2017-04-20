export const SHOW_TOP = 'SHOW_TOP';
export const SHOW_BOTTOM = 'SHOW_BOTTOM';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';

export function showTop(text){
  return {
    type:SHOW_TOP,
    text:text
  }
}

export function showBottom(text){
  return {
    type:SHOW_BOTTOM,
    text:text
  }
}

export function showMessage(text){
  return {
    type:SHOW_MESSAGE,
    text:text
  }
}

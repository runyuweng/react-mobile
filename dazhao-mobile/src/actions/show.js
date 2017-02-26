export const SHOW_TOP = 'SHOW_TOP';
export const SHOW_BOTTOM = 'SHOW_BOTTOM';

export function showTop(text){
  return {
    type:SHOW_TOP,
    text
  }
}

export function showBottom(text){
  return {
    type:SHOW_BOTTOM,
    text
  }
}

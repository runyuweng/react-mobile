import { SHOW_TOP, SHOW_BOTTOM, SHOW_MESSAGE } from '../constants/ActionTypes.js'

const initialState = {
  show_top:true,
  show_bottom:true,
  show_message:''
}

export default function show(state = initialState, action) {
  switch (action.type) {
    case SHOW_TOP:
      let newState_top = JSON.parse(JSON.stringify(state));
      newState_top.show_top = action.text;
      return newState_top;

    case SHOW_BOTTOM:
      let newState_bottom = JSON.parse(JSON.stringify(state));
      newState_bottom.show_bottom = action.text;
      return newState_bottom;

    case SHOW_MESSAGE:
      let newState_message = JSON.parse(JSON.stringify(state));
      newState_message.show_message = action.text;
      return newState_message;

    default:
      return state
  }
}

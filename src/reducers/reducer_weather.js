import { FEACH_WEATHER } from "../actions/index";

export default function (state = [], action) {
  if (action.error) {
    return state;
  }
  switch(action.type) {
    case FEACH_WEATHER:
      return [action.payload.data, ...state];
  }
  return state;
}
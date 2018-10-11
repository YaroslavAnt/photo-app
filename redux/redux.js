const CHANGE_IMG = "CHANGE_IMG";

export function changeImage(src) {
  return {
    type: CHANGE_IMG,
    payload: src
  };
}

const initialState = { src: "" };

export function rootRerucer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_IMG:
      return { ...state, src: action.payload };
    default:
      return state;
  }
}

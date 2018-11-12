// Action
const LOGIN = "app/login";

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOGIN:
      alert("Button clicked");
      break;
    default:
      return state;
  }
}

// Action Creator
export const loginUser = () => {
  return { type: LOGIN };
}

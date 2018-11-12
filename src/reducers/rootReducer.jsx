const initialState = {
  buttonText: "From Redux"
}

const rootReducer = (state = initialState, action) => {
  if(action.type === "BUTTON_CLICK") {
    alert('Button Clicked REDUXXXXXXXXX');
    return state;
  }
  return state;
}

export default rootReducer;
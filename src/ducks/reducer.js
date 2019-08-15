//initial state
const initialState = {
  username: "",
  email: "",
  video: []
};

//Action constants
export const UPDATE_NAME = "UPDATE_NAME";
export const SET_USER = "SET_USER";

//Action Builders
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}

//reducer

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: payload };
    default:
      return state;
  }
};

//initial state
const initialState = {
  username: "",
  email: "",
  video: []
};

//Action constants
 const UPDATE_NAME = "UPDATE_NAME";
 const SET_USER = "SET_USER";
 const LOGOUT_USER = 'LOGOUT_USER'
 const POST_VIDEO ='POST_VIDEO'

//Action Builders
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}
export function logout(){
  return {
    type: LOGOUT_USER
  }
}
export function updateVideo(user){
  return{
    type:POST_VIDEO,
    payload:user
  }
}

//reducer

export default (state = initialState, action) => {
  const {  payload } = action;
  switch (action.type) {
    case LOGOUT_USER:
      return initialState
    case UPDATE_NAME:
      return { ...state, name: payload };
      case POST_VIDEO:
        return {...state,video:payload}
    default:
      return state;
  }
};

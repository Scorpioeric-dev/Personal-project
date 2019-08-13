//initial state
const initialState = {
    username:'',
    email:'',
    video:[]
}



//Action constants
export const UPDATE_NAME = 'UPDATE_NAME'


//reducer

export default (state=initialState,action) => {
    const {type,payload} = action
    switch (action.type) {
        case  UPDATE_NAME:
        return {...state,name:payload}
default: return state
    }
}

const initState = {
  authError: null
}

const authReducer = (state = initState, {type, payload}) => {
  switch(type){
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        authError: null
      }

    case 'SIGNOUT_SUCCESS':
      console.log('signout success')
      return state

    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return {...state, authError: null}

    case 'SIGNUP_ERROR':
      console.log('signup error')
      return {...state, authError: payload}
    default:
      return state
  }
};

export default authReducer;
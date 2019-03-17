const INITIAL_STATE = { id : 0, username:"", error:"", loading : false, role : ""}

export default (state = INITIAL_STATE, action) => {
    if (action.type === 'LOGIN_SUCCESS'){
        return {...INITIAL_STATE,username : action.payload.username, role : action.payload.role}
    }
    else if (action.type === 'LOADING'){
        return{...INITIAL_STATE,loading : true}
    }
    else if (action.type === 'USER_NOT_FOUND'){
        return {...INITIAL_STATE,error  : 'Username atau Password salah'}
    } 
    else if (action.type === 'RESET_USER'){
        return INITIAL_STATE
    }
    else if(action.type === 'USERNAME_NOT_AVAILLABLE'){
        return {...INITIAL_STATE,error  : 'USERNAME NOT AVAILLABLE'}

    }
    else {
        return state
    }
    
}
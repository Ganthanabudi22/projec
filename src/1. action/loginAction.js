import axios from 'axios'
import Cookies from 'universal-cookie'


const objCookie = new Cookies()
export const onLogin = (paramsusername,paramspassword) => {
    //ini untuk membuat login menjadi true
    return(dispatch)=>{
        dispatch({
            type : 'LOADING'

        })
        //get dari data fake API json server
    axios.get('http://localhost:2000/user',{params:{username : paramsusername, password :paramspassword}})
    
    //kalo berhasil nge get dia masuk then
        .then ((res) => {
            console.log(res)
    //if user dan password sesuai masuk res.data ada isinya
            if (res.data.length > 0){
                dispatch(
                    {
                    type : 'LOGIN_SUCCESS',
                    payload : {
                    username: res.data[0].username,
                    role : res.data[0].role
                }
                    }
                ) 
            }else {
                dispatch ({
                    type : 'USER_NOT_FOUND',

                })
            }
            
        })
        .catch ((err) => {
            console.log(err)
            dispatch ({
                type : 'JARINGAN_ERROR'
            })
        })
    }

}
export const keepLogin  = (username) => {
    return (dispatch)=>{
        axios.get('http://localhost:2000/user',{ params : {username : username }})
        .then((res) => {
            if (res.data.length > 0 ) {
                dispatch({
                    type : 'LOGIN_SUCCESS',
                    payload : 
                    {
                    username : res.data[0].username,
                    role : res.data[0].role
                    }

                })
            }
        })
        .catch((err) => console.log(err))
    }
    
}
export const resetUser = () => {
    return {
        type : 'RESET_USER'
    }
}

export const userRegister = (username,password,email,phone) => {
    return (dispatch) => {
        dispatch({
            type : 'LOADING'
        })
        var dataBaru = {username,password,email,phone}
        axios.get('http://localhost:2000/user?username=' + dataBaru.username )
        .then((res)=>{
            if(res.data.length >0){
                dispatch({
                    type : 'USERNAME_NOT_AVAILLABLE'
                })
            }else{
                axios.post('http://localhost:2000/user', dataBaru)
                .then((res)=>{
                    dispatch({
                        type :'LOGIN_SUCCESS',
                        payload : username
                    },
                    objCookie.set('userData',username,{path : '/'})
                    )
                })
                .catch((err)=>console.log(err))
            }
        })
        .catch((err)=>{
            dispatch({
                type : 'JARINGAN_ERROR'
            })
        })
    }

}
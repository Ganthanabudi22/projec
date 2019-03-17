import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {onLogin} from './../1. action'
import Loader from 'react-loader-spinner'
import cookie from 'universal-cookie'
import gambar from './../suport/images/bg-01.jpg'
import Glogin from './../suport/images/1.jpg'
import './../suport/css/login.css'

const Terserah = new cookie()
class Login extends React.Component{

        // jalan ketika ada perubahan props yaitu global state
        componentWillReceiveProps(newProps){
            Terserah.set( 'userData',newProps.username,{path : '/'})
        }
    
        onBtnLoginClick = () =>{
            var username = this.refs.username.value
            var password = this.refs.password.value
            this.props.onLogin (username,password)
        }
        renderBtnOrLoading = () => {
            if (this.props.loading === true){
                return <Loader
                            type = "Puff"
                            color = "#00BFFF"
                            height = "50"
                            widht = "50"
                        />
            }
            else{
                return <button type="button" className="btn btn-primary" onClick={this.onBtnLoginClick} style={{width:"300px"}} ><i className="fas fa-sign-in-alt" /> Login</button>
                
            }
        }
        renderErrorMessege = () => {
            if(this.props.error !== ""){
                return  <div class="alert alert-danger mt-5" role="alert">
                            {this.props.error}
                        </div>
            }
        }


    render(){
        if(this.props.username !==""){
            return<Redirect to = '/'/>
        }
        return(
            <div className="login1" style={{backgroundColor:'rgb(219, 151, 49'}}>
                <div className='row '>
                    <div className = 'col-md-7'>
                        <img src={gambar} className="gambar" alt="login" />
                    </div>
                    <div className='col-md-4 justify-content-sm-center ml-auto mr-auto mt-3'>
                        < div className="login">
                                    <form>
                                        <div className="form-group row">
                                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label" style = {{marginTop:'50px'}} >Username</label>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control" id="staticEmail" placeholder="User Name" ref="username" style = {{marginTop:'50px'}} />
                                                </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                                <div className="col-sm-6">
                                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" ref="password"  />
                                                </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-12" style={{textAlign:'center'}}>
                                                {this.renderBtnOrLoading()}
                                                {this.renderErrorMessege()}
                                            </div>
                                        </div>
                                        <div className="btn my-auto"><p>Don't have Account? <Link to="/Signup" className="border-bottom">Sign Up!</Link></p></div>
                                            
                                </form>
                                </div>
                                <div className="form-group row">
                                                <div className="col-sm-6">
                                                    <img src={Glogin} className="Glogin" alt="login" />
                                                    
                                                </div>
                                        </div>
                        </div>
                </div>
            </div>

        )
    }
}
const mapsStateToProps = (state) => {
    return {
        username : state.user.username,
        loading : state.user.loading,
        error : state.user.error
    }
}
export default connect(mapsStateToProps,{onLogin}) (Login)
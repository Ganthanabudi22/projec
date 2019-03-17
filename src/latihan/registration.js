import React from 'react'
import './../suport/css/registration.css'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner'
import {userRegister} from './../1. action'



class SignUp extends React.Component {
    state = {error : ""}
    componentWillReceiveProps(propsBaru){
        if (propsBaru.error !== ""){
            this.setState({error : propsBaru.error})
        }
    }
    renderLoadingOrBtn = () => {
        if(this.props.loading === true) {
            return <Loader
                        type = "Puff"
                        color = "#00BFFF"
                        height = "50"
                        widht = "50"
                        />
        }else {
            return  <button type="button"  onClick={this.onBtnRegisterClick}   className="btn btn-primary" style={{width:"300px"}}  ><i className="fas fa-sign-in-alt" /> Sign Up!</button>
        }
    }

    renderErrorMassege = () => {
        
        if(this.state.error !==""){
            return  <div class="alert alert-danger mt-5" role="alert">
                        {this.state.error}
                    </div>
        }
    }


    onBtnRegisterClick = () => {
    var username = this.refs.username.value
    var password = this.refs.password.value
    var email = this.refs.email.value
    var phone = this.refs.phone.value

    if (username === ""||password === ""||email === ""||phone === ""){
        this.setState({error : "Harus Diisi Semua"})
    }else {
        this.props.userRegister(username,password,email,phone)
    }
}
    render(){
        return(
            <div className="register1"style={{backgroundColor:'rgb(219, 151, 49'}}>
                <div className="register justify-content-sm-center ml-auto mr-auto mt-3" >
                <div className="row justify-content-sm-center ml-auto mr-auto mt-3">
                    <form className="border mb-3" style={{padding:"20px", borderRadius:"5%"}} ref="formLogin">
                            <fieldset>
                                
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Username</label>
                                    <div className="col-sm-9">
                                    <input type="text" ref="username" className="form-control" id="inputUsername" placeholder="Username" required autoFocus/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Password</label>
                                    <div className="col-sm-9">
                                    <input type="password" ref="password" className="form-control" id="inputPassword" placeholder="Password" required />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                    <input type="email" ref="email" className="form-control" id="inputEmail" placeholder="Email@mail.com" required />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Phone</label>
                                    <div className="col-sm-9">
                                    <input type="phone" ref="phone" className="form-control" id="inputPhone" placeholder="Ex: 0857xxxxxxxx" required />
                                    </div>
                                </div>
                                
                                <div className="form-group row">
                                    <div className="col-12">
                                    {this.renderLoadingOrBtn()}
                                    {this.renderErrorMassege()}
                                    </div>
                                        
                                </div>
                                <div className="btn my-auto"><p>Already have Account? <Link to="/login" className="border-bottom">Login</Link></p></div>
                                
                            </fieldset>
                        </form>
                </div>
                </div>
                
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        user : state.user.username,
        loading : state.user.loading,
        error : state.user.error
    }
}
export default connect (mapStateToProps,{userRegister}) (SignUp)
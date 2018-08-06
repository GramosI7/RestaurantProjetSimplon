import React, { Component } from 'react';
import InputLogin from '../Components/Login/InputLogin';
import {connect} from "react-redux";
import {loginUser} from "../actions/authActions";
import {withRouter} from "react-router-dom";



class Login extends Component {

    state = {
        email: "",
        password: "",
        errors : {}
    }

    handleOnChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    submitLogin = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const login = {
            email: email,
            password: password
        }
        this.props.loginUser(login, this.props.history)
    }

  render() {
      const {errors} = this.props;
    return (
        <div>
            <InputLogin submitLogin={this.submitLogin} handleOnChange={this.handleOnChange} errors={errors}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {loginUser})(withRouter(Login));

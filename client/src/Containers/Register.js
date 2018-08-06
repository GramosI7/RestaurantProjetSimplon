import React, { Component } from 'react'
import InputRegister from '../Components/Register/InputRegister';
import {connect} from "react-redux";
import {registerUser} from "../actions/authActions";
import {withRouter} from "react-router-dom";

class Register extends Component {

  state = {
    pseudo: "",
    email: "",
    password: "",
    password2: "",
    errors: ""
}

handleOnChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
}

submitRegister = (e) => {
    e.preventDefault();
    const { pseudo, email, password, password2} = this.state;
    const register = {
        pseudo: pseudo,
        email: email,
        password: password,
        password2: password2
    }
    this.props.registerUser(register, this.props.history) 
    
}

  render() {
    return (
      <div>
        <InputRegister errors={this.props.errors} submitRegister={this.submitRegister} handleOnChange={this.handleOnChange} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {registerUser})(withRouter(Register));

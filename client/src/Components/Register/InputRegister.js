import React from 'react';
import classnames from "classnames";


const InputRegister = (props) => {
    const { errors } = props;
    return (
        <form onSubmit={props.submitRegister}>
            <h1 className="text-center">Register</h1>

            <div className="form-group">
                <label>Pseudo</label>
                <input onChange={props.handleOnChange} name="pseudo" type="text"  className={classnames("form-control", {"is-invalid" : errors.pseudo})} placeholder="Enter your pseudo"/>
                {errors.pseudo && (<div className="invalid-feedback">{errors.pseudo}</div>)}
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input onChange={props.handleOnChange} name="email" type="email" className={classnames("form-control", {"is-invalid" : errors.email})} placeholder="Enter your email"/>
                {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
            </div>

            <div className="form-group">
                <label>Password</label>
                <input onChange={props.handleOnChange} name="password" type="password" className={classnames("form-control", {"is-invalid" : errors.password})} placeholder="Enter a Password"/>
                {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input  onChange={props.handleOnChange} name="password2" type="password" className={classnames("form-control", {"is-invalid" : errors.password2})} placeholder="Confirm Password" />
                {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
            </div>

            <br/>
            <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
}

export default InputRegister;

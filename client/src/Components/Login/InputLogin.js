import React from 'react';
import classnames from "classnames";


const InputLogin = (props) => {
    const {errors} = props;
  return (
            <form onSubmit={props.submitLogin} className="container">
                <h1 className="text-center">Login</h1>
                <div className="form-group">
                    <label >Email address</label>
                    <input name="email" type="email" className={classnames("form-control", {"is-invalid" : errors.email})} placeholder="Enter email" onChange={props.handleOnChange}/>
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className={classnames("form-control", {"is-invalid" : errors.password})} placeholder="Password" onChange={props.handleOnChange}/>
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <button type="submit" className="btn btn-primary">Connect</button>
            </form>
  )
}

export default InputLogin

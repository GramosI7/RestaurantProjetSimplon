import React, { Component } from 'react';
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { getCurrentProfil, deleteAccount } from "../actions/profilActions";
import Spinner from '../commons/Spinner';
import ProfilAction from '../Components/Dashboard/ProfilAction';


export class Dashboard extends Component {

    componentDidMount() {
        this.props.getCurrentProfil();
    }

    onDeleteAccount = e => {
      this.props.deleteAccount()
    }

  render() {
    const {user} = this.props.auth;
    const {profil, loading} = this.props.profil;

    let dashboardContent;

    //have a profil
    if(profil === null || loading) {
      dashboardContent = <Spinner />
    } else {
      if(Object.keys(profil).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome <Link to={`/profil/${user.pseudo}`}>{user.pseudo}</Link></p>
            <ProfilAction />
            <div style={{marginBottom: "60px"}}>
              <button className="btn btn-danger" onClick={this.onDeleteAccount} >Delete Account</button>
            </div>
          </div>
        )
      } else {
        //no profil
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.pseudo}</p>
            <p>You have not yet setup a profil, please add some info.</p>
            <Link to="/create-profil" className="btn btn-lg btn-info">
              Create Profil
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        {dashboardContent}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  profil: state.profil,
  auth: state.auth
})

export default connect(mapStateToProps, { getCurrentProfil, deleteAccount })(Dashboard);

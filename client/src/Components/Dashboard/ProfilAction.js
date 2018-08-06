import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class ProfilAction extends Component {
  render() {
    return (
      <div className="btn-group mb-4" role="group">
            <Link to="/edit-profil" className="btn btn-light">
                <i className="fas fa-user-circle text-info mr-1"/>
                Edit Profil
            </Link>
      </div>
    )
  }
}

export default ProfilAction;

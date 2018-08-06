import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
            <h1 className="display-4">Bienvenu sur Simplon FOOD!</h1>
            <p className="lead">We’ll deliver the best food and ideas on the topics you care about most straight to your homepage, app, or inbox.</p>
            <hr className="my-4"/>
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
            <Link className="btn btn-success btn-lg" to="/register" >S'inscrire</Link>
            &nbsp;
            <Link className="btn btn-info btn-lg" to="/articles" >Voir la carte</Link>
        </div>
      </div>
    )
  }
}

export default Jumbotron

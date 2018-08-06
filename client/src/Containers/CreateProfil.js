import React, { Component } from 'react'
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import {createProfil} from "../actions/profilActions";
import TextFieldGroup from '../commons/TextFieldGroup';




export class CreateProfil extends Component {

    state = {
        nom: "",
        prenom: "",
        phone: "",
        region: "",
        ville: "",
        codePostal: "",
        rue: "",
        errors: {}        
    }

    onSubmit = e => {
        e.preventDefault();
        const profileData = {
            prenom: this.state.prenom,
            nom: this.state.nom,
            phone: this.state.phone,
            region: this.state.region,
            ville: this.state.ville,
            codePostal: this.state.codePostal,
            rue: this.state.rue,
        }
        this.props.createProfil(profileData, this.props.history);
    }

    onChange = e => {
        this.setState({[e.target.name] : e.target.value})
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }
 
  render() {
    const {errors} = this.state;

    return (
      <div className="row">
        <div className="col-md-8 m-auto">
            <h1 className="text-center">Create Your Profil</h1>
            <p className="lead text-center">
                Let's get some information to make your profile stand out
            </p>
            <small className="d-block pb-3">* = required fields</small>
            <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                placeholder="* Profil prenom"
                name="prenom"
                value={this.state.prenom}
                onChange={this.onChange}
                error={errors.prenom}
                info="Insert your prenom"
                />
                <TextFieldGroup
                placeholder="* Profil nom"
                name="nom"
                value={this.state.nom}
                onChange={this.onChange}
                error={errors.nom}
                info="Insert your nom"
                />
                
                <TextFieldGroup
                placeholder="* Phone Number"
                name="phone"
                value={this.state.phone}
                onChange={this.onChange}
                error={errors.phone}
                info="Insert your phone Number"
                />
                <TextFieldGroup
                placeholder="* Région"
                name="region"
                value={this.state.region}
                onChange={this.onChange}
                error={errors.region}
                info="Inserez votre Région"
                />
                <TextFieldGroup
                placeholder="* Ville"
                name="ville"
                value={this.state.ville}
                onChange={this.onChange}
                error={errors.ville}
                info="Inserez votre ville"
                />
                <TextFieldGroup
                placeholder="* Code Postal"
                name="codePostal"
                value={this.state.codePostal}
                onChange={this.onChange}
                error={errors.codePostal}
                info="Inserez votre Code Postal"
                />
                <TextFieldGroup
                placeholder="* Rue"
                name="rue"
                value={this.state.rue}
                onChange={this.onChange}
                error={errors.rue}
                info="Inserez votre rue"
                />

                <input type="submit" value="Submit" className="btn btn-info btn-block mt-4"/>
            </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    profil: state.profil,
    errors: state.errors
})

export default connect(mapStateToProps, {createProfil})(withRouter(CreateProfil));

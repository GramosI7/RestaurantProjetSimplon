import React, { Component } from 'react'
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import {createProfil, getCurrentProfil} from "../actions/profilActions";
import TextAreaFieldGroup from '../commons/TextFieldAreaGroup';
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

    componentDidMount = () => {
        this.props.getCurrentProfil()
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

        if(nextProps.profil.profil) {
            const profil = nextProps.profil.profil;

            this.setState({
                prenom: profil.prenom,
                nom: profil.nom,
                phone: profil.phone,
                region: profil.region,
                ville: profil.ville,
                codePostal: profil.codePostal,
                rue: profil.rue,
            })

        }
    }
 
  render() {
    const {errors} = this.state;


  
    return (
      <div className="row">
        <div className="col-md-8 m-auto">
            <h1 className="text-center">Edit Profil</h1>
            <small className="d-block pb-3">* = required fields</small>
            <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                placeholder="* Profil Prénom"
                name="prenom"
                value={this.state.prenom}
                onChange={this.onChange}
                error={errors.prenom}
                info="Insert your Prénom"
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
                placeholder="Phone"
                name="phone"
                value={this.state.phone}
                onChange={this.onChange}
                error={errors.phone}
                info="Could be yout own phone or one you work for"
                />
                <TextFieldGroup
                placeholder="Region"
                name="region"
                value={this.state.region}
                onChange={this.onChange}
                error={errors.region}
                info="Could be yout own region or one you work for"
                />
                <TextFieldGroup
                placeholder="Ville"
                name="ville"
                value={this.state.ville}
                onChange={this.onChange}
                error={errors.ville}
                info="Could be yout own ville"
                />
                <TextFieldGroup
                placeholder="Code Postal"
                name="codePostal"
                value={this.state.codePostal}
                onChange={this.onChange}
                error={errors.codePostal}
                info="Could be yout own codePostal or one you work for"
                />
                <TextAreaFieldGroup
                placeholder="Rue"
                name="rue"
                value={this.state.rue}
                onChange={this.onChange}
                error={errors.rue}
                info="Tell us a little about yourself"
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

export default connect(mapStateToProps, {createProfil, getCurrentProfil})(withRouter(CreateProfil));

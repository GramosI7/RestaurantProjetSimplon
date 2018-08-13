import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { addPlat } from "../actions/platActions";
import TextFieldGroup from '../commons/TextFieldGroup';
import TextFieldAreaGroup from '../commons/TextFieldAreaGroup';
import SelectListGroup from '../commons/SelectListGroup';


export class AddPlat extends Component {

    state = {
        title: "",
        body: "",
        price: "",
        typePlat: "",
        picture: "",
        errors: {}        
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    onSubmit = e => {
            e.preventDefault();
            const platData = {
                title: this.state.title,
                body: this.state.body,
                price: this.state.price,
                typePlat: this.state.typePlat,
                picture: this.state.picture
            }
            this.props.addPlat(platData, this.props.history)
    }

    onChange = e => {
        switch (e.target.name) {
            case 'picture':
              this.setState({ picture : e.target.files[0] });
              break;
            default:
              this.setState({ [e.target.name]: e.target.value });
          }
    }
    
  render() {
    const {errors} = this.state;

    const options = [
        { label: '* Selectionner le type du plat', value: 0 },
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Lunch', value: 'Lunch' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Others', value: 'Others' }
      ];


    return (
      <div className="row">
        <div className="col-md-8 m-auto">
            <h1 className="text-center">Ajouter un plat</h1>
            <p className="lead text-center">
                Ajoute les informations du plat.
            </p>
            <small className="d-block pb-3">* = required fields</small>
            <form  onSubmit={this.onSubmit}>
                <TextFieldGroup
                    placeholder="* Titre"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                    error={errors.title}
                    info="Inserez le titre du plat !"
                />
                <SelectListGroup
                    placeholder="Type du plat"
                    name="typePlat"
                    value={this.state.typePlat}
                    onChange={this.onChange}
                    options={options}
                    error={errors.typePlat}
                    info="Give us an idea of where you are at in your career"
                />
                <TextFieldGroup
                    placeholder="* Prix"
                    name="price"
                    value={this.state.price}
                    onChange={this.onChange}
                    error={errors.price}
                    info="Inserez le prix du plat"
                />
                <TextFieldAreaGroup
                    placeholder="* Descritption"
                    name="body"
                    value={this.state.body}
                    onChange={this.onChange}
                    error={errors.body}
                    info="Inserez la description du plat"
                />

                <input type="file" name="picture" onChange={this.onChange}/>
                
                <button type="submit" className="btn btn-info btn-block mt-4">Envoyer</button>
            </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, { addPlat })(withRouter(AddPlat));

import React, { Component } from 'react'
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import {createProfil, getCurrentProfil} from "../actions/profilActions";
import TextAreaFieldGroup from '../commons/TextFieldAreaGroup';
import TextFieldGroup from '../commons/TextFieldGroup';
import InputGroup from '../commons/InputGroup';
import SelectListGroup from '../commons/SelectListGroup';
import isEmpty from "../validation/is-Empty"



export class CreateProfil extends Component {

    state = {
        displaySocialInputs: false,
        firstName: "",
        lastName: "",
        company: "",
        website: "",
        location: "",
        bio: "",
        status: "",
        skills: "",
        twitter : "",
        facebook : "",
        linkedin : "",
        youtube : "",
        instagram :"",
        errors: {}        
    }

    componentDidMount = () => {
        this.props.getCurrentProfil()
    }

    onSubmit = e => {
        e.preventDefault();
        const profileData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            status: this.state.status,
            skills: this.state.skills,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            youtube: this.state.youtube,
            instagram: this.state.instagram
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
            console.log(profil);
            const skillsCSV = profil.skills.join(",");

            // if profil field doesnt exist, make empty string
            profil.company = !isEmpty(profil.company) ? profil.company : "";
            profil.website = !isEmpty(profil.website) ? profil.website : "";
            profil.location = !isEmpty(profil.location) ? profil.location : "";
            profil.bio = !isEmpty(profil.bio) ? profil.bio : "";
            profil.social = !isEmpty(profil.social) ? profil.social : {};
            profil.twitter = !isEmpty(profil.twitter) ? profil.twitter : "";
            profil.facebook = !isEmpty(profil.facebook) ? profil.facebook : "";
            profil.linkedin = !isEmpty(profil.linkedin) ? profil.linkedin : "";
            profil.instagram = !isEmpty(profil.instagram) ? profil.instagram : "";

            this.setState({
                firstName: profil.firstName,
                lastName: profil.lastName,
                company: profil.company,
                website: profil.website,
                location: profil.location,
                status: profil.status,
                skills: skillsCSV,
                bio: profil.bio,
                twitter: profil.social.twitter,
                facebook: profil.social.facebook,
                linkedin: profil.social.linkedin,
                youtube: profil.social.youtube,
                instagram: profil.social.instagram
            })

        }
    }
 
  render() {
    const {errors, displaySocialInputs} = this.state;

    let socialInputs;

    if(displaySocialInputs) {
        socialInputs = (
            <div>
                <InputGroup 
                placeholder="Twitter Profil URL"
                name="twitter"
                icon="fab fa-twitter"
                value={this.state.twitter}
                onChange={this.onChange}
                error={errors.twitter}
                />
                <InputGroup 
                placeholder="Facebook Profil URL"
                name="facebook"
                icon="fab fa-facebook"
                value={this.state.facebook}
                onChange={this.onChange}
                error={errors.facebook}
                />
                <InputGroup 
                placeholder="Linkedin Profil URL"
                name="linkedin"
                icon="fab fa-linkedin"
                value={this.state.linkedin}
                onChange={this.onChange}
                error={errors.linkedin}
                />
                <InputGroup 
                placeholder="Youtube Profil URL"
                name="youtube"
                icon="fab fa-youtube"
                value={this.state.youtube}
                onChange={this.onChange}
                error={errors.youtube}
                />
                <InputGroup 
                placeholder="Instagram Profil URL"
                name="instagram"
                icon="fab fa-instagram"
                value={this.state.instagram}
                onChange={this.onChange}
                error={errors.instagram}
                />
            </div>       
        )
    }

    const options = [
        { label: '* Select Professional Status', value: 0 },
        { label: 'Developer', value: 'Developer' },
        { label: 'Junior Developer', value: 'Junior Developer' },
        { label: 'Senior Developer', value: 'Senior Developer' },
        { label: 'Manager', value: 'Manager' },
        { label: 'Student or Learning', value: 'Student or Learning' },
        { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
        { label: 'Intern', value: 'Intern' },
        { label: 'Other', value: 'Other' }
      ];

    return (
      <div className="row">
        <div className="col-md-8 m-auto">
            <h1 className="text-center">Edit Profil</h1>
            <small className="d-block pb-3">* = required fields</small>
            <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                placeholder="* Profil firstName"
                name="firstName"
                value={this.state.firstName}
                onChange={this.onChange}
                error={errors.firstName}
                info="Insert your FirstName"
                />
                <TextFieldGroup
                placeholder="* Profil lastName"
                name="lastName"
                value={this.state.lastName}
                onChange={this.onChange}
                error={errors.lastName}
                info="Insert your lastName"
                />
                <SelectListGroup
                placeholder="Status"
                name="status"
                value={this.state.status}
                onChange={this.onChange}
                options={options}
                error={errors.status}
                info="Give us an idea of where you are in your career"
                />
                <TextFieldGroup
                placeholder="Website"
                name="website"
                value={this.state.website}
                onChange={this.onChange}
                error={errors.website}
                info="Could be yout own website or one you work for"
                />
                <TextFieldGroup
                placeholder="Company"
                name="company"
                value={this.state.company}
                onChange={this.onChange}
                error={errors.company}
                info="Could be yout own company or one you work for"
                />
                <TextFieldGroup
                placeholder="Location"
                name="location"
                value={this.state.location}
                onChange={this.onChange}
                error={errors.location}
                info="Could be yout own location"
                />
                <TextFieldGroup
                placeholder="Skills"
                name="skills"
                value={this.state.skills}
                onChange={this.onChange}
                error={errors.skills}
                info="Could be yout own skills or one you work for"
                />
                <TextAreaFieldGroup
                placeholder="Short Bio"
                name="bio"
                value={this.state.bio}
                onChange={this.onChange}
                error={errors.bio}
                info="Tell us a little about yourself"
                />

                <div className="mb-3">
                    <button type="button" onClick={() => {this.setState(prevState => ({displaySocialInputs : !prevState.displaySocialInputs}))}} className="btn btn-light">Add Social Network Links</button>
                    <span className="text-muted">Optional</span>
                </div>

                {socialInputs}

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

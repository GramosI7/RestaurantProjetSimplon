import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from "react-redux";
import {logoutUser} from "./actions/authActions";
import {clearCurrentProfil} from "./actions/profilActions";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import compose from "recompose/compose";



class Navbar extends Component {

    state ={
        cards: []
    }

    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.clearCurrentProfil();
        this.props.logoutUser();
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.cards) {
            console.log(nextProps.cards);
            this.setState({
                cards: nextProps.cards
            })
        }
    } 


  render() {
    const {isAuthenticated, user } = this.props.auth;
    const { classes } = this.props;

    
    const authLinks = (
        <ul className="navbar-nav mr-rigth mt-2 mt-lg-0">
            <NavLink to="/card-shop" className="nav-item">
                <IconButton aria-label="Cart" style={{marginRight: "20px", marginBottom: "10px" , height: "0px"}}>
                    <Badge badgeContent={this.state.cards.length} color="primary" classes={{ badge: classes.badge }}>
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </NavLink>
            <div className="dropdown">
            <img src={user.avatar} className="rounded-circle" style={{width: "25px", marginRight: "5px"}} alt={user.firstName}/>
                <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <NavLink to="/dashboard" className="dropdown-item">Profil</NavLink>
                    <a onClick={this.onLogoutClick} className="dropdown-item" href="">Logout</a>
                </div>
            </div>
        </ul>   
    )

    const guestLinks = (
        
        <ul className="navbar-nav mr-rigth mt-2 mt-lg-0">
        
        <li className="nav-item active">
            <NavLink to="/login" className="nav-link text-white">Connexion</NavLink><span className="sr-only">(current)</span>
        </li>
        <li className="nav-item active">
            <NavLink className="nav-link text-white" to="/register">Inscription</NavLink><span className="sr-only">(current)</span>
        </li>
    </ul>   
    )

    const guestAddArticle = (
        <li className="nav-item active">
            <NavLink className="nav-link text-white" to="/add">Ajouter un plat</NavLink><span className="sr-only">(current)</span>
        </li>  
    )

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger nav_css">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse container" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink to="/" className="nav-link text-white">Home</NavLink><span className="sr-only">(current)</span>
                        </li>
                        <li className="nav-item active ">
                            <NavLink className="nav-link text-white" to="/carte-restaurant">Restaurant menu</NavLink><span className="sr-only">(current)</span>
                        </li>
                        {isAuthenticated ? guestAddArticle : null}    
                    </ul>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        </div>
    )
  }
}


const styles = theme => ({
    badge: {
      top: 1,
      right: -15,
      // The border color match the background color.
      border: `2px solid ${
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
      }`,
    }
  });
  
const mapStateToProps = (state) => ({
    auth: state.auth,
    cards: state.card
})


export default compose(
    withStyles(styles),
    connect(
      mapStateToProps,
      {logoutUser, clearCurrentProfil}
    )
  )(Navbar);
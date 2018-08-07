import React, { Component } from 'react'
import {connect} from "react-redux";
import {getPlat} from "../actions/platActions";


class CarteRestaurant extends Component {

    state = {
        plats : []
    }

    componentDidMount = () => {
        this.props.getPlat();
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.plat.plats) {
            this.setState({
                plats: nextProps.plat.plats
            })
        }
    }

  render() {
      console.log(this.state)
    return (
      <div>
        <div>
        <img className="col-5" src="http://placehold.it/200X200" alt="photo_img" />
        <h3>Petit Déjeuner</h3>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    plats: state.plat
})

export default connect(mapStateToProps, {getPlat})(CarteRestaurant);

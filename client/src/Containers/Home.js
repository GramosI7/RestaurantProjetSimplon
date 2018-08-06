import React, { Component } from 'react'
import RecetteMoment from '../Components/Home/RecetteMoment';
import { Jumbotron } from '../Components/Home/Jumbotron';
import { connect } from "react-redux";
import {getPlat} from "../actions/platActions";

export class Home extends Component {
    
    state = {
        plats: []
    }

    componentDidMount = () => {
        this.props.getPlat();
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.plat.plats) {
            this.setState({ plats: nextProps.plat.plats })
            console.log(this.props.plat)
        }
    }

  render() {
    return (
      <div>
        <br/>
        <h1 className="text-center display-4">Simplon FOOD</h1>
        <RecetteMoment plats={this.state.plats} />
        <br/>
        <Jumbotron />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    plat: state.plat
})

export default connect(mapStateToProps, {getPlat})(Home);

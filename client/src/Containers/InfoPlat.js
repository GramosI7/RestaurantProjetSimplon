import React, { Component } from 'react';
import axios from "axios"

export class InfoPlat extends Component {

    state = {
        plat: {}
    }

    componentDidMount = () => {
        const {id} = this.props.match.params;
        console.log(id);
        
        axios.get(`/api/plat/${id}`)
            .then(response => {
                console.log(response);
                this.setState({ plat: response.data })
            })
            .catch(err => console.log(err))
    }

  render() {
    const {plat} = this.state;
    return (
      <div style={{width: "70%", margin: "auto"}}>
      <br/>
        <h1>{plat.title}</h1>
        <h3>Type du plat: {plat.typePlat}</h3>
        <p>{plat.body}</p>
        <h5>{plat.price}</h5>
        <button className="btn btn-info">Commander</button>
      </div>
    )
  }
}

export default InfoPlat

import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class Jumbotron extends Component {
  render() {
    return (
      <div class="row mb-5">
    <div class="col-md-12">
        <div class="card card-image" style={{backgroundImage: "url(https://i2.wp.com/la-communication.fr/wp-content/uploads/2018/04/food.jpg?fit=1920%2C1080)" }}>
            <div class="text-white text-center rgba-stylish-strong py-5 px-4">
                <div class="py-5">

                        <h6 class="orange-text font-bold"><i class="fa fa-camera-retro">&nbsp;</i>SimplonFood</h6>
                        <h2 class="card-title pt-3 mb-5 font-bold">SImplonFood</h2>
                        <p class="px-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
                            fugiat, laboriosam, voluptatem, optio vero odio nam sit officia
                            accusamus minus error nisi architecto nulla ipsum dignissimos.
                            Odit sed qui, dolorum!</p>
                        <Link to="/carte-restaurant" className="text-light btn peach-gradient"><i class="fa fa-clone left">&nbsp;</i>Views Carte</Link>

                </div>
            </div>
        </div>
    </div>
</div>
    )
  }
}

export default Jumbotron

import React from "react";
import { Link } from "react-router-dom";
import { addCard } from "../../actions/cardActions";
import { connect } from "react-redux";

class RecetteMoment extends React.Component {
 

  render() {
    return (
      <div>
        {this.props.plats.slice(0, 3).map((element, index) => {
          return (
            <Link
              key={index}
              className="text-dark nav-link"
              to={`info-plat/${element._id}`}
            >
              <li className="row">
                <img
                  className="col-5"
                  src="http://placehold.it/200X200"
                  alt="photo_img"
                />
                <div className="col-7">
                  <h3 className="text__ellipsis">{element.title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent euismod ultrices ante, ac laoreet nulla vestibulum
                    adipiscing. Nam quis justo in augue auctor imperdiet.
                  </p>
                  <button
                    // onClick={e => this.addCard(element)}
                    className="btn btn-info"
                  >
                    {element.price}
                  </button>
                </div>
              </li>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default connect(
  null,
  { addCard }
)(RecetteMoment);

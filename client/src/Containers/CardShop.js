import React, { Component } from "react";
import { connect } from 'react-redux';
import {removeCard} from "../actions/cardActions";
import {Link} from "react-router-dom"


export class cardShop extends Component {

  state = {
    cards: []
  }

  

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.cards.length) {
      this.setState({
        cards: nextProps.cards
      })
    } else if (Object.keys(nextProps.cards).length === 0) {
      this.setState({
        cards: []
      })
    }
  }

  removeCard = (element) => {
    this.props.removeCard(element);
  }

  render() {
    return (
      <div>
        <h1 className="text-center display-2">CardShop</h1>
        <div className="container mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Product</th>
                      <th scope="col">Available</th>
                      <th scope="col" className="text-center">Quantity
                      </th>
                      <th scope="col" className="text-right">
                        Price
                      </th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    

                    {this.state.cards.map((element, index) => {
                      return (
                        <tr key={index}>
                        <td>
                          <img src="https://dummyimage.com/50x50/55595c/fff" alt="img-product"/>{" "}
                        </td>
                        <td>{element.title}</td>
                        <td>In stock</td>
                        <td>
                          <input className="form-control" type="text" value="1" />
                        </td>
                        <td className="text-right">{element.price}</td>
                        <td className="text-right">
                          <button onClick={(e) => this.removeCard(element)} className="btn btn-sm btn-danger">
                            <i className="fa fa-trash" />{" "}
                          </button>{" "}
                        </td>
                      </tr>
                      )
                    })}
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>Sub-Total</td>
                      <td className="text-right">0 €</td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>Shipping</td>
                      <td className="text-right">2,50 €</td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td className="text-right">
                        <strong>0 €</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mb-2">
              <div className="row">
                <div className="col-sm-12  col-md-6">
                  <Link to="/carte-restaurant" className="btn btn-block btn-light">
                    Continue Shopping
                  </Link>
                </div>
                <div className="col-sm-12 col-md-6 text-right">
                  <button className="btn btn-lg btn-block btn-success text-uppercase">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.card
})

export default connect(mapStateToProps, {removeCard})(cardShop);

import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { getPlat } from "../actions/platActions";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { addCard } from "../actions/cardActions";


const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

class CarteInfo extends Component {
  state = {
    plats: []
  };

  componentDidMount = () => {
    this.props.getPlat();
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.plat.plats) {
      this.setState(
        {
          plats: nextProps.plat.plats
        },
        console.log(this.state.plats)
      );
    }
  };

  addCard = cardData => {
    this.props.addCard(cardData);
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.plats);

    return (
      <div>
        <h1 className="text-center display-2">
          {this.props.match.params.choice}
        </h1>
        <div className="row">
          {this.state.plats
            .filter(filter => {
              if (this.props.match.params.choice === "All") {
                return this.state.plats;
              } else {
                return filter.typePlat === this.props.match.params.choice;
              }
            })
            .map((element, index) => {
              return (
                <div key={index} className="col-4">
                    <Card className={classes.card}>
                      <Link to={{ pathname: `/info-plat/${element._id}` }}>
                        <CardMedia
                          className={classes.media}
                          image="https://media.istockphoto.com/photos/pizza-picture-id475998900?k=6&m=475998900&s=612x612&w=0&h=kLJtdiHykZaifArf4jcaGlX4PwZ4xT_JWIwQTHgQZHk="
                          title="Pizza"
                        />
                      </Link>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="headline"
                          component="h2"
                        >
                          {element.title}
                        </Typography>
                        <Typography component="p">{element.body}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="secondary">
                          {element.price}
                        </Button>
                        <Button onClick={(e) => {this.addCard(element)}} size="small" color="primary">
                          Command
                        </Button>
                      </CardActions>
                    </Card>

                  <br />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plat: state.plat
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { getPlat, addCard }
  )
)(CarteInfo);

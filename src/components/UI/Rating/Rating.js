import React, { Component } from "react";
import PropTypes from "prop-types";

class Rating extends Component {
  render() {
    const { rating } = this.props;

    const stars = Math.round(rating);
    let reviewsStars = [];
    for (let i = 1; i <= 5; i++) {
      i <= stars
        ? reviewsStars.push(<span key={i} className="fa fa-star checked" />)
        : reviewsStars.push(<span key={i} className="fa fa-star unchecked" />);
    }

    return <div>{reviewsStars}</div>;
  }
}

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number
};

import React, { Component } from "react";
import "./Tourlist.scss";
import Tour from "../Tour/Tour";
import { tourData } from "./tourData";

class TourList extends Component {
  state = {
    tours: tourData
  };
  handleDelete = id => {
    const sortedTours = this.state.tours.filter(tou => tou.id !== id);
    this.setState({
      tours: sortedTours
    });
  };

  render() {
    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map(tr => {
          return <Tour key={tr.id} toure={tr} removeTour={this.handleDelete} />;
        })}
      </section>
    );
  }
}

export default TourList;

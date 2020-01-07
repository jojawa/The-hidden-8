import React, { Component } from "react";
import "./Tourlist.scss";
import Tour from "../Tour/Tour";

class TourList extends Component {
  render() {
    const { tours } = this.props;

    return (
      <section className="tourlist">
        {tours.map(tr => {
          return (
            <Tour key={tr.id} toure={tr} removeTour={this.props.onDelete} />
          );
        })}
      </section>
    );
  }
}

export default TourList;

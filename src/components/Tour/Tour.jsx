import React, { Component } from "react";
import "./Tour.scss";

class Tour extends Component {
  state = {
    showInfo: false
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, beach, img, name, info } = this.props.toure;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="" />
          <span
            className="close"
            onClick={() => {
              this.props.removeTour(id);
            }}
          >
            <i className="icon ion-md-close-circle"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{beach}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="icon ion-md-arrow-dropdown-circle"></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}

export default Tour;

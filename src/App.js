import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import TourList from "./components/TourList/Tourlist";
import Footer from "./components/Footer/Footer";
import { tourData } from "./components/TourList/tourData";

class App extends Component {
  state = {
    tours: tourData,
    search: ""
  };
  handleDelete = id => {
    const sortedTours = this.state.tours.filter(tou => tou.id !== id);
    this.setState({
      tours: sortedTours
    });
  };
  handleSearch = e => {
    this.setState({
      search: e.target.value
    });
  };

  render() {
    const filterTours = this.state.tours.filter(tourData => {
      return tourData.beach
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    return (
      <main>
        <Navbar />
        <Searchbar onSearch={this.handleSearch} />
        <TourList tours={filterTours} onDelete={this.handleDelete} />
        <Footer />
      </main>
    );
  }
}

export default App;

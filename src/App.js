import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/Tourlist";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <TourList />
      <Footer />
    </main>
  );
}

export default App;

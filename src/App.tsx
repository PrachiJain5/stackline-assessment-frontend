import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Details from "./components/Details";
import SalesChart from "./components/SalesChart";
import { data } from "./data";


function App() {
  const cardElements = data.map((item) => {
    console.log(item.sales);
    return (
      <Details
        key={item.id}
      />
    );
  });
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="productOverview">
          <Sidebar />
        </div>
        <div className="productDetail">
          <SalesChart />    
          <section>{cardElements}</section>
        </div>
      </div>
    </div>
  );
}

export default App;

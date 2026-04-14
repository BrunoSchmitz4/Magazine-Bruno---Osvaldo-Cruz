import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Card from "./components/Card";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Card
        title="Produto 1"
        desc="Descrição do Produto 1"
        price={99.9}
        img={"https://media-cdn.bnn.in.th/234729/iPhone_14_Plus_Blue_PDP_Image_Position-1A_Blue_3-square_medium.jpg"}
      />
  </React.StrictMode>,
);

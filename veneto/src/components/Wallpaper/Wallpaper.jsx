import React from "react";
import "./Wallpaper_estrutura.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Wallpaper() {
  return (
    <div className="wallpaper">
      <img className="wallpaper-image" src="/img/wallpape_veneto_logo.jpg" alt="Logo Wallpaper" />

      <div className="coluna-tempopreparo-vermais">
        <div className="tempo-preparo">
          <i className="fa-solid fa-clock"></i>
          <p className="minutos"> 80 - 90 minutos </p>
        </div>
        <button className="botao-vermais"> Ver Mais </button>
      </div>

      <button className="botao-fechado-aberto"> Fechado para pedidos </button>

    </div>
  );
}

export default Wallpaper;
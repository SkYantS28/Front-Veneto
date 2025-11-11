import React from "react";
import "./Header_estrutura.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
  return (
    <div className="header">
      <div className="endereco">
        <div className="endereco-txt">Escolha um endereço</div>
        <div className="endereco-setaup">
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>

      <div className="icons">
        <div className="icon-pesquisar">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="icon-home">
          <i className="fa-solid fa-house"></i>
        </div>

        <div className="icon-profile">
          <i className="fa-solid fa-user"></i>
        </div>

        <div className="icon-config">
          <i className="fa-solid fa-gear"></i>
        </div>

        <div className="icon-reservations">
          <i className="fa-solid fa-pen-to-square"></i>
        </div>

        <div className="icon-cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="valor">00,00</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

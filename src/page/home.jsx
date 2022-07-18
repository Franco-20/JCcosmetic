import { Button } from "@mui/material";
import React from "react";

// IMAGENES
import portada from "../assets/images/maqueta/portada.jpg";
import producto from "../assets/images/maqueta/envases10.jpg";

// IMPORTACIONES}
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const home = () => {
  return (
    <>
      <div className="bg-img">
        <h2>Bienvenido</h2>
        <h1>
          Jc<span>Cosmetic</span>
        </h1>
        <img src={portada} alt="Imagen de portada" />
      </div>

      <div className="container">
        <div className="seccion-tarjetas">
          <div className="tarjetas">
            <div className="box">
              <div className="imgBx">
                <img src={producto} alt="Imgen de producto" />
              </div>
              <div className="content">
                <div>
                  <h2>Envases Pet</h2>
                  <a href="/Productos">
                    {" "}
                    <Button>Ver mas</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tarjetas">
            <div className="box">
              <div className="imgBx">
                <img src={producto} alt="Imgen de producto" />
              </div>
              <div className="content">
                <div>
                  <h2>Gatillos Profesional</h2>
                  <a href="/Productos">
                    {" "}
                    <Button>Ver mas</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tarjetas">
            <div className="box">
              <div className="imgBx">
                <img src={producto} alt="Imgen de producto" />
              </div>
              <div className="content">
                <div>
                  <h2>Convos</h2>
                  <a href="/Productos">
                    {" "}
                    <Button>Ver mas</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
      {/* Seccion metodos */}
      <div className="seccion-metodos">
          <div>           
            <p>
            <AccountBalanceWalletIcon/>
              <b>Opciones de pago</b>
            </p>
            <p>Visa, Mastercar, Transferencia, Mercado Pago</p>
          </div>
          <div>
            <p>
              <ThumbUpIcon/>
              <b>100% Confiables</b>
            </p>
            <p>
              Nos aseguramos que todos <br/>nuestros productos sean de la mejor
              calidad
            </p>
          </div>
          <div>
            <p>
              <LocalShippingIcon/>
              <b>Metodos de Envios</b>
            </p>
            <p>
              Nos aseguramos de enviar nuestros productos con <br/>
              transportes de confiaza y mas conviniente al cliente
            </p>
          </div>
        </div>
    </>
  );
};
export default home;

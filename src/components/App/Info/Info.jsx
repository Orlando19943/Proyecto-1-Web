import React from "react";
import Cards from "./Cards";
import logo from "../../../imagenes/badges.png";
import pc from "../../../imagenes/tryhackme-in-browser.svg";
import network from "../../../imagenes/network_layout.png";
import book from "../../../imagenes/tryhackme_book.svg";
import university from "../../../imagenes/Used by/UoP.png";
import cyber from "../../../imagenes/Used by/cyberready.png";
import comptia from "../../../imagenes/Used by/comptia.png";
import context from "../../../imagenes/Media/contextis.png";
import enterprise from "../../../imagenes/Media/enterprisetimes.png";
import infosec from "../../../imagenes/Media/infosec-magazine.png";
import secjuice from "../../../imagenes/Media/secjuice.png";
import Carousel from "./carousel";

export default function Principal() {
  return (
    <div className="container">
      <div className="info">
        <div className="row">
          <img className="col-3" src={logo} alt="Logo" width="auto" />
          <div className="col">
            <p className="titulo1">Byte-sized gamified lessons</p>
            <div className="lineaVerde" />
            <p className="texto1">
              Learning cybersecurity on TryHackMe is fun and
              addictive. Earn points by answering questions, taking on challenges
              and maintain your hacking streak through short lessons.
            </p>
          </div>
        </div>
        <hr className="separacion" />
        <div className="row">
          <div className="col">
            <p className="titulo1">Learn, Practice and Complete</p>
            <div className="lineaVerde" />
            <p className="texto1">
              Learn by following a structured pathway or guide your
              own learning. Start your own private hackable machines
              (no sharing) and use your skills in a real-world
              environment by completing guided, objective-based tasks.
            </p>
          </div>
          <div className="col">
            <Carousel />
          </div>
        </div>
        <hr className="separacion" />
        <div className="row">
          <img className="col-3" src={pc} alt="Logo" width="auto" />
          <div className="col">
            <p className="titulo1">Through the browser</p>
            <div className="lineaVerde" />
            <p className="texto1">
              Access our labs through a browser-based Kali machine.
              No complicated setup, get hacking straight away all
              from your browser.
            </p>
          </div>
        </div>
        <hr className="separacion" />
        <div className="row ">
          <div className="col">
            <p className="titulo3">Community</p>
            <div className="lineaVerde" />
            <p className="texto1">
              Connect with other like-minded hackers and be a part
              of our community.
            </p>
          </div>
          <div className="col-5 contenedorCirculo">
            <div className="circulo">
              <p>
                430k
              </p>
            </div>
            <div className="titulo2">
              Registered Users
            </div>
          </div>
        </div>
        <hr className="separacion" />
        <div className="row">
          <div className="col-4 imgNetwork">
            <img className="img-fluid" src={network} alt="Logo" width="auto" />
          </div>
          <div className="col">
            <p className="titulo1">Realistic Networks</p>
            <div className="lineaVerde" />
            <p className="texto1">
              Start vulnerable networks and dive into an isolated
              environment to further develop your network security
              skills.
            </p>
          </div>
        </div>
        <hr className="separacion" />
        <div className="row">
          <div className="col-4 imgBook">
            <img className="img-fluid" src={book} alt="Logo" width="1000" />
          </div>
          <div className="col textoBook">
            <p className="titulo1">TryHackMe for Teachings</p>
            <div className="lineaVerde" />
            <p className="texto1">
              Bring TryHackMe into the classroom. Teachers can
              assign students customizable labs and tasks that align with their course.
              Manage assignments and monitor user progress.
            </p>
            <a className="texto2" href="#/">
              TEACHING USING TRYHACKME
            </a>
          </div>
        </div>
        <hr className="separacion" />
        <div className="row tituloC">
          <div className="titulo1">
            Other Offerings
          </div>
          <div className="lineaVerde2" />
        </div>
        <div className="row textoC">
          <div className="col">
            <div className="titulo1">
              Other Offerings
            </div>
            <p className="texto1">
              We can create and host ability-specific challenges around
              security areas of your choice. For example, HackBack was
              our nationwide UK University challenge.
            </p>
          </div>
          <div className="col">
            <div className="titulo1">
              Create a virtual lab
            </div>
            <p className="texto1">
              Upload your own virtual machines and create your
              own room with tasks to distribute and monitor user
              progress. Perfect for hosting training classes -
              <a href="#/"> Learn more</a>
            </p>
          </div>
        </div>
        <hr className="separacion" />
        <div className="row textoC">
          <div className="col">
            <div>
              <div className="titulo1">
                Used By
              </div>
              <div className="lineaVerde2" />
            </div>
            <div className="row usedBy">
              <img className="col-6 col-sm-3 col-lg-2" src={university} alt="Logo" width="auto" />
              <img className="col-8 col-sm-5 col-lg-4" src={cyber} alt="Logo" width="auto" />
              <img className="col-8 col-sm-7 col-lg-4" src={comptia} alt="Logo" width="auto" />
            </div>
          </div>
          <div className="col">
            <div>
              <div className="row">
                <div className="titulo1">
                  Media
                </div>
              </div>
              <div className="lineaVerde2" />
            </div>
            <div className="row usedBy">
              <img className="col-lg-6 col-sm col-8" src={context} alt="Logo" width="auto" />
              <img className="col-lg-6 col-sm col-8" src={enterprise} alt="Logo" width="auto" />
              <img className="col-lg-6 col-sm col-8" src={infosec} alt="Logo" width="auto" />
              <img className="col-lg-6 col-sm col-8" src={secjuice} alt="Logo" width="auto" />
            </div>
          </div>
        </div>
        <hr className="separacion" />
        <div className="container">
          <Cards />
        </div>
      </div>
    </div>
  );
}

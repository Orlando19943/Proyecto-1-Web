import React from "react";
import introduce from "../../../imagenes/cards/1.png";
import owasp from "../../../imagenes/cards/10daysofowasp-2.png";
import started from "../../../imagenes/cards/getting-started-2-2.png";
import hackback from "../../../imagenes/cards/IMG_20191026_101233.jpg";
import modules from "../../../imagenes/cards/modules.png";
import ghost from "../../../imagenes/cards/series-for-ghost-2-3.png";
import hackme from "../../../imagenes/cards/TryHackMe-100k-Users.png";

export default function Principal() {
  return (
    <div className="row textoC cards">
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <img src={started} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">How to get into Cyber Security</h5>
            <p className="card-text">Take your first steps into cyber security by understanding where to start, the typical security jobs and how to work towards your dream career in cyber.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <img src={modules} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Working With UCC To Make It Easier To Teach Security</h5>
            <p className="card-text">Within a matter of minutes trainers could pick from over 300 virtual security labs on TryHackMe and customise it to their needs. </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <img src={ghost} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Releasing Series</h5>
            <p className="card-text">We are releasing Series, a collection of rooms that share a common theme; whether this be a set of capture the flag challenges or rooms that explain se</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <img src={introduce} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Introducing TryHackMe Networks</h5>
            <p className="card-text">We are releasing networks, where you can deploy your own network in TryHackMe rooms and learn new concepts that were previously not possible with a sin</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <img src={owasp} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">OWASP 10 Days of Challenges</h5>
            <p className="card-text">Starting on the 13th July 8pm BST, learn one of the OWASP vulnerabilities every day for 10 days in a row.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <img src={hackme} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Hitting 100k Signups</h5>
            <p className="card-text">Today (15/06/2020), TryHackMe hit 100,000 registered members, which is an incredible milestone. From April to June, we have had 50,000 new registrations</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <img src={hackback} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">HackBack2 2019</h5>
            <p className="card-text">We ran the first HackBack [https://tryhackme.com/hackback2] in March 2019 and realised that it was a really good way to introduce students to cyber se</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Modal from "react-modal";
import "./CountryDetails.css";
import uuid from "react-uuid";

function CountryDetails({ countryData }) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [code, setCode] = useState("");
  function openDetailModal(code) {
    setCode(code);
    setisModalOpen(true);
  }
  const closeModal = () => {
    setisModalOpen(false);
  };
  Modal.setAppElement("#root");
  return (
    <div className="country">
      {countryData.map((country) => (
        <div className="country__container" key={uuid()}>
          <div className="country__name">
            <h3>{country.name}</h3>
          </div>
          <img
            src={`https://www.countryflags.io/${country.alpha2Code}/shiny/64.png`}
            alt=""
          />
          <div className="country__moreDetail">
            <button
              onClick={() => {
                openDetailModal(country.alpha2Code);
              }}
            >
              More Details
            </button>
          </div>
          {isModalOpen && (
            <Modal isOpen={isModalOpen}>
              <div className="country__flag">
                <img
                  src={`https://www.countryflags.io/${code}/shiny/64.png`}
                  alt=""
                />
              </div>
              <button onClick={closeModal}>close</button>
            </Modal>
          )}
        </div>
      ))}
    </div>
  );
}

export default CountryDetails;

import { useParams } from "react-router-dom";
import "./Hotel.css";
import hotels from "../../common/hotels.json";
import { FaMapMarkerAlt, FaSwimmer, FaWifi, FaSpa } from "react-icons/fa";
import { CiLock, CiParking1 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";

function Hotel() {
  const { id } = useParams();
  const hotel = hotels.find((hotel) => hotel.id === +id);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>
      <div className="hotel">
        <img src={hotel.imageUrl} className="slika" />
        <div className="title">
          <h1>{hotel.title}</h1>
          <div
            width={"50%"}
            style={{
              display: "flex",
              gap: "1em",
              height: "30%",
            }}
          >
            <FaMapMarkerAlt className="icon" />
            <h3>Trade Center, Dubai 117835, United Arab Emirates</h3>
          </div>
          <div className="sadrzaj">
            <h2>
              This hotel represents the essence of life combined with purity
            </h2>
            <ul>
              <li className="li">
                <FaSwimmer className="icons" />
                Swimming pool
              </li>
              <li className="li">
                <FaWifi className="icons" />
                Wi-Fi
              </li>
              <li className="li">
                <CiLock className="icons" />
                Locks on Card
              </li>
              <li className="li">
                <CiParking1 className="icons" />
                Free Parking
              </li>
              <li className="li">
                <FaSpa className="icons" />
                Spa & Wellness
              </li>
            </ul>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <button>Reserve</button>
              <button
                onClick={() => {
                  localStorage.setItem(
                    "like",
                    `svidja mi se hotel sa id_jem ${id}`
                  );
                }}
              >
                {isFavorite ? (
                  <FaHeart fill="red" className="heart-icon" size={38} />
                ) : (
                  <FaRegHeart fill="red" className="heart-icon" size={38} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hotel;

// Domaci zadatak:

// Obnoviti sledece metode kod nizova:

// forEach()
// map()
// filter()
// reduce()
// find()
// findIndex()

/* eslint-disable react/prop-types */
import { useLocation, useParams } from "react-router-dom";
import "./Hotel.css";
import hotels from "../../common/hotels.json";
import { FaMapMarkerAlt, FaSwimmer, FaWifi, FaSpa } from "react-icons/fa";
import { CiLock, CiParking1 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useState, useEffect } from "react";

function Hotel() {
  const { id } = useParams();
  const { state } = useLocation();
  const [updatedFavoriteHotels, setUpdatedFavoriteHotels] = useState(
    state.favoriteHotels
  );
  const [isFavoriteState, setIsFavoriteState] = useState(state.isFavorite);

  useEffect(() => {
    localStorage.setItem(
      "favoriteHotels",
      JSON.stringify(updatedFavoriteHotels)
    );
  }, [updatedFavoriteHotels]);

  const hotel = hotels.find((hotel) => hotel.id === +id);

  const handleFavoriteToggle = () => {
    if (!isFavoriteState) {
      const newFavoriteHotels = [...updatedFavoriteHotels, hotel.id];
      setUpdatedFavoriteHotels(newFavoriteHotels);
      setIsFavoriteState(true);
    } else {
      const newFavoriteHotels = updatedFavoriteHotels.filter(
        (hotelId) => hotelId !== hotel.id
      );
      setUpdatedFavoriteHotels(newFavoriteHotels);
      setIsFavoriteState(false);
    }
  };

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
              <button onClick={handleFavoriteToggle}>
                {isFavoriteState ? (
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

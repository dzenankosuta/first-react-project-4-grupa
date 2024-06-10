/* eslint-disable react/prop-types */
import "./TeamCard.css";
import { useEffect, useState } from "react";
export default function TeamCard(props) {
  const [showMore, setShowMore] = useState(false);
  const [teamDescription, setTeamDescription] = useState("");

  useEffect(() => {
    if (showMore) {
      setTeamDescription(
        "Ovaj tim je osnovan 1886. godine. Najtrofejniji je klub u engleskoj..."
      );
    } else {
      setTeamDescription("");
    }
  }, [showMore]);
  return (
    <div
      className={showMore ? `team-card` : `team-card`}
      style={{ height: showMore ? 170 : 80 }}
    >
      <h2 className="h2">{props.name}</h2>
      <p className="p">{props.points}</p>
      <p className="p">{props.matches}</p>
      <p className="p">{props.wins}</p>
      <p className="p">{props.draws}</p>
      <p className="p">{props.losses}</p>
      <p className="p" onClick={props.onclick}>
        <button onClick={props.deleteTeam} className="delete-btn show">
          Remove
        </button>
      </p>
      <p className="p">
        <button onClick={() => setShowMore(!showMore)} className="show">
          {showMore ? "Show less" : "Show more"}
        </button>
      </p>
      {/* {showMore ? (
        <p className="p text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          eveniet, sequi consectetur doloribus dicta eos! Iste obcaecati alias
          repudiandae asperiores quia quo nihil optio necessitatibus ipsa
          laudantium? Blanditiis sapiente nam maxime delectus eveniet totam
          dolorum? Iusto voluptatibus repellendus mollitia, delectus corrupti
          odio sapiente praesentium assumenda consequatur, aut quaerat rerum
          neque!
        </p>
      ) : null} */}
      {showMore && <p className="p text">{teamDescription}</p>}
    </div>
  );
}

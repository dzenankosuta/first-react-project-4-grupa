/* eslint-disable react/jsx-key */
import teams from "../../common/teams.json";
import TeamCard from "../../components/Cards/TeamCard/TeamCard";
import "./Teams.css";

export default function Teams() {
  return (
    <>
      <div className="list">
        {teams.map((value) => {
          return (
            <TeamCard
              name={value["team_name"]}
              points={`${value["points"]}pts`}
              wins={value.wins}
              loses={value.loses}
              draws={value.draws}
              losses={value.losses}
              matches={value.matches_played}
            />
          );
        })}
      </div>
    </>
  );
}

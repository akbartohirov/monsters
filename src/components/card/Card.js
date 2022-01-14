import React from "react";
import "./Card.style.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="" />
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default Card;

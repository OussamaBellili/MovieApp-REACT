import React from "react";
import Rate from "./Rate";
const Card = ({ element }) => {
  return (
    <div>
      <div class="card" style={{ width: "18rem;" }}>
        <img src={element.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{element.title}</h5>
          <p class="card-text">{element.year}</p>
          <Rate starIndex={() => {}} rate={element.rate} />
        </div>
      </div>
    </div>
  );
};
export default Card;

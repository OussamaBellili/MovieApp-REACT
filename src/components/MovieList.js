import React from "react";
import Card from "./Card";

const MovieList = props => {
  return (
    <div style={{ display: "flex" }}>
      {props.movies
        .filter(
          e =>
            e.title.toLowerCase().includes(props.searchVal.toLowerCase()) &&
            e.rate >= props.rateVal
        )
        .map(e => (
          <Card element={e} />
        ))}
    </div>
  );
};
export default MovieList;

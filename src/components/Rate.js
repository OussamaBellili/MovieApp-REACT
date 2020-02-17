import React from "react";

const Rate = props => {
  const stars = x => {
    let star = [];
    for (let i = 0; i < 5; i++) {
      if (i < x) {
        star.push(<span onClick={() => props.starIndex(i + 1)}>★</span>);
      } else {
        star.push(<span onClick={() => props.starIndex(i + 1)}>☆</span>);
      }
    }
    return star;
  };
  return <div>{stars(props.rate)}</div>;
};
export default Rate;

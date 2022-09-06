import React from "react";
import Loading from "./../Loader/Loading";
import style from "./Card.module.css";
import CardList from "./CardList";
const Card = ({ loading, apidata }) => {
  return (
    <div className={style.cardContainer}>
      {/* <h4>CHARACTERS</h4> */}
      {loading && <Loading />}
      {loading || apidata.length > 1 ? (
        <div className={style.card}>
          {apidata.map((item) => (
            <CardList key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <h4>no characters found</h4>
      )}
    </div>
  );
};

export default Card;

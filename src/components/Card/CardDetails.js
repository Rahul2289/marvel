import { useState, useEffect } from "react";
import style from "./Card.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./../Loader/Loading";

const CardDetails = ({ catogery }) => {
  const [list, setList] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(
        `https://gateway.marvel.com/v1/public/${catogery}/${id}?ts=1&apikey=${process.env.key}&hash=${process.env.hash}`
      );

      setList(res.data.data.results);
      setLoading(false);
      return res.data.data.results;
    };
    fetchApi();
  }, [id, catogery]);

  return (
    <div className={style.cardDetailsContainer}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          {list.map((data) => {
            return (
              <div key={data.id} className={style.wrapper}>
                <img
                  src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                  alt={data.name}
                />
                <div className={style.info}>
                  <h1>{data.name || data.title}</h1>
                  <p>
                    {data.description ? data.description : "NO DESCRIPTION"}
                  </p>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default CardDetails;

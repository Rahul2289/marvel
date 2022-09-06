import style from "./Filter.module.css";

const Filters = ({ catogery, setcatogery }) => {
  return (
    <div className={style.filterContainer}>
      <div className={style.btnGroup}>
        <button
          onClick={() => setcatogery("characters")}
          className={catogery === "characters" ? style.active : ""}
        >
          Characters
        </button>
        <button
          onClick={() => setcatogery("comics")}
          className={catogery === "comics" ? style.active : ""}
        >
          comics
        </button>
        <button
          onClick={() => setcatogery("series")}
          className={catogery === "series" ? style.active : ""}
        >
          series
        </button>
      </div>
    </div>
  );
};

export default Filters;

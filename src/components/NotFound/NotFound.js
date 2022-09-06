import notfound from "../../accets/images/notFound.svg";
import style from "./Notfound.module.css";
const NotFound = () => {
  return (
    <div className={style.container}>
      <img src={notfound} alt="404error" />
    </div>
  );
};

export default NotFound;

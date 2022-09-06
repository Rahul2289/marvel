import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";
const CardList = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ width: 320 }}
      className={style.cardWrapper}
      onClick={() => navigate(`/details/${data.id}`)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name || data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardList;

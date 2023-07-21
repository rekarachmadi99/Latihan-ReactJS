import { useContext } from "react";
import { GlobalContext } from "../context";
const ArticleStatus = ({ isNew }) => {
  return isNew && " Baru";
};

const NewArticle = () => {
  return " --Baru!";
};

const Article = (props) => {
  const user = useContext(GlobalContext);
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date: {props.date}, Tags: {props.tags.join(", ")}
        {/* Dengan Ternary */}
        {props.isNew && <NewArticle />}
        {/* Dengan Component */}
        <ArticleStatus isNew={props.isNew} />
      </small>
      <div>
        <small>Ditulis oleh {user.username}</small>
      </div>
    </>
  );
};

export default Article;

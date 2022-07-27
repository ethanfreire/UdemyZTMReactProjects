import "./card-list.styles.css";
import CardContainer from "../card-container/card-container.component.jsx";
const CardList = ({ monsters }) => {
  return (
    <div className="card-list" >
      {monsters.map((monster) => {
        return <CardContainer monster={monster}></CardContainer>;
      })}
    </div>
  );
};
export default CardList;

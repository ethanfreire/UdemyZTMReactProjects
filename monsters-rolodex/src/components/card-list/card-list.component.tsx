import "./card-list.styles.css";
import CardContainer from "../card-container/card-container.component";
import { Monster } from "../../utils/monster.utils";

type CardListProps = {
  monsters: Array<Monster>;
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return (
          <CardContainer key={monster.id} monster={monster}></CardContainer>
        );
      })}
    </div>
  );
};
export default CardList;

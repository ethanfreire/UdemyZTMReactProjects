import { Component } from "react";
import "./card-list.styles.css";
import CardContainer from "../card-container/card-container.component.jsx";
class CardList extends Component {
  render() {
    console.log(this.props.monsters);
    console.log("render from cardlist");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardContainer monster={monster}></CardContainer>;
        })}
      </div>
    );
  }
}
export default CardList;

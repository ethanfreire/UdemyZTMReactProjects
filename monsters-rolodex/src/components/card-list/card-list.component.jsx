import { Component } from "react";

class CardList extends Component{
    render(){
        console.log(this.props.monsters);
        console.log('render from cardlist');
        const{monsters} = this.props;
        return(
            <div>
                {
                    monsters.map(monsters => (
                        <h1 key= {monsters.id}>{monsters.name}</h1>
                    ))
                }
            </div>
        )
    }

}
export default CardList;
import {useState} from 'react';
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {

  const [] = useState();
  const onSearchChange = (event) => {
    console.log(event.target.value);
        const searchField = event.target.value.toLowerCase();
        this.setState(() => {
          return {
            searchField: searchField,
          };
  }


  return(
    <div className="App">
      <h1 className="app-title"> Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
    </div>
  );
}
// class App extends Component {
//   constructor() {
//     console.log("constructor");
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//       testVariable: ""
//     };
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return {
//         searchField: searchField,
//       };
//     });
//   };

//   render() {
//     //console.log("render");
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className="monsters-search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }

export default App;

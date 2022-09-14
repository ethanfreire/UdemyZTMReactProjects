import { useState, useEffect ,ChangeEvent} from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";
import { Monster } from "./utils/monster.utils";



const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Array<Monster>>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log("render");


  useEffect(() => {
    const url: string = "https://jsonplaceholder.typicode.com/users";
    const fetchUsers = async() => {
      const users = await getData< Array<Monster> >(url);
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
    console.log("fired");
   

  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>):void => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title"> Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
export default App;

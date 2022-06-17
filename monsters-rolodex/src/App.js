import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name:{firstName: 'Someone', lastName:'New'},
      work: 'Bank'
    };
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Howdy {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.work}
        </p>
        <button onClick={() => this.setState({name:{firstName:'You', lastName:'Tube'}})}>
          Change Name
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;

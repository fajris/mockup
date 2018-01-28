import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import Search from './components/Search';
import data from './components/Data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFiltered: true
    };
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <Search check={this.state.isFiltered} />
        <Table data={data} />
      </div>
    );
  }
}

export default App;

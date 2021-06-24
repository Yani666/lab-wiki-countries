
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Routes from './Routes'
import CountriesList from './components/CountriesList';
import DataCountries from './countries.json'



class App extends Component{

  state={
    listC:DataCountries
  }
  render(){

    const {listC} = this.state
    console.log("que es estoo", listC)

    return(
    <div className ="App">

      <Navbar/>
      <div className="row-app">
      <CountriesList countries={listC}/>
      <Routes/>
      </div>
    </div>
    )
  }
}

export default App;

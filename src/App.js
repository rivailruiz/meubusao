import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';


  
  class App extends Component {
    state = {
      veiculos: [],
      mensagem: ''
    }
    componentDidMount(){
      axios.get(`http://zn4.m2mcontrol.com.br/api//forecast/lines/load/forecast/lines/fromPoint/7986/159`)
      .then(res => {
        console.log(res.data)
        if(!res.data.length){
          this.setState({mensagem: 'Sem ônibus vindo :('})
        }else {
          this.setState({mensagem: 'Ônibus a caminho:'})
        }
        const veiculos = res.data;
        this.setState({ veiculos });
      })
    }
    render() {
    return (
      <div className="App">
        <h1 className="titulo">{this.state.mensagem}</h1>
        <ul>
          { this.state.veiculos.map(veiculo => <li><span>{veiculo.nameLine} em: </span>{veiculo.arrivalTime}min</li>)}
        </ul>
      </div>
    );
  }
}

export default App;

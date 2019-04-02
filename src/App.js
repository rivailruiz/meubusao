import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';


  
  class App extends Component {
    state = {
      veiculos: [],
      mensagem: '',
      escondeLoading: false,
      local: '',
      localSelecionado: '7986'
    }
    getRoute = (local) => {
      this.setState({escondeLoading:false})
      axios.get('https://cors-anywhere.herokuapp.com/http://zn4.m2mcontrol.com.br/api//forecast/lines/load/forecast/lines/fromPoint/'+local+'/159')
      .then(res => {
        // var img = document.getElementsByClassName('img')[];
        // img.style.display = 'none';
        console.log(res.data)
        this.setState({escondeLoading:true})
        if(!res.data.length){
          this.setState({mensagem: 'Sem ônibus vindo :('})
        }else {
          this.setState({mensagem: 'Ônibus a caminho:'})
        }
        const veiculos = res.data;
        this.setState({ veiculos });
      })
    }
    onChangeLocal = (e) => {
      this.getRoute(e.target.value)
    }

    
 
    componentDidMount(){
      // axios.get(`https://cors-anywhere.herokuapp.com/http://zn4.m2mcontrol.com.br/api//forecast/lines/load/forecast/lines/fromPoint/7986/159`)
      // .then(res => {
      //   // var img = document.getElementsByClassName('img')[];
      //   // img.style.display = 'none';
      //   console.log(res.data)
      //   if(!res.data.length){
      //     this.setState({mensagem: 'Sem ônibus vindo :('})
      //   }else {
      //     this.setState({mensagem: 'Ônibus a caminho:'})
      //   }
      //   const veiculos = res.data;
      //   this.setState({ veiculos });
      // })
      this.setState({escondeLoading:true})
    }
    render() {
      
    return (
      <div className="App">
      {this.state.escondeLoading ? '' : <img src="loading.gif" className="img"/> }
        <h4 className={this.state.escondeLoading ? '' : 'hide'}>Onde você está?</h4>
        <select className={this.state.escondeLoading ? '' : 'hide'} onChange={this.onChangeLocal} >
          <option>Selecione uma opção</option>
          <option value="7986">Associação de moradores Anaia</option>
          <option value="7573">Passarela Arsenal (sentido Niterói)</option>
          <option value="69827">CIEP Zuzu Angel (sentido Anaia)</option>
        </select>
        <h3 className="titulo" className={this.state.escondeLoading ? '' : 'hide'}>{this.state.mensagem}</h3>
        <ul className={this.state.escondeLoading ? '' : 'hide'}>
          { this.state.veiculos.map(veiculo => <li><span>{veiculo.nameLine} em: </span>{veiculo.arrivalTime}min</li>)}
        </ul>
      </div>
    );
  }
}

export default App;

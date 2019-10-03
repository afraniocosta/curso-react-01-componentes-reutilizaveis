
import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';

class App extends Component {

  state = { 
    
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ],
   };

   removeAutor = () => {

    const { autores } = this.state;
      
      this.setState(
        {
          autores: autores.filter(( autor, posAtual ) => {
            
            return posAtual;

          }),
        }
      )

   }

  // * aqui ele pega o que já existe com o spread operator e adiciona a unidade autor que receber
  escutadorDeSubmit = autor => {
    this.setState({
      autores: [...this.state.autores, autor]
    })
  } 

  //aqui estou passamdo o array de autores como estado para o component Tabela
  render() {
  return(
    <Fragment>
      <Header />
      <div className="container mb-10">
        <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor }/> 
        <Form escutadorDeSubmit={this.escutadorDeSubmit}/>
      </div>  
    </Fragment>
  );
}
}

export default App;
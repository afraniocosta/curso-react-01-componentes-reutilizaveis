import React, { Component } from 'react';

class Formulario extends Component{

  constructor(props){
    super(props)

    this.stateInicial = {
      nome: '',
      livro: '',
      preco: ''
    }

    this.state = this.stateInicial;

  }

  //perguntei no forum
  escutadorDeInput = event => {
    //aqui está pegando do event o name dp campo e o value  
    const { name, value } = event.target;

    this.setState({
    // a partir do name coloco o value  
      [name]: value

    });

  }

  // entender melhor o que foi feito aqui.
  // acho que está pegando o escutadorDeSubmit passado via prop no App.js e fazendo algo
  submitFormulario = () =>{
    this.props.escutadorDeSubmit(this.state);
    this.setState(this.stateInicial);
  }
  
  render(){

    const { nome, livro, preco } = this.state;

    return(

      <form>
        
        <div className="row">

         <div className="input-field col s4"> 
          <label className="input-field" htmlFor="nome">Nome</label>
          <input
              className="validate"
              id="nome"
              type="text"
              name="nome"
              value = {nome}
              onChange={this.escutadorDeInput}/>
          </div>    

          <div className="input-field col s4">  
            <label className="input-field" htmlFor="livro">Livro</label>
            <input
                className="validate"
                id="livro"
                type="text"
                name="livro"
                value = {livro}
                onChange={this.escutadorDeInput}/>
          </div>    

          <div className="input-field col s4">  
            <label className="input-field" htmlFor="preco">Preço</label>
            <input
                className="validate"
                id="preco"
                type="text"
                name="preco"
                value = {preco}
                onChange={this.escutadorDeInput}/>
          </div>
        </div>   

          <button className="waves-effect waves-light indigo lighten-2 btn" onClick={this.submitFormulario} type="button">Salvar</button>
      
      </form>

    )

  }

}

export default Formulario;
import React, { Component } from react;

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

  render(){

    const { nome, livro, autor } = this.props;

    return(

      <form>

        <label htmlFor="nome">Nome</label>
        <input
            id="nome"
            type="text"
            name="nome"
            value = {nome}
        />

        <label htmlFor="livro">Livro</label>
        <input
            id="livro"
            type="text"
            value = {nome}
        />


        <label htmlFor="preco">Preço</label>
        <input
            id="preco"
            type="text"
            name="preco"
            value = {nome}
        />


        <button type="button">Salvar
        </button>
      
      </form>

    )

  }

}

export default Formulario;
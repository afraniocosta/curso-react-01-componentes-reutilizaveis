import React, {Component} from 'react';

const TableHead = () => {
  return(
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>
  )
}

//aqui estou recebendo o array de autores como props, pois é no TableBody que ele será usado

const TableBody = props => {

  const linhas = props.autores.map((linha, index) => {
    
    return(
      <tr key = { index }>
        <td>{ linha.nome }</td>
        <td>{ linha.livro }</td>
        <td>{ linha.preco }</td>
        <td><button>Remover</button></td>
      </tr>
    );

  });

  return(
    <tbody>
      { linhas }
    </tbody>
  );
}

class Tabela extends Component {
  render(){

    //aqui estou recebendo o array de autores que passei como props no App

    const { autores } = this.props;
    
    //agora estou passando abaixo o array de autores que estava disponível acima para o component TableBody
    
    return(
      <table>
        <TableHead />
        <TableBody autores = { autores }/>
      </table>
    )
  }
}

export default Tabela;
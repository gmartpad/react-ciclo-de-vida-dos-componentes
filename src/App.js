import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor(){
    super();

    this.state = {
      notas:[],
      categorias:[],
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      ...this.state,
      notas:novoArrayNotas,
    }
    this.setState(novoEstado)
  }

  deletarNota(index){
    let arrayDeNotas = this.state.notas;
    arrayDeNotas.splice(index, 1);
    this.setState({
      ...this.state,
      notas: arrayDeNotas,
    })
    console.log("deletar Nota");
  }

  criarCategoria(titulo){
    const novaCategoria = titulo;
    const novoArrayCategorias = [...this.state.categorias,novaCategoria]
    const novoEstado = {
      ...this.state,
      categorias: novoArrayCategorias,
    }
    this.setState(novoEstado)
  }

  deletarCategoria(index){
    let arrayDeCategorias = this.state.categorias;
    arrayDeCategorias.splice(index, 1);
    this.setState({
      ...this.state,
      categorias:arrayDeCategorias,
    })
    console.log("deletar Categoria");
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.criarCategoria.bind(this)}
            apagarCategoria={this.deletarCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeNotas 
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;

import React, { Component } from 'react';

class ListaDeCategorias extends Component {
    // state = {  }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    _novasCategorias(categorias){
        console.log(categorias)
    }

    _handleEventoInput(e){
        if(e.key === "Enter"){

            let valorCategoria = e.target.value;

            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() {
        return (  
            <section>
                <ul>
                    {this.props.categorias.categorias.map((categoria, index) => 
                    
                        <li key={index}>{categoria}</li>
                        
                    )}
                </ul>
                <input 
                    type="text" 
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;
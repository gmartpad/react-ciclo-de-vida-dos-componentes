import React, { Component } from 'react';

class ListaDeCategorias extends Component {
    // state = {  }

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
                    {this.props.categorias.map((categoria, index) => 
                    
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
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    products:[],
    product:{
      name: 'TV',
      price: 20
    }
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts = _=>{
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(response => this.setState({products: response.data}))
      .catch(err => console.error(err))
  }

  addProduct = _ => {
    const {product} = this.state;
    fetch(`http://localhost:4000/products/add?name=${product.name}&price=${product.price}`)
      .then(response => response.json())
      .then(this.getProducts)
      .catch(err => console.error(err))
  }
  renderProduct = ({product_id,name}) => <div key = {product_id}>{name}</div>

  render() {
    const {products, product} = this.state;
    return (
      <div className="App">
        {products.map(this.renderProduct)}

        <div>
          <input 
            value={product.name} 
            onChange={e => this.setState({product: {...product, name: e.target.value}})}
          />
          <input 
            value={product.price} 
            onChange={e => this.setState({product: {...product, price: e.target.value}})}
          />
          <button onClick={this.addProduct}>Add product </button>
        </div>
      </div>
    );
  }
}

export default App;

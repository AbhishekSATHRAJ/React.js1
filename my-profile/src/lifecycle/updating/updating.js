import React, { Component } from "react";
import axios from "axios";
import Child from "../../spinning/child.js";
import Loader from "../../spinning/spinning.js";

class Updating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      product: null,
      color:"green"
    };
  }
  static getDerivedStateFromProps(props, state) {
    // console.log(props, "props");
    // console.log(state, "state");
    return {color:"purple"}
    // return null
    
  }


  // Fetch product when component mounts or the count changes
  componentDidMount() {
    this.fetchProduct();
  }

  componentDidUpdate(prevProps, prevState) {
    // Only fetch new product if the count has changed
    if (this.state.count !== prevState.count) {
      this.fetchProduct();
    }
  }

  fetchProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${this.state.count + 1}`) // Products are 1-indexed
      .then((response) => {
        this.setState({ product: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  increment = () => {
    this.setState({ count: Math.min(this.state.count + 1, 9) }); // Prevent count from exceeding 9 (1-indexed max)
  };

  decrement = () => {
    this.setState({ count: Math.max(this.state.count - 1, 0) }); // Prevent count from going below 0
  };

  handleButtonClick = (index) => {
    this.setState({ count: index });
  };

  render() {
    const { count, product } = this.state;
    return (
      <>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <h1 style={{color:this.state.color}}>Count: {count + 1}</h1> {/* Display count as 1-indexed */}
          <button onClick={this.increment} disabled={count >= 9}>
            Increment
          </button>
          <button onClick={this.decrement} disabled={count <= 0}>
            Decrement
          </button>
        </div>

        {!product ? (
          <Loader />
        ) : (
          <Child
            img={product.image}
            title={product.title}
            desc={product.description}
            cat={product.category}
          />
        )}

        <div style={{ display: "flex", gap: "10px" }}>
          {Array.from({ length: 10 }, (_, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
              {index + 1}
            </button>
          ))}
        </div>
      </>
    );
  }
}

export default Updating;

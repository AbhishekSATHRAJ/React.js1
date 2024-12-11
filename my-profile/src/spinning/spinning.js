import React from 'react';
import Child from './child';
import Spinner from 'react-bootstrap/Spinner';

class Mount extends React.Component {
  constructor() {
    console.log("constructing");
    super();
    this.state = { products: [], loading: true };
  }

  componentDidMount() {
    console.log("component did mount");
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((json) => {
        this.setState({ products: json, loading: false }); 
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        this.setState({ loading: false }); 
      });
  }

  render() {
    console.log("rendering");
    const { products, loading } = this.state; 

    return (
      <div>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden" style={{color: "red"}}>Loading...</span>
          </Spinner>
        ) : (
          <div style={{
            display: "flex",
            flexWrap: "wrap",       
            justifyContent: "space-evenly", 
            gap: "15px",            
            padding: "20px",        
          }}>
            {products.map((product, index) => (
              <div key={index} style={{
                flex: "1 0 21%",         
                maxWidth: "250px",       
                minWidth: "200px",       
                margin: "10px",          
              }}>
                <Child 
                  img={product.image} 
                  title={product.title} 
                  desc={product.description} 
                  cat={product.category} 
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Mount;

/* eslint-disable array-callback-return */
import { Component } from "react";
import "./header.css";

const obj = [
  {
    productname: "mobile",
    price: 5000,
    availability: true,
  },
  {
    productname: "laptop",
    price: 10000,
    availability: true,
  },
];
const style = {
  availability: { color: "green" },
  unavailability: { color: "black" },
};

class Header extends Component {
  render() {
    return (
      <>
      <div style={
        obj.filter((a)=>{
            if (style.availability === true) {
                return a.availability;
            }
            else if (style.unavailability === false) {
                return a.unavailabilityavailability;
            }
        })          
      }></div>
       

        {/* <!-- Navbar --> */}
        <nav class="navbar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* <!-- Image Gallery Section --> */}
        <section id="gallery" class="gallery-section">
          <h2>Image Gallery</h2>
          <div class="gallery">
            <div class="gallery-item">
              <img
                src="https://via.placeholder.com/300x200?text=Image+1"
                alt="Image1"
              />
            </div>
            <div class="gallery-item">
              <img
                src="https://via.placeholder.com/300x200?text=Image+2"
                alt="Image2"
              />
            </div>
            <div class="gallery-item">
              <img
                src="https://via.placeholder.com/300x200?text=Image+3"
                alt="Image3"
              />
            </div>
            <div class="gallery-item">
              <img
                src="https://via.placeholder.com/300x200?text=Image+4"
                alt="Image4"
              />
            </div>
            <div class="gallery-item">
              <img
                src="https://via.placeholder.com/300x200?text=Image+5"
                alt="Image5"
              />
            </div>
            <div class="gallery-item">
              <img
                src="https://via.placeholder.com/300x200?text=Image+6"
                alt="Image6"
              />
            </div>
            <div class="gallery-item">
              <img
                src="https://via.placeholder.com/300x200?text=Image+7"
                alt="Image7"
              />
            </div>
            <div class="gallery-item">
              <img
                src="https://via.placeholder.com/300x200?text=Image+8"
                alt="Image8"
              />
            </div>
            <div class="gallery-item">
              <img
                src="https://via.placeholder.com/300x200?text=Image+9"
                alt="Image9"
              />
            </div>
            <div class="gallery-item">
              <img
                src="https://via.placeholder.com/300x200?text=Image+10"
                alt="Image10"
              />
            </div>
            <div class="gallery-item">
              <img
                src="https://via.placeholder.com/300x200?text=Image+11"
                alt="Image11"
              />
            </div>
            <div class="gallery-item">
              <img
                src="https://via.placeholder.com/300x200?text=Image+12"
                alt="Image12"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Header;

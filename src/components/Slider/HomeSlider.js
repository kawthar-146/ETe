import "../Slider/Slider.css"
import * as React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import "./slider-animations.css";
// import "./slider.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const content = [
  {
    title: "Our Employees",
    description:
      "is one of the leading companies, in Lebanon,in supplying, manufacturing & installing metal and steel constructions.",
    button: "Read More",
    image: require("../../images/image1.jpg"),
    
  },

  {
    title: "Our Employees",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: require("../../images/image2.jpg"),
    
  },
  {
    title: "Our Employees",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: require("../../images/image3.jpg"),
   
  }
];
const HomeSlider = () => {
  
  return (
  <>
  
  <Slider autoplay={3000} className="slider-wrapper">
{content.map((item, index) => (
  <div
    key={index}
    className="slider-content"
    style={{ background: `url('${item.image}') no-repeat center center` }}
  >
    <div className="inner">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <button>{item.button}</button>
    </div>
    <div className="section">
      <img src={item.userProfile} alt={item.user} />
  
      <span>
        Posted by <strong>{item.user}</strong>
      </span>
    </div>
  </div>
))}
   </Slider>
 
  {/* </div> */}

 
 
  </>
);
};

export default HomeSlider;


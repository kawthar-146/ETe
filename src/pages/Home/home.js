import React from 'react'
import HomeSlider from '../../components/Slider/HomeSlider';
import "../Home/home.css"
const Home = () => {
  return (
    <div className="container">
    
    <h1 className="txt text-center " id="txt"style={{padding: "5%"}}>
    
     <b> Welcome</b><b>to</b> <b>Our</b> <b>Website</b> 
    
    </h1>
    <HomeSlider/>
    
  </div>
  )
}
export default Home;
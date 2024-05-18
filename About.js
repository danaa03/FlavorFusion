import React from 'react'
import {Nav,Nav2} from './nav.js'
import './stylingabout.css'
import img1 from '../images/danaa2.jpeg'
import img2 from '../images/samreen2.jpeg'
import img3 from '../images/afroze.jpeg'
import img4 from '../images/recipe1.jpg'
import img5 from '../images/recipe4.jpg'
import img6 from '../images/recipe3.jpg'
const About = () => {
  return (
    <>
    <Nav></Nav>
  <Nav2></Nav2>
  <div className = "developer">
  <h2>Developers</h2> 
  </div>
  <div className="about-container">
      <div className="image-section">
        <div className="image-wrapper">
          <img src={img1} alt="Image 1" className="circular-image" />
        </div>
        <div className="image-data">
          <h2>Danaa Younus</h2>
          {/* <p>Some information about Image 1...</p> */}
        </div>
      </div>

      <div className="image-section">
        <div className="image-wrapper">
          <img src={img2} alt="Image 2" className="circular-image" />
        </div>
        <div className="image-data">
          <h2>Samreen Riaz</h2>
       
        </div>
      </div>

      <div className="image-section">
        <div className="image-wrapper">
          <img src={img3} alt="Image 3" className="circular-image" />
        </div>
        <div className="image-data">
          <h2>Afroze Pal</h2>
     
        </div>
      </div>
    </div>
    <div className="red-line"></div>
  <div className="blog-section">

  <h2>Our Blog</h2>
  <h2>A Pinch of Happiness</h2>
  
  <div className="posts-container">
    <div className="post">
      <img src={img4}  alt="Recipe 1" />
      {/* <h3>Recipe 1</h3> */}
      <p>Hot and spicy </p>
    </div>

    <div className="post">
      <img src={img5} alt="Recipe 2" />
      {/* <h3>Recipe 2</h3> */}
      <p>want something sweet</p>
    </div>

    <div className="post">
      <img src={img6}  alt="Recipe 3" />
      {/* <h3>Recipe 3</h3> */}
      <p>spice magic</p>
    </div>

    {/* Add more posts as needed */}
  </div>
  </div>
   </>
  )
}

export default About

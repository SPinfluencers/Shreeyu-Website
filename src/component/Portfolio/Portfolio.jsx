import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            {/* <h4>Services</h4> */}
            {/* <h1>My Creative <span style={{color:'#ff014f'}}>Projects</span> Section</h1> */}
            <h1 style={{color:'#ff0109'}}>Services</h1>
          </div>

          <div className='content grid_1'>
            {Portfolio_data.map((value, index) => {
              return <Card 
              key={index} 
              image={value.image} 
              category={value.category} 
              totalLike={value.totalLike} 
              title={value.title} 
              description={value.description}
              description_1={value.description_1}
              github={value.github}
              view={value.view}
               />
            })}

            {/* <div className='box btn_shadow '>
              <div className='img'>
                  <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Development</span>
                  <label>
                    <i className='far fa-heart'></i> 360
                  </label>
              </div>
              <div className='title'>
                  <h2>Mobile app landing design & Services</h2>
                <a href='' className='arrow'>
                  <i class='fas fa-arrow-right'></i>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio

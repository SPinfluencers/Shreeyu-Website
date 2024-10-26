import React from "react"
import "./Home.css"
import sagar from "../pic/sagar.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import github from '../pic/github.png'
import gmail from '../pic/gmail.png'
import twitter from '../pic/twitter.png'
import facebook from "../pic/facebook.png"
import { useTypewriter } from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index'

const Home = () => {

  const {text} = useTypewriter({
    words: [ " Shreeyu Engineering Services"],
    loop: 0, 
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000
    })

  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3 style={{color:'#000000'}}>About Us</h3>
            <h3>
            
            </h3>
            <h2>
            Welcome to 
              <span >
                {/* <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /> */}
                { text }
                <span className="cursor">|</span>
              </span>
            </h2>

            {/*  TechStack  */}
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'><a target="_blank" href="https://www.linkedin.com"><img src={skill1} alt="linkdin" /></a></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'><a target="_blank" href="https://facebook.com"><img src={facebook} alt="github" /></a></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'><a target="_blank" href="https://www.gmail.com"><img src={gmail} alt="gmail" /></a></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'><a target="_blank" href="https://twitter.com"><img src={twitter} alt="twitter" /></a></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                {/* <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img  alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button> */}
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              {/* <img src={sagar} alt='' />  */}
              <div className="info">More than profits, professional ethics govern our functioning. 
                We keep in mind the safety of all stakeholders involved by stringently following OSHA regulations 
                in our practices. Team comes with the deep industry knowledge enables us to provide all time precisely 
                detailed and timely delivered projects. We offer sustained solutions for special client needs through 
                a comprehensive range of services and innovative technologies. The number of happy customers of the US, 
                Canada and across the globe is the certificate of judging our success rate. We are a bunch of committed 
                and hard-working professionals who with their experience and expertise help customers harvest the greatest 
                possible value.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

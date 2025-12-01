import {Line} from "rc-progress";
import React from "react";  
import { BsInfoCircleFill } from "react-icons/bs";
import {Animate, AnimateKeyframes} from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import './styles.scss';



const Skills = () => {
    return(
       <section id="skills" className="skills">
             <PageHeaderContent
               headerText="My Skills"
               icon={<BsInfoCircleFill size={30} />}
             />

<div className="skills__content-wrapper">

{
  skillsData.map((item, index) => (
    <div key={index} className="skills__content-wrapper__skills-content">
      <Animate
      play
      duration={1}
      delay={0.3}
      start={{
          transform :'translateX(-200px)' 
      }}

      end={{
          transform :'translateX(0px)' 
      }}
      
      
      >
        <h3 className="skills__content-wrapper__skills-content__category-text">
          {item.label}
        </h3>
        <div>
          {
            item.data.map((skillsItem, j) =>(
              <AnimateKeyframes
              key={j}
    play
    duration={1}
   keyframes={["opacity: 0", "opacity: 1"]}
    iterationCount="1"
        
              >
                <div className="progressbar-Wrapper" >
                  <p>{skillsItem.skillName}</p>
                  <Line
                  percent = {skillsItem.percentage}
                  strokeWidth = "2"
strokeColor = "var(--yellow-theme-main-color)"
trailWidth = "2"
strokeLinecap = "square"
                  />



                </div>

              </AnimateKeyframes>
    ))
          }
        </div>

      </Animate>
      </div>
  ))
  
}

</div>

           </section>
    )
}
export default Skills;
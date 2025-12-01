import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import {Animate} from "react-simple-animate";
import './styles.scss';
import {DiApple, DiAndroid} from 'react-icons/di';
import {FaDev, FaDatabase} from 'react-icons/fa';
import { FaD } from "react-icons/fa6";




const personalDetail = [
  {
    label: "Name",
    value: "Aqsa Sadiq",
  },
  {
    label: "Address",
    value: "Karachi Pakistan",
  },
  {
    label: "Email",
    value: "aqsasadiq909@gmail.com",
  },
  {
    label: "Contact Me",
    value: "03022710933",
  },

];


const jobSummary = 'Highly motivated and dedicated Web Developer with a strong commitment to delivering innovative and user-friendly web experiences. Possesses excellent problem-solving skills, attention to detail, and the ability to work effectively both independently and in collaborative team environments. Passionate about learning new technologies and continuously improving web solutions to meet client and business goals efficiently.'

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={30} />}
      />

      <div className="about__content">
       <div className="about__content__personalWrapper">
        <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform : 'translatex(-900px)',
                    }}
        
                    end={{
                       transform : 'translatex(0px)', 
                    }}
                    >
        <h3>Front END Developer</h3>
        <p>{jobSummary}</p>

        </Animate>

        <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform : 'translatex(500px)',
                    }}
        
                    end={{
                       transform : 'translatex(0px)', 
                    }}
                    >

        <h3 className="personalInformationHeaderText">Personal Information</h3>
        <ul>
          {
            personalDetail.map((item, index) => (
              <li key={index}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))
          }
        </ul>
        </Animate>
        </div>

        <div className="about__content__skillsWrapper">
           <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform : 'translatex(600px)',
                    }}
        
                    end={{
                       transform : 'translatex(0px)', 
                    }}
                    >
          <div className="about__content__skillsWrapper__innerContent">
<div>
  <FaDev size={60} color="var(--yellow-theme-main-color)" />
</div>

<div>
  <DiApple size={60} color="var(--yellow-theme-main-color)" />
</div>

<div>
  <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
</div>

<div>
  <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
</div>
</div>
</Animate>
            
          


        </div>

      </div>


    </section>
  );
};

export default About;


import React from "react";
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './styles.scss';
import bg from "../../assets/back-bg.jpg";  // ✅ Import image from assets

const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToContactMe = () => {
        navigate('/contact');
    }

    return (
        <section 
            id="home" 
            className="home"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                    url(${bg})
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Aqsa
                    <br/>
                    Front End Developer
                </h1>
            </div>

            <Animate
                play
                duration={1.5}
                delay={1}
                start={{ transform: 'translateY(550px)' }}
                end={{ transform: 'translateX(0px)' }}
            >
                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMe}>
                        Hire Me
                    </button>
                </div>
            </Animate>

        </section>
    );
}

export default Home;

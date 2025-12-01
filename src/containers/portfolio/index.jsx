import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import ImageSix from "../../images/image6.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Note App",
    image: ImageOne,
    link: "my-notes-app-zeta-ten.vercel.app",
  },
  {
    id: 3,
    name: "Shop Cart Design",
    link: "jwellery-searching-website.vercel.app",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Age Calculator",
    image: ImageThree,
    link: "age-calculator-lac.vercel.app",
  },
  {
    id: 2,
    name: "Chatbot",
    image: ImageFour,

    link: "chatbot-beta-orpin.vercel.app",
  },
  {
    id: 3,
    name: "Food Finder",
    image: ImageFive,
    link: "food-finderapp-hazel.vercel.app",
  },
  {
    id: 3,
    name: "Quiz APP",
    image: ImageSix,
    link: "quiz-app-alpha-puce-57.vercel.app",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
       <div className="portfolio__content__cards">
  {filteredItems.map((item, index) => (
    <div
      className="portfolio__content__cards__item"
      key={`cardItem${item.name.trim()}`}
      onMouseEnter={() => handleHover(index)}
      onMouseLeave={() => handleHover(null)}
    >
      <div className="portfolio__content__cards__item__img-wrapper">
        <a>
          <img alt="dummy data" src={item.image} />
        </a>
      </div>

      <div className="overlay">
        {index === hoveredValue && (
          <div>
            <p>{item.name}</p>

            <a
              href={`https://${item.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Visit</button>
            </a>

          </div>
        )}
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};
export default Portfolio;

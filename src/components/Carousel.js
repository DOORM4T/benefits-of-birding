import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import Image1 from "../images/animal-avian-beak-bird.png";
import Image2 from "../images/brown-bird-on-selective-focus-photography.png";
import Image3 from "../images/photo-of-green-bee-eater-perched-on-branch.png";
import Image4 from "../images/selective-focus-photography-of-black-bird.png";

// Styled Components
import styled from "styled-components";
const StyledSlider = styled(Slider)`
  background-color: black;
  padding: 1rem 0 0.5rem 0;
  max-height: 180px;

  @media print {
    display: none !important;
  }
`;

const StyledCarouselItem = styled.img`
  transition: filter 0.3s ease;
  filter: brightness(90%);
  border: 4px solid black;

  &:hover {
    filter: brightness(110%);
  }
`;

const Carousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease",
    arrows: false,
    variableWidth: true,
    centerMode: true
  };
  return (
    <div className="carousel">
      <StyledSlider {...settings}>
        <StyledCarouselItem src={Image1} alt="Bird1" />
        <StyledCarouselItem src={Image2} alt="Bird2" />
        <StyledCarouselItem src={Image3} alt="Bird3" />
        <StyledCarouselItem src={Image4} alt="Bird4" />
      </StyledSlider>
    </div>
  );
};

export default Carousel;

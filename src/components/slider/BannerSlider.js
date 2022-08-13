import React from "react";
import sliderOne from "../../assets/images/slide1.png";
import sliderTwo from "../../assets/images/slide2.png";
import sliderThree from "../../assets/images/slide3.png";
import sliderFour from "../../assets/images/slide4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./BannerSlider.css";

const BannerSlider = () => {
  const sliderPic = [
    {
      image: sliderOne,
    },
    {
      image: sliderTwo,
    },
    {
      image: sliderThree,
    },
    {
      image: sliderFour,
    },
  ];
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="md:flex hidden cursor-pointer">
      <div className="container mx-auto ">
        <Slider {...settings}>
          {sliderPic.map((item) => (
            <div className="card w-full ">
              <div className="card-top">
                <img
                  className="w-full h-[550px] "
                  src={item.image}
                  alt={item.title}
                />
              </div>
             
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;

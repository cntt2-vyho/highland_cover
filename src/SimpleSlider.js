import React, { Component } from "react";
import Slider from "react-slick";



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src="http://www.landmarkmlp.com/js-plugin/owl.carousel/demos/assets/fullimage1.jpg"alt style={{width: '100%'}} />
          </div>
          <div>
          <img src="http://www.landmarkmlp.com/js-plugin/owl.carousel/demos/assets/fullimage2.jpg"alt  style={{width: '100%'}} />
          </div>
          <div>
          <img src="http://www.landmarkmlp.com/js-plugin/owl.carousel/demos/assets/fullimage3.jpg"alt  style={{width: '100%'}} />
          </div>
        </Slider>
      </div>
    );
  }
}
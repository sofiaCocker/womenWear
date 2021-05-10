import React from 'react'
import {Carousel} from "react-bootstrap"
import "./ImageSlider.css"

function ImageSlider(props) {
  return (
  <Carousel>
  {props.imgs.map(img => 
      <Carousel.Item>
    <img
      className="d-block"
      src={img}
    />
    <Carousel.Caption />
    </Carousel.Item>

    )
  }
</Carousel>
  )
}

export default ImageSlider
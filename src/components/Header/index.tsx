import React from 'react'
import NavBar from '../NavBar'
import Carousel from 'react-bootstrap/Carousel';

export const Header = () => {
  return (
    <header>
      <Carousel variant="">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/ZJ_KzbtIDBk/maxresdefault.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/l2mW0DxCBY4/maxresdefault.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/aZj93iHl6LA/maxresdefault.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <NavBar />
    </header>
  )
}

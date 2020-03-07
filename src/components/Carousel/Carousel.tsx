/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

import { BackArrow, NextArrow } from './SlickArrows'

export interface CarouselProps {
  settings?: object
}

const Carousel: FC<CarouselProps> = ({ settings = {}, children }) => {
  const defaultSettings = {
    dots: false,
    autoplay: true,
    arrows: true,
    infinite: true,
    pauseOnHover: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <BackArrow />
  }

  const newSettings = { ...defaultSettings, ...settings }

  return <Slider {...newSettings}>{children}</Slider>
}

export default Carousel

/** @jsx jsx */
import { jsx } from 'theme-ui'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

import { Children } from '../../utils/types'
import { BackArrow, NextArrow } from './SlickArrows'

type Props = {
  settings?: object
  children: Children
}

export default function Carousel({ settings = {}, children }: Props) {
  const defaultSettings = {
    dots: false,
    autoplay: true,
    arrows: true,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <BackArrow />
  }

  const newSettings = { ...defaultSettings, ...settings }

  return <Slider {...newSettings}>{children}</Slider>
}

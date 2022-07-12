import React, { useRef } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import './styles.scss';

const CustomSlider = (props) => {
    const sliderRef = useRef()
    const settings = { ...props }
    const { children } = props

    return (

        <div style={{ ...props.backgroundImage }}>
            <Slider ref={sliderRef} {...settings} className={props.className}>
                {children}
            </Slider>
        </div>
    )
}
export default CustomSlider;



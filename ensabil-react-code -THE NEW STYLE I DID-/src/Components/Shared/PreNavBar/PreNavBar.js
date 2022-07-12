import React, { useState, useEffect } from 'react'
import Animate from '../Animations/Animate'

import whiteClose from '../../../Assets/Images/PreNavBar/close-white.svg'

import './styles.scss'

const NavigationBar = (props) => {
    const [shouldShowPreNavBar, setshouldShowPreNavBar] = useState(true)

    const { data } = props
    const { preNavBarContent } = data
    const { prevNavBarText, link, arrow } = preNavBarContent

    const removePreNav = () => {
        setTimeout(() => {
            setshouldShowPreNavBar(false);
        }, 500);
    }

    return (
        <Animate customClass={`PreNavBar section ${shouldShowPreNavBar ? 'd-flex' : 'd-none'}`} animationName={'fadeIn'}>
            <p className='preNavText' > {prevNavBarText}</p >
            <a href={link}>
                <img src={arrow} alt='white_arrow' />
            </a>
            <img onClick={() => removePreNav()} className="whiteClose" src={whiteClose} alt='white_arrow' />
        </Animate>
    )
}

export default NavigationBar

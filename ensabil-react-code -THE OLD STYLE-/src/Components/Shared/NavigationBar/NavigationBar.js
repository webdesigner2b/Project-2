import React, { Fragment, useState } from 'react'
import { useWindowDimension } from '../../../Helpers/helpers';
import Animate from '../Animations/Animate'
import isEmpty from 'lodash/isEmpty';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'


import burgerIcon from '../../../Assets/Images/NavigationBar/burger-icon.svg'
import closeIcon from '../../../Assets/Images/NavigationBar/close-icon.svg'

import './styles.scss'

const renderNavigationBarImage = (navbarLeftSection, isMobile) => {
    const { ensabillPreScrollLogo, ensabillPostScrollLogo } = navbarLeftSection
    const logoImage = isMobile ? ensabillPostScrollLogo : ensabillPreScrollLogo
    const { imageSource } = logoImage
    const additionalProps = { href: '/' }
    return (
        <Animate customClass={'navbar-brand'} animationName={'fadeRight'} additionalProps={additionalProps} elementType={'a'} >
            <img alt='brand_logo' src={imageSource} />
        </Animate>
    )
}

const renderNavigationBarLinksSection = ({ navbarRightSection, mobileMenuOpen, setMobileMenuOpen, routeToHightlight }) => {
    const additionalProps = { onClick: () => { toggleModal(mobileMenuOpen, setMobileMenuOpen) } }
    return (
        <Fragment>
            <div className='contentGrid d-none d-md-block'>
                <ul className='navbar-nav'>
                    {navbarRightSection.map((element, index) => {
                        const { text, link } = element
                        const isSelected = link.includes(routeToHightlight)
                        const listItemAnimationProps = {
                            elementType: 'li',
                            animationDelay: index * 200,
                            animationDuration: 1000 + index * 500,
                            customClass: `nav-item ${isSelected ? 'isSelected' : ''}`,
                            animationName: 'fadeIn',
                            key: `icon_text_${index}`
                        }
                        return (
                            <Animate {...listItemAnimationProps}>
                                <a className='nav-link' href={link}>{text}</a>
                            </Animate>
                        )
                    })}
                </ul>
            </div>
            <Animate animationName={'fadeLeft'} customClass={'contentGrid d-block d-md-none'} additionalProps={additionalProps} >
                <img alt='burger_icon' className='burgerIcon' src={burgerIcon} />
            </Animate>
        </Fragment>
    )
}

const renderMobileContentList = (navBarRightSectionMobile) => {
    return (
        navBarRightSectionMobile.map((element, index) => {
            const { image, text, link } = element
            const hasImage = !isEmpty(image)
            const hasText = !isEmpty(text)
            const hasImageAndNoText = hasImage && !hasText
            const mobileContentListProps = {
                elementType: 'a',
                animationDelay: index * 200,
                animationDuration: 1000 + index * 200,
                customClass: 'mobileMenuContentLinks',
                animationName: 'fadeUp',
                additionalProps: { href: link }
            }

            return (
                <Fragment key={`mobile_menu_content${index}`}>
                    <Animate {...mobileContentListProps}>
                        {hasImageAndNoText ? <img src={image} className='discoverEnsabill' alt='discover_ensabill' /> : <p>{text}</p>}
                    </Animate>
                </Fragment>
            )
        })
    )
}

const renderNavigationMobileSection = ({ navBarRightSectionMobile, mobileMenuOpen, setMobileMenuOpen }) => {
    return (
        <div className='mobileMenuOpen'>
            <div className='menuActionTrigger' onClick={() => { toggleModal(mobileMenuOpen, setMobileMenuOpen) }}>
                <img alt='close_icon' className='closeIcon' src={closeIcon} />
            </div>
            <div className='mobileMenuContent'>
                {renderMobileContentList(navBarRightSectionMobile)}
            </div>
        </div>
    )
}

const toggleModal = (value, setMobileMenuOpen) => {
    const root = document.getElementById('root')
    if (value) {
        document.body.classList.remove('modal-open');
        root?.classList?.remove('modal-open')
    } else {
        document.body.classList.add('modal-open');
        root?.classList?.add('modal-open')
    }
    setMobileMenuOpen(!value);
}

const NavigationBar = (props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [hasScrolledPastThreshold, setHasScrolledPastThreshold] = useState(false)

    const [width, height] = useWindowDimension();
    const isMobile = width <= 576

    useScrollPosition(({ prevPos, currPos }) => {
        const headerUpperElement = document.getElementById('header-upper')
        let headerHeight = 108
        if (headerUpperElement) {
            headerHeight = (headerUpperElement?.scrollHeight || 0)
        }
        const target = headerHeight * -1
        const changeColor = currPos.y > target
        if (changeColor === hasScrolledPastThreshold) setHasScrolledPastThreshold(!changeColor)
    }, [hasScrolledPastThreshold])

    const { data, routeToHightlight } = props
    const { navbarLeftSection, navbarRightSection, navBarRightSectionMobile } = data
    const navigationBarLinksProps = {
        navbarRightSection,
        mobileMenuOpen,
        setMobileMenuOpen,
        routeToHightlight
    }
    const mobileMenuContentProps = {
        navBarRightSectionMobile,
        mobileMenuOpen,
        setMobileMenuOpen
    }

    return (
        <Fragment>
            {mobileMenuOpen && renderNavigationMobileSection({ ...mobileMenuContentProps })}
            <div className={`NavigationBar smallSection ${hasScrolledPastThreshold && 'makeSticky'}`} id='header-upper'>
                <nav className='navbar navbar-expand-lg' id='header-lower'>
                    <div className='navBarContainer'>
                        {renderNavigationBarImage(navbarLeftSection, isMobile)}
                        {renderNavigationBarLinksSection({ ...navigationBarLinksProps })}
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default NavigationBar

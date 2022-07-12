import React, { Fragment } from 'react'
import Animate from '../Shared/Animations/Animate'
import isEmpty from 'lodash/isEmpty';

import './styles.scss'

const renderTopSection = (data) => {
    const { description, greenTitle, picture, title } = data

    const hasDescription = !isEmpty(description)
    const hasGreenTitle = !isEmpty(greenTitle)
    const hasPicture = !isEmpty(picture)
    const hasTitle = !isEmpty(title)

    return (
        <Fragment >
            <Animate customClass={'informationSection col-lg-7 col-12'} animationName={'fadeLeft'}>
                {hasGreenTitle && <p className='inSectionGreenTitle'>{greenTitle}</p>}
                {hasTitle && <span className='title'>{title}</span>}
                {hasDescription && <p className='description'>{description}</p>}
            </Animate>
            <Animate customClass={'imageSection col-lg-5 col-12'} animationName={'fadeRight'}>
                {hasPicture && <img src={picture} alt='image_top_section' />}
            </Animate>
        </Fragment>
    )
}

const renderIconListing = (data) => (
    data.map((element, index) => {
        const { text, icon } = element

        const animationProps = {
            animationDelay: index * 200,
            animationDuration: 1000 + index * 200,
            customClass: 'iconTextContainer col-lg-3 col-sm-6 col-12',
            animationName: 'fadeIn',
            key: `icon_text_${index}`
        }
        return (
            <Animate {...animationProps} >
                <img className='textIcon' src={icon} alt='icon_listing' />
                <span className='label'>{text}</span>
            </Animate>
        )
    })
)

const renderBottomSection = (data) => {
    const { picture, greenTitle, whiteLink } = data

    const hasPicture = !isEmpty(picture)
    const hasGreenTitle = !isEmpty(greenTitle)
    const hasWhiteLink = !isEmpty(whiteLink)

    return (
        <Animate customClass={'bottomSectionContainer'} animationName={'fadeRight'} animationDuration={'4000'}>
            {hasGreenTitle && <span className='inSectionGreenTitleSmaller'>{greenTitle}</span>}
            {hasWhiteLink && <span className='whiteLink'>{whiteLink}</span>}
            {hasPicture && <img className='bottomSectionImage' src={picture} alt='bottom_section' />}
        </Animate>
    )
}

const LargeShadowCard = (props) => {
    const { data } = props
    const { topSection, bottomSection, iconList } = data

    return (
        <div className='LargeShadowCard'>
            <div className='largeShadowContainer'>
                <div className='topSection section largeScreenExpander'>
                    {renderTopSection(topSection)}
                </div>
                <div className='iconList smallerSection largeScreenExpander'>
                    {!isEmpty(iconList) && renderIconListing(iconList)}
                </div>
                <div className='bottomSection largeScreenExpander'>
                    {renderBottomSection(bottomSection)}
                </div>
            </div>
        </div>
    )
}

export default LargeShadowCard
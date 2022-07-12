import React from 'react'
import Animate from '../../Shared/Animations/Animate'
import isEmpty from 'lodash/isEmpty';

import './styles.scss'

const TWO_COLUMN_SECTION_VARIATION = ['imageRight']

const TwoColumnSection = (props) => {
    const { data, variation, noPaddingBottomDesktop = false } = props
    const { imageSection, textSection } = data

    const { imageSrc } = imageSection.image
    const { greenTitle, title, description } = textSection

    const hasImageSrc = !isEmpty(imageSrc)
    const hasgreeenTitle = !isEmpty(greenTitle)
    const hasTitle = !isEmpty(title)
    const hasDescription = !isEmpty(description)

    const hasValidVariation = TWO_COLUMN_SECTION_VARIATION.includes(variation)
    const applyVariationClass = hasValidVariation ? 'reverse' : ''
    const imageAnimation = hasValidVariation ? 'fadeLeft' : 'fadeRight'
    const textAnimation = hasValidVariation ? 'fadeRight' : 'fadeLeft'
    const isNoPaddingBottomDesktop = noPaddingBottomDesktop ? 'noPaddingBottomDesktop' : ''

    return (
        <div className={`TwoColumnSection section largeScreenExpander ${isNoPaddingBottomDesktop && isNoPaddingBottomDesktop}`}>
            <div className={`twoColumnSectionContainer ${applyVariationClass && applyVariationClass}`}>
                <Animate animationName={imageAnimation} customClass={'imageSection col-lg-6 col-12'}>
                    {hasImageSrc && <img className='twoColumnImage' src={imageSrc} alt='image_section' />}
                </Animate>
                <Animate animationName={textAnimation} customClass={'textSection col-lg-6 col-12'}>
                    {hasgreeenTitle && <span className='greenTitleLarge'>{greenTitle}</span>}
                    {hasTitle && <span className='titleLarge'>{title}</span>}
                    {hasDescription && <span className='descriptionLarge'>{description}</span>}
                </Animate>
            </div>
        </div>
    )
}

export default TwoColumnSection
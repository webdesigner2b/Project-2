import React from 'react'

import isEmpty from 'lodash.isempty'

import Button from '../Shared/Button/Button'
import Animate from '../Shared/Animations/Animate'

import './styles.scss'

const renderbottomLinks = (downloadLink) => {
    return (
        downloadLink.map((element, index) => {
            const { link, icon } = element
            return (
                <a href={link} key={`social_media${index}`} className='socialIconsBottomLinks'>
                    <img src={icon} alt='social_icon' />
                </a>
            )
        })
    )
}

const renderTextSection = (data) => {
    const { title, description, cta, downloadLinks } = data

    const hasTitle = !isEmpty(title)
    const hasDescription = !isEmpty(description)
    const hasCta = !isEmpty(cta)
    const hasDownloadLink = !isEmpty(downloadLinks)

    return (
        <div className='col-lg-5 col-12 textSection'>
            <Animate customClass={'contentSection'} animationName={'fadeRight'}>
                {hasTitle && <p className='textSectionTitle'>{title}</p>}
                {hasDescription && <p className='textSectionDescription'>{description}</p>}
            </Animate>
            <Animate customClass={'buttonSection'} animationName={'fadeLeft'}>
                {hasCta && <Button data={cta} customClass={'featuresButton'} />}
                {hasDownloadLink &&
                    <div className='appsLinksContainer'>
                        {renderbottomLinks(downloadLinks)}
                    </div>}
            </Animate>
        </div>
    )
}

const renderImageSection = (data) => {
    const { image } = data

    const hasImage = !isEmpty(image)
    return (
        hasImage &&
        <Animate customClass={'col-lg-7 col-12 imageSection'} animationName={'fadeLeft'}>
            <img className='infographicImage' src={image} alt='infographic_section_image' />
        </Animate>
    )
}

const InformativeBannerWithLinks = (props) => {
    const { data } = props
    const { textSection, imageSection } = data
    return (
        <div className='InformativeBannerWithLinks largeScreenExpander'>
            <div className='infographicBannerContainer section'>
                {!isEmpty(textSection) && renderTextSection(textSection)}
                {!isEmpty(imageSection) && renderImageSection(imageSection)}
            </div>
        </div>
    )
}

export default InformativeBannerWithLinks
import React from 'react'
import isEmpty from 'lodash.isempty'
import Button from '../Shared/Button/Button'
import Animate from '../Shared/Animations/Animate'
import mobileHeader from '../../Assets/Images/InformativeBannerWithLinks/mobile_header.svg'
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
    const { title, description, cta, downloadLinks} = data

    const hasTitle = !isEmpty(title)
    const hasDescription = !isEmpty(description)
    const hasCta = !isEmpty(cta)
    const hasDownloadLink = !isEmpty(downloadLinks)

    return (
        <div className='col-lg-5 col-12 textSection'>
          <>
            <Animate customClass={'contentSection'} animationName={'fadeRight'}>
                {hasTitle && <p className='textSectionTitle'>{title} <span>expenses.</span></p>}
                {hasDescription && <p className='textSectionDescription'>{description}</p>}
            </Animate>

            <div className='textSectionTitle2'>
                <p>Your smart money assistant!</p>
            </div>
            <div className='textSectionDescription2'>
                <p>Ensabill is the all-in-one personal economic assistant that helps in setting and achieving all financial goals.</p>
                <p>Ensabill allows you to set budgets and avoid overspending by incorporating all your bank accounts and payments under one roof. I also adds special features such as budget assistant and credit scores to make your life easier</p>
            </div>

            </>
            
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
        <>
        <Animate customClass={'col-lg-7 col-12 imageSection'} animationName={'fadeLeft'}>
            <img className='infographicImage' src={image} alt='infographic_section_image' />
        </Animate>

        <img className='mobileHeader' src={mobileHeader} alt="mobile-header"></img>
        </>
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
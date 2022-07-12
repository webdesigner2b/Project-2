import React, { useState, useEffect } from 'react'
import { useWindowDimension } from '../../../Helpers/helpers';
import Animate from '../../Shared/Animations/Animate'
import isEmpty from 'lodash/isEmpty';

import './styles.scss'

const renderTopSectionFooter = (topSection) => {
    const { columns } = topSection
    const hasColumns = !isEmpty(columns)

    return (
        <div className='topSectionContainer d-none d-sm-grid'>
            {hasColumns && renderColumns(columns)}
        </div>
    )
}
const renderColumnContent = (listToRender, hasContactList) => {
    return (
        hasContactList ?
            <div className='listContent'>
                {listToRender.map((element, index) => {
                    const { text, link } = element
                    return (
                        <p key={`contact_list${index}`}>
                            <a href={`${link}${text}`}>{text}</a>
                        </p>
                    )
                })}
            </div> :
            <>
                <div className='listContent'>
                    {listToRender.map((element, index) => {
                        return (
                            <p key={`contact_list${index}`}>{element}</p>
                        )
                    })}
                </div>
            </>
    )
}
const renderColumns = (columns) => (
    <div className='contentColumn' id="parent">
        {columns.map((element, index) => {
            const { columnTitle, list, contactList } = element
            const hasContactList = !isEmpty(contactList) && isEmpty(list)
            const listToRender = hasContactList ? contactList : list
            const columnProps = {
                animationDelay: index * 200,
                animationDuration: 1000 + index * 200,
                customClass: 'singleColumn col-lg-3 col-sm-6',
                animationName: 'fadeIn',
                key: `column_text_${index}`
            }
            return (
                <Animate {...columnProps} >
                    <p className='columnTitle'>{columnTitle}</p>
                    {renderColumnContent(listToRender, hasContactList)}
                </Animate>
            )
        })}
    </div>
)
const renderLogoLinks = (logos) => (
    logos.map((element, index) => {
        const { logo, link } = element
        const key = `logo_footer_${index}`
        return (
            renderLogoItem({ link, logo, key })
        )
    })
)
const renderLogoItem = ({ link, logo, key }) => (
    <a href={link} className='imageContainer' key={key}>
        <img src={logo} alt='logos_footer' />
    </a>
)
const renderBottomSectionFooter = (bottomSection, isMobile) => {
    const { logoRightsSection, socialSection } = bottomSection

    const { logosMobile, logosDesktop, rightsSection, ensabillLogo } = logoRightsSection
    const { partOne, partTwo } = rightsSection
    const { labelSection, socialMediaIcons } = socialSection
    const list = isMobile ? logosMobile : logosDesktop
    const additionalProps = { 'data-aos-offset': '0', 'data-aos-anchor-placement': "bottom-bottom", 'data-aos-anchor': "#parent" }
    return (
        <div className='bottomSectionContainer'>
            <Animate customClass={'topRowContainer col-12'} animationName={'fadeLeft'} additionalProps={additionalProps}>
                {isMobile && <div className='exceptionMobileLinkLogo'>{renderLogoItem({ ...ensabillLogo })}</div>}
                <div className='logoSectionContainer col-lg-7 col-sm-12'>
                    {renderLogoLinks(list, isMobile)}
                </div>
                <div className='socialSectionLinks col-lg-5 col-sm-12'>
                    {labelSection.map((element, index) => {
                        const { text, link } = element
                        return (
                            <div className='labelLink' key={`label_link${index}`}>
                                <a href={link}><span>{text}</span></a>
                            </div>
                        )
                    })}
                </div>
            </Animate>
            <Animate customClass={'bottomRowContainer col-12'} animationName={'fadeRight'} additionalProps={additionalProps}>
                <div className='rightsSection col-lg-7 col-sm-12'>
                    <span>{partOne}</span>
                    <span>{partTwo}</span>
                </div>
                <div className='socialMediaIcons col-lg-5 col-sm-12'>
                    {socialMediaIcons.map((element, index) => {
                        const { icon, link } = element
                        return (
                            <a className='socialMediaIcon' href={link}>
                                <img alt='social_media' src={icon} />
                            </a>
                        )
                    })}
                </div>
            </Animate>
        </div>
    )
}
const Footer = (props) => {
    const [width, height] = useWindowDimension();
    const isMobile = width <= 576

    const { data } = props
    const { topSection, bottomSection } = data

    const hasTopSection = !isEmpty(topSection)
    const hasBottomSection = !isEmpty(bottomSection)

    return (
        <div className='Footer mediumSection'>
            {hasTopSection && renderTopSectionFooter(topSection)}
            {hasBottomSection && renderBottomSectionFooter(bottomSection, isMobile)}
        </div>
    )
}

export default Footer
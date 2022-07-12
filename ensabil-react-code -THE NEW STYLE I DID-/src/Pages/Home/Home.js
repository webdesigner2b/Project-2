import React, { useEffect } from 'react'

import { twoColumnSecondHome, twoColumnThirdHome, twoColumnFourthHome } from './HomeData'
import { largeShadowCardHome } from './HomeData'

import { tryNowSectionHome } from './HomeData'
import { informativeBannerWithLinksHome } from './HomeData'

import LargeShadowCard from '../../Components/LargeShadowCard/LargeShadowCard'
import TryNowSection from '../../Components/TryNowSection/TryNowSection'
import InformativeBannerWithLinks from '../../Components/InformativeBannerWithLinks/InformativeBannerWithLinks'

import TwoColumnSection from '../../Components/Shared/TwoColumnSection/TwoColumnSection'


import './styles.scss'

const Home = (props) => {
    const { aos } = props

    useEffect(() => {
        setTimeout(() => {
            aos?.refreshHard()
        }, 500);
    }, [])

    return (
        
        <div className='Home-Page'>
            <InformativeBannerWithLinks data={informativeBannerWithLinksHome} />
            <TwoColumnSection data={twoColumnSecondHome} />
            <TwoColumnSection data={twoColumnThirdHome} variation={'imageRight'} />
            <TwoColumnSection data={twoColumnFourthHome} noPaddingBottomDesktop />
            <LargeShadowCard data={largeShadowCardHome} />
            
            <TryNowSection data={tryNowSectionHome} />
        </div>

    )
}
export default Home

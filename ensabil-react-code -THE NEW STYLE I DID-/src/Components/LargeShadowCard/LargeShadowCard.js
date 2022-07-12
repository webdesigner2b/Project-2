import React, { Fragment } from 'react'
import Animate from '../Shared/Animations/Animate'
import isEmpty from 'lodash/isEmpty'
import img1 from '../../Assets/Images/LargeShadowCard/xero_box.svg'
import img2 from '../../Assets/Images/LargeShadowCard/quickbooks_books.svg'
import img3 from '../../Assets/Images/LargeShadowCard/more_box.svg'
import img4 from '../../Assets/Images/LargeShadowCard/bank-icon.svg'
import ScanReceiptMobileImg from '../../Assets/Images/LargeShadowCard/scan_receipt_mobile.svg'

import { Grid } from "@mui/material";

import './styles.scss'

const renderTopSection = (data) => {
    const { description, greenTitle, picture, title} = data

    const hasDescription = !isEmpty(description)
    const hasGreenTitle = !isEmpty(greenTitle)
    const hasPicture = !isEmpty(picture)
    const hasTitle = !isEmpty(title)
   

    return (
        <>
        <Fragment>
            <Animate customClass={'informationSection col-lg-7 col-12'} animationName={'fadeLeft'}>
                {hasGreenTitle && <p className='inSectionGreenTitle'>{greenTitle}</p>}
                <Grid conatiner justifyContent="center" directions={{xs:5}}>
                <p className='inSection'>Connect to all your Bank Accounts</p>
                <p className='inSection2'>Automated Reconcilation</p>
            </Grid>
                {hasTitle && <span className='title'>{title}</span>}
                {hasDescription && <p className='description'>{description}</p>}
                <div>
                    <p className='noBigScreen'>Monitoring finances between separate accounts is now easy! You also have the option to enter your data manually.</p>
                </div>     

            </Animate>

                 
            <Animate customClass={'imageSection col-lg-5 col-12'} animationName={'fadeRight'}>
                {hasPicture && <img src={picture} alt='image_top_section' />}
            </Animate>
        </Fragment>

        <Grid container justifyContent="center" >
            <img className='img4' src={img4} alt="columns_bank" />
            </Grid>
        </>
        
    )
}

const renderIconListing = (data) => (
    data.map((element, index) => {
        const { text, icon, icon2, text2 } = element

        const animationProps = {
            animationDelay: index * 200,
            animationDuration: 1000 + index * 200,
            customClass: 'iconTextContainer col-lg-3 col-sm-6 col-12',
            animationName: 'fadeIn',
            key: `icon_text_${index}`
        }
        return (
            <>
            <Animate {...animationProps} >
                <img className='textIcon' src={icon} alt="icon_listing"  />
                <span className='label'>{text}</span>  
            </Animate>
            <img className='textIcon2' src={icon2} alt='icon_listing2' />
            <span className='label2'>{text2}</span>
            </>

           
           
            
        )
    })
)

const renderBottomSection = (data) => {
    const { picture, greenTitle, whiteLink, description1, description2} = data

    const hasPicture = !isEmpty(picture)
    const hasGreenTitle = !isEmpty(greenTitle)
    const hasWhiteLink = !isEmpty(whiteLink)
    const hasDescription1 = !isEmpty(description1)
    const hasDescription2 = !isEmpty(description2)
    
    

    return (
       <>
       <Animate customClass={'bottomSectionContainer'} animationName={'fadeRight'} animationDuration={'4000'}>
            {hasGreenTitle && <span className='inSectionGreenTitleSmaller'>{greenTitle}</span>}
            {hasDescription1 && <p className='description1'>{description1}</p>}
            {hasDescription2 && <p className='description2'>{description2}</p>}
            {hasWhiteLink && <span className='whiteLink'>{whiteLink}</span>}
            {hasPicture && <img className='bottomSectionImage responsive' src={picture} alt='bottom_section' />}
            <Grid container justifyContent="center">
            <img className='ScanReceiptMobileImg' src={ScanReceiptMobileImg} alt="scan-receipt" />
            </Grid>
            <div>
                <p className='extra1'>Integrate your accounting system with Ensabill</p>
                <p className='extra2'>Connect Ensabill with the tools your finance team use every day, to save time and eliminate errors.</p>
            </div>
            <div>
            <Grid container justifyContent="space-around">
                <img  className="littleBoxes" src={img1} alt="logo" />
                <img  className="littleBoxes" src={img2} alt="books" />
                <img  className="littleBoxes" src={img3} alt="box" /> 
                </Grid>
            </div>           

            
        </Animate> 
        </>
        
    )
}

const LargeShadowCard = (props) => {
    const { data } = props
    const { topSection, bottomSection, iconList, iconList2 } = data

    return (
        
        <div className='LargeShadowCard'>
            <div className='largeShadowContainer'>
                <div className='topSection section largeScreenExpander'>
                    {renderTopSection(topSection)}
                </div>
                <div className='iconList smallerSection largeScreenExpander'>
                    {!isEmpty(iconList) && renderIconListing(iconList)}   
                </div>

                <div className='iconList2 smallerSection largeScreenExpander'>
                    {!isEmpty(iconList2) && renderIconListing(iconList2)}   
                </div>
                
                <div className='bottomSection largeScreenExpander'>
                    {renderBottomSection(bottomSection)}
                </div>
            </div>
        </div>
       
    )
}

export default LargeShadowCard
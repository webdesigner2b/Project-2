import cardWithGraph from '../../Assets/Images/TwoColumnSection/new-card-with-graph.svg'

import moneyFromWallet from '../../Assets/Images/TwoColumnSection/control_card_and_budgets.svg'

import sandTimer from '../../Assets/Images/LargeShadowCard/sand-timer.svg'
import moneyTransfer from '../../Assets/Images/LargeShadowCard/new-money-transfer.svg'
import loopMsc from '../../Assets/Images/LargeShadowCard/flash.svg'
import barGraphStocks from '../../Assets/Images/LargeShadowCard/Vector.svg'
import banksCollection from '../../Assets/Images/LargeShadowCard/scan_receipt.svg'
import columnsBank from '../../Assets/Images/LargeShadowCard/new-columns-bank.svg'



import img5 from '../../Assets/Images/LargeShadowCard/save-time-icon.svg'
import img6 from '../../Assets/Images/LargeShadowCard/newMoney-Transfer.svg'
import img7 from '../../Assets/Images/LargeShadowCard/mobile-bar-graph-stock.svg'
import img8 from '../../Assets/Images/LargeShadowCard/mobile-loop-msc.svg'



import tryNow from '../../Assets/Images/TryNowSection/demo_image.svg'

import infographicMobileImage from '../../Assets/Images/InformativeBannerWithLinks/screen-pic.svg'

// import appStore from '../../Assets/Images/Footer/app-store.svg'
// import playStore from '../../Assets/Images/Footer/play-store.svg'



export const twoColumnSecondHome = {
    imageSection: {
        image: { imageSrc: moneyFromWallet }
    },
    textSection: {
        greenTitle: 'Issue unlimited cards',
        title: 'Distribute spend, keep control.',
        description: "Streamline your request and approval process and put team leads in control of their spend. Issue unlimited virtual & physical cards that automatically enforce your company expense policy."
    }
}
export const twoColumnThirdHome = {
    imageSection: {
        image: { imageSrc: cardWithGraph }
    },
    textSection: {
        greenTitle: 'Spending Precision',
        title: "Company real-time overview",
        description: "Get a high-level overview of your company's spending. Real-time visibility into transactions for each employee, department, and vendor. Predict recurrent expenses to make budgeting easier."
    }
}
export const twoColumnFourthHome = {
    imageSection: {
        image: { imageSrc: null }
    },
    textSection: {
        greenTitle: '',
        title: "",
        description: ""
    }
}
export const largeShadowCardHome = {
    topSection: {
        picture: columnsBank,
        greenTitle: 'MERGE EVERYTHING WITH EASE',
        title: '',
        description: "Save time by using Ensabill's expenditure management system to replace unnecessary expense reports. Reconcile in real time and automatically gather receipts.",
    },
    iconList: [
        { icon: sandTimer, text: 'Save your time' },
        { icon: moneyTransfer, text: 'Auto-categorization' },
        { icon: barGraphStocks, text: 'Automatic receipt matching' },
        { icon: loopMsc, text: 'Seamless Accounting integrations' },
     
    ],
    
       
    iconList2: [
        { icon2: img5, text2: 'Save your time' },
        { icon2: img6, text2: 'Transactions Automatically Categorized' },
        { icon2: img7, text2: 'Know which account is underperforming' },
        { icon2: img8, text2: 'Reports will now become one' },
    ],
          


    bottomSection: {
        picture: banksCollection,
        //  whiteLink: "",
        greenTitle: 'Automatic Receipt Matching',
        description1: "You'll be alerted the moment you're charged. Every transaction that requires a receipt is automatically reminded, collected, and matched by Ensabill.",
        description2: "Whatsapp, slack email, and bulk messaging are all options.",
        
    },
}
export const testimonialsSliderHome = {
    slides: [
        
    ],
}
export const tryNowSectionHome = {
    
    image: tryNow,
    cta: {
        value: {
            text: 'Try it free',
            size: 'small',
            href: 'https://ensabill.com/services/download-app',
        }
    }
}
export const informativeBannerWithLinksHome = {
   
    textSection: {
        title: 'The only platform you need for managing your',
        
        description: "Instantly issue unlimited virtual and physical cards to automate your expense reports and your accounting. Ensabill revolves around helping businesses save time and money. We provide an all-in-one platform, where you can issue corporate cards and automate expense traking.",
    
        cta: {
            value: {
                text: 'Get Early Access',
                href: 'https://www.youtube.com/watch?v=GyCJEU6vkmI',
                variation: 'blackText'
            }
        },
        downloadLinks: []
    },
    imageSection: {
        image: infographicMobileImage
    }
}



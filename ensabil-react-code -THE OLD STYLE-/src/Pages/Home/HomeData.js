import cardWithGraph from '../../Assets/Images/TwoColumnSection/card-with-graph.svg'
import flyingMoneyOne from '../../Assets/Images/TwoColumnSection/flying-money-one.svg'
import moneyFromWallet from '../../Assets/Images/TwoColumnSection/money-from-wallet.svg'

import sandTimer from '../../Assets/Images/LargeShadowCard/sand-timer.svg'
import moneyTransfer from '../../Assets/Images/LargeShadowCard/money-transfer.svg'
import loopMsc from '../../Assets/Images/LargeShadowCard/loop-msc.svg'
import barGraphStocks from '../../Assets/Images/LargeShadowCard/bar-graph-stocks.svg'
import banksCollection from '../../Assets/Images/LargeShadowCard/banks-collection.png'
import columnsBank from '../../Assets/Images/LargeShadowCard/columns-bank.svg'

import tryNow from '../../Assets/Images/TryNowSection/try-now.svg'

import infographicMobileImage from '../../Assets/Images/InformativeBannerWithLinks/mobile.svg'

import appStore from '../../Assets/Images/Footer/app-store.svg'
import playStore from '../../Assets/Images/Footer/play-store.svg'

export const twoColumnSecondHome = {
    imageSection: {
        image: { imageSrc: moneyFromWallet }
    },
    textSection: {
        greenTitle: 'amazing features',
        title: 'Budget to never overspend',
        description: 'Be ready for our automatic budgeting assistant that enables you to set your monthly or annual spending limits and then your digital assistant will suggest a spending plan for you.'
    }
}
export const twoColumnThirdHome = {
    imageSection: {
        image: { imageSrc: cardWithGraph }
    },
    textSection: {
        greenTitle: 'amazing features',
        title: "Advanced Reports",
        description: "We know managing your money isn't easy but with the Reports page on Ensabill you can now understand your overall monthly financial performances."
    }
}
export const twoColumnFourthHome = {
    imageSection: {
        image: { imageSrc: flyingMoneyOne }
    },
    textSection: {
        greenTitle: 'amazing features',
        title: "Easily detect overspending",
        description: "We know managing your money isn't easy but with the Reports page on Ensabill you can now understand your overall monthly financial performances."
    }
}
export const largeShadowCardHome = {
    topSection: {
        picture: columnsBank,
        greenTitle: 'MERGE EVERYTHING WITH EASE',
        title: 'Connect to all your Bank Accounts',
        description: 'Monitoring finances between separate accounts is now easy! You also have the option to enter your data manually.',
    },
    iconList: [
        { icon: sandTimer, text: 'Save your time' },
        { icon: moneyTransfer, text: 'Transactions Automatically Categorized' },
        { icon: barGraphStocks, text: 'Know which account is underperforming' },
        { icon: loopMsc, text: 'Reports will now become one' },
    ],
    bottomSection: {
        picture: banksCollection,
        // whiteLink: '+ Let us know if we do not support your Bank yet',
        greenTitle: 'We support 2000+ Banks',
    },
}
export const testimonialsSliderHome = {
    title: 'What people are saying!',
    slides: [
        {
            rating: 5,
            text: '“Incredible app. I first thought I would be lazy to budget, but Ensabill has been making it easy for me. Thank you Ensabill team!!”',
            reviewer: '-Abdo Wehbe'
        },
        {
            rating: 5,
            text: '“Ensabill has been great! I’ve been using it a lot lately an my finances are more in control”',
            reviewer: '-Mohammad Al Falahi'
        },
        {
            rating: 5,
            text: '“Great app!”',
            reviewer: '-Peter Haidar'
        },
        {
            rating: 5,
            text: '“User friendly, and does the job”',
            reviewer: '-Slaiby AlMallah'
        },
    ],
}
export const tryNowSectionHome = {
    title: 'Get your financial assistant today',
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
        title: 'Your smart money assistant!',
        description: 'Ensabill is the all-in-one personal economic assistant that helps in setting and achieving all financial goals.',
        cta: {
            value: {
                text: 'Watch our features in action',
                href: 'https://www.youtube.com/watch?v=GyCJEU6vkmI',
                variation: 'blackText'
            }
        },
        downloadLinks: [{ link: 'https://play.google.com/store/apps/details?id=com.ensabill', icon: playStore }, { link: 'https://www.google.com', icon: appStore }]
    },
    imageSection: {
        image: infographicMobileImage
    }
}
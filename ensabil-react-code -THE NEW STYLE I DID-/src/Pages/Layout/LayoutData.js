import ensabilLogo from '../../Assets/Images/Footer/ensabill-logo.svg'
import ensabilLogoMobile from '../../Assets/Images/Footer/ensabill-logo-mobile.svg'
import appStore from '../../Assets/Images/Footer/app-store.svg'
import playStore from '../../Assets/Images/Footer/play-store.svg'

// import facebookIcon from '../../Assets/Images/Footer/facebook-icon.svg'
import instagramIcon from '../../Assets/Images/Footer/instagram-icon.svg'
// import discordIcon from '../../Assets/Images/Footer/discord-icon.svg'
import twitterIcon from '../../Assets/Images/Footer/twitter-icon.svg'
import youtubeIcon from '../../Assets/Images/Footer/youtube-icon.svg'

import ensabillNavigationBarLogoPreScroll from '../../Assets/Images/NavigationBar/ensabill-logo-pre-scroll.svg'
import ensabillNavigationBarLogoPostScroll from '../../Assets/Images/NavigationBar/ensabill-logo-post-scroll.svg'
import discoverEnsabill from '../../Assets/Images/NavigationBar/discover-ensabill.svg'

import arrowWhiteRight from '../../Assets/Images/PreNavBar/arrow-white-right.svg'





export const preNavBarData = {
    preNavBarContent: {
        arrow: arrowWhiteRight,
        prevNavBarText: 'Join now our community on Discord!',
        link: 'https://discord.gg/e2X5mNzqwG'
    }
}
export const navBarData = {
    navbarLeftSection: {
        ensabillPreScrollLogo: { imageSource: ensabillNavigationBarLogoPreScroll },
        ensabillPostScrollLogo: { imageSource: ensabillNavigationBarLogoPostScroll }
    },
    navbarRightSection: [
        { text: 'Home', link: '/' },
        { text: 'Demo', link: '#' },
        
    ],
    navBarRightSectionMobile: [
        { image: discoverEnsabill, link: 'google.com' },
        { text: 'Home page', link: '/' },
        { text: 'Demo', link: '#' },
        { text: '', link: '#' },
        { text: '', link: '#' },
        { text: 'Contact us', link: '#' },
    ]
}

export const footerData = {
    
    topSection: {
        
        columns: [
          
            { columnTitle: 'Overview', list: ['Home', 'Demo', 'Register interest', ''] },
            
            { columnTitle: 'OUR CONTACTS', contactList: [{ text: 'hello@ensabill.com', link: 'mailto:' }, { text: '+9618145215', link: 'tel:' }] },
            { columnTitle: 'OUR ADDRESS', list: ['Kemp House,', '152-160 City Rd,', 'London EC1V 2NX,', 'United Kingdom'] },

        ]
        

       
    },
    bottomSection: {
        logoRightsSection: {
            ensabillLogo: { logo: ensabilLogoMobile, link: '/' },
            logosDesktop: [
                { logo: ensabilLogo, link: '/' },
               
            ],
            logosMobile: [
                { logo: playStore, link: 'https://play.google.com/store/apps/details?id=com.ensabill' },
                { logo: appStore, link: 'google.com' }
            ],
            rightsSection: {
                partOne: '© 2021, Ensabill Limited. All Rights Reserved.',
                partTwo: 'Ensabill is registered and incorporated in England and Wales.'
            }
        },
        socialSection: {
            labelSection: [
                { text: 'Privacy Policy', link: 'privacy_policy.html' },
                { text: 'Terms and Conditions', link: 'terms-and-conditions.html' }
            ],
            socialMediaIcons: [
                // { icon: facebookIcon, link: 'https://facebook.com/ensabill' },
                { icon: twitterIcon, link: 'https://twitter.com/ensabill' },
                { icon: instagramIcon, link: 'https://instagram.com/ensabillapp' },
                { icon: youtubeIcon, link: 'https://www.youtube.com/watch?v=GyCJEU6vkmI' },
                
            ]
        }
    }
}

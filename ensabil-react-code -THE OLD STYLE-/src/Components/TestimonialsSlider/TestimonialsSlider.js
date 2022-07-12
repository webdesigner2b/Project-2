import React from 'react'

import Slider from '../Shared/Slider/index'
import Animate from '../Shared/Animations/Animate'

import nextIcon from '../../Assets/Images/TestimonialsSlider/next-icon.svg'
import prevIcon from '../../Assets/Images/TestimonialsSlider/prev-icon.svg'
import star from '../../Assets/Images/TestimonialsSlider/star.svg'

import isEmpty from 'lodash/isEmpty';

import './styles.scss'

const slickArrows = (icon) => (
    <img className='arrowStyle' src={icon} alt='slick_button' />
)

const handleBorderPsuedoElementRemoval = () => {
    const afterChangeActive = document.getElementsByClassName("slick-cloned")
    const parentTarget = afterChangeActive[afterChangeActive.length - 1]
    const target = parentTarget?.getElementsByClassName("addBorder")
    target[0]?.classList?.remove("addBorder")
}

const renderSlides = (slides) => (
    slides.map((element, index) => {
        const { rating, text, reviewer } = element

        const hasText = !isEmpty(text)
        const hasReviewer = !isEmpty(reviewer)

        return (
            <div className='reviewContainer' key={`reviews_${index}`}>
                {hasText && <span className='reviewText'>{text}</span>}
                {hasReviewer && <span className='reviewer'>{reviewer}</span>}

                <div className='starContainer'>
                    {Array.from({ length: rating }, () => star).map((element, index) => (
                        <img className='starIcon' src={element} alt='star_rating' key={`star_${index}`} />
                    ))}
                </div>
            </div>
        )
    })
)

const TestimonialsSlider = (props) => {
    const { data } = props
    const { title, slides } = data

    const hasTitle = !isEmpty(title)
    const hasSlides = !isEmpty(slides)

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: 'linear',
        prevArrow: slickArrows(prevIcon),
        nextArrow: slickArrows(nextIcon),
        beforeChange: (e) => {
            handleBorderPsuedoElementRemoval()
        },
        onInit: (e) => {
            // AOS.refresh();
            handleBorderPsuedoElementRemoval()
        },
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    beforeChange: (e) => {
                        handleBorderPsuedoElementRemoval()
                    },
                    onInit: (e) => {
                        handleBorderPsuedoElementRemoval()
                    },
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: true,
                    beforeChange: (e) => {
                        handleBorderPsuedoElementRemoval()
                    },
                    onInit: (e) => {
                        handleBorderPsuedoElementRemoval()
                    },
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <Animate customClass={'TestimonialsSlider section'} animationName={'fadeLeft'}>
            {hasTitle && <span className='testimonialsTitle'>{title}</span>}
            {hasSlides &&
                <Slider {...settings}>
                    {renderSlides(slides)}
                </Slider>
            }
        </Animate>
    )
}

export default TestimonialsSlider
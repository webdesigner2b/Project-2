import React from 'react'

import Animate from '../Shared/Animations/Animate'
import Button from '../Shared/Button/Button'

import isEmpty from 'lodash.isempty'

import './styles.scss'

const TryNowSection = (props) => {
    const { data } = props
    const { image, title, cta } = data

    const hasImage = !isEmpty(image)
    const hasTitle = !isEmpty(title)
    const hasCta = !isEmpty(cta)
    const additionalProps = { src: image, alt: 'try_now_image' }

    return (

        <div className='TryNowSection largeScreenExpander'>
            {hasTitle &&
                <Animate customClass={'titleContainer'} animationName={'fadeLeft'} >
                    <div className='content'>
                        <span className='title'>{title}</span>
                        {hasCta && <Button data={cta} customClass={'buttonTryNowSection'} />}
                    </div>
                </Animate>}
            {hasImage &&
                <Animate animationName={'fadeRight'}>
                    <img className='largeOverlayImage' src={image} alt='try_now_image' />
                </Animate>}
        </div>
    )
}

export default TryNowSection
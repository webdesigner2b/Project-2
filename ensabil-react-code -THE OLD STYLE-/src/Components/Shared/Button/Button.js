import React from 'react'

import './styles.scss'

const BUTTON_VARIATONS_STYLE = ['blackText']
const BUTTON_VARIATONS_SIZE = ['small']

const Button = (props) => {
    const { data, customClass = '' } = props
    const { value } = data
    const { text, href, variation, size } = value

    const applyVariationStyle = BUTTON_VARIATONS_STYLE.includes(variation) ? 'blackText' : 'whiteText'
    const applyVariationSize = BUTTON_VARIATONS_SIZE.includes(size) ? 'small' : 'large'

    return (
        <a href={href} className={`buttonLink ${customClass}`}>
            <div className={`buttonContainer ${applyVariationStyle && applyVariationStyle} ${applyVariationSize && applyVariationSize}`} >
                {text}
            </div>
        </a>
    )
}

export default Button
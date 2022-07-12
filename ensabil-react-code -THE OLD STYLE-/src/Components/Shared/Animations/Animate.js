import React from 'react';

const Animate = ({ alwaysRun = false,
    elementType = 'div',
    animationName,
    animationDuration = 2000,
    animationDelay = 0,
    variants,
    transition,
    customClass,
    additionalProps = {},
    children,
    inlineStyles = {} }) => {

    const renderDomType = (elementType) => {

        const animations = {
            animateDown: 'slide-down',
            animateLeft: 'slide-left',
            animateLeftPos: 'slide-left',
            animateRight: 'slide-right',
            animateRightPos: 'slide-right',
            animateUp: 'slide-up',
            fadeIn: 'fade-in',
            fadeOut: 'fade-out',
            fadeRight: 'fade-right',
            fadeLeft: 'fade-left',
        }

        switch (elementType) {
            case 'div':
                return <div
                    className={customClass}
                    data-aos={animations[animationName] || ''}
                    data-aos-once="true"
                    data-aos-duration={animationDuration}
                    data-aos-delay={animationDelay}
                    style={{ ...inlineStyles }}
                    {...additionalProps}
                >
                    {children}
                </div>;
            case 'img':
                return <img
                    className={customClass}
                    data-aos={animations[animationName] || ''}
                    data-aos-once="true"
                    data-aos-duration={animationDuration}
                    data-aos-delay={animationDelay}
                    style={{ ...inlineStyles }}
                    alt={additionalProps.alt}
                    src={additionalProps.src}
                />
            case 'li':
                return <li
                    className={customClass}
                    data-aos={animations[animationName] || ''}
                    data-aos-once="true"
                    data-aos-duration={animationDuration}
                    data-aos-delay={animationDelay}
                    style={{ ...inlineStyles }}
                >
                    {children}
                </li>;
            case 'a':
                return <a
                    className={customClass}
                    data-aos={animations[animationName] || ''}
                    data-aos-once="true"
                    data-aos-duration={animationDuration}
                    data-aos-delay={animationDelay}
                    style={{ ...inlineStyles }}
                    href={additionalProps.href}
                >
                    {children}
                </a>;
            default:
                return;
        }
    }

    return renderDomType(elementType)

}
export default Animate;

import React from 'react'

import Animate from '../Shared/Animations/Animate'
import Button from '../Shared/Button/Button'
import {Grid} from '@mui/material'

import isEmpty from 'lodash.isempty'

import './styles.scss'
import { Grid3x3Rounded } from '@mui/icons-material'

const TryNowSection = (props) => {
    const { data } = props
    const { image, title, cta } = data

    const hasImage = !isEmpty(image)
    const hasTitle = !isEmpty(title)
    const hasCta = !isEmpty(cta)
    const additionalProps = { src: image, alt: 'try_now_image' }

    return (
        <>
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
                    <p className='para'> Check out the demo right now! </p>
                    <p className='para2'>Start using Ensabill Completely for Free!</p>
                    <button className='paraBtn'>Try Demo</button>
                    <img className='largeOverlayImage' src={image} alt='try_now_image' />

                    <div>
                        <p className='heading'>Start using Ensabill Completely for Free!</p>
                    </div>


                    
                    <form className='form'>
                    <label for="name">Enter your name</label>
                    <input type="text" id="name" name="name"/>
                    <label for="lname">Enter your email</label>
                    <input type="email" id="email" name="email"/>
                    <label for="businessLocation">Where is your business located</label>
                    <input type="text" id="businessLocation" name="businessLocation"/>
                    <label for="companyName">Company name</label>
                    <input type="text" id="companyName" name="companyName"/>
                    <label for="employeesNo">Number of emplyees</label>
                    <input type="number" id="employeesNo" name="employeesNo"/>
                    </form>  
                        
 
                     <form className='form2'>
                     <label className='label2' for="name">Name</label>
                    <input className='input2' type="text" id="name" name="name"/>
                    <label className='label2' for="number">Number</label>
                    <input className='input2' for="text" id="number" name="number"/>
                    <label className='label2' for="lname">Email</label>
                    <input className='input2' type="email" id="email" name="email"/>
                    <label className='label2' for="businessLocation">Where is your business located</label>
                    <input className='input2' type="text" id="businessLocation" name="businessLocation"/>
                    <label className='label2' for="companyName">Company name</label>
                    <input className='input2' type="text" id="companyName" name="companyName"/>
                    <label className='label2' for="employeesNo">Number of emplyees</label>
                    <input className='input2' type="number" id="employeesNo" name="employeesNo"/>
                     </form>



                    <button className='formBtn'>Get early access</button>
                    <button className='formBtn2'>Get early access</button>
                          
                </Animate>}     
        </div>

        </>
    )
}

export default TryNowSection
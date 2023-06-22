import React, { Component } from 'react'

import image1 from '../../img/gallery/Image1.jpg'
import image2 from '../../img/gallery/Image2.jpg'
import image3 from '../../img/gallery/Image3.jpg'
import image4 from '../../img/gallery/Image4.jpg'
import image5 from '../../img/gallery/Image5.jpg'
import image6 from '../../img/gallery/Image6.jpg'

export default class GalleryImg extends Component {
    render() {
        return (
            <div className='gallery__photos'>
                <div className='gallery__column'>
                    <img src={image1} alt='Gallery item of photo'/>
                    <img src={image2} alt='Gallery item of photo'/>
                </div>
                <div className='gallery__column'>
                    <img src={image3} alt='Gallery item of photo'/>
                    <img src={image4} alt='Gallery item of photo'/>
                </div>
                <div className='gallery__column'>
                    <img src={image5} alt='Gallery item of photo'/>
                    <img src={image6} alt='Gallery item of photo'/>
                </div>
            </div>
        )
    }
}

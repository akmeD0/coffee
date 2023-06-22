import React, { Component } from 'react'
import GalleryTop from './GalleryTop'
import GalleryImg from './GalleryImg'
import GalleryBottom from './GalleryBottom'

export default class Gallery extends Component {
    render() {
        return (
            <section className='gallery' id='gallery'>
                <GalleryTop />
                <GalleryImg />
                <GalleryBottom />
            </section>
        )
    }
}

import React, { Component } from 'react'

import headerImg from '../../img/header_img.png'

export default class HeaderMain extends Component {
    scrollToAnchor(anchorId) {
        const anchor = document.getElementById(anchorId);

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth' });
        }
    }
    render() {
        return (
            <div className='header__main'>
                <img src={headerImg} alt='cup of coffee' className='header__img' />
                <div className='header__info'>
                    <h1 className='header__title'>Keep your dreams aroused with a cup of coffee.</h1>
                    <p className='header__text'>The coffee ideas shared by these generators are not cool at all, as they are not a human being.</p>
                    <button className='header__btn--buy' onClick={() => this.scrollToAnchor('buy')}>Buy Now</button>
                </div>
            </div>
        )
    }
}

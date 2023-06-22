import React, { Component } from 'react'
import arrow from '../../img/arrow.svg'
import OffersList from './OffersList'

export default class Offers extends Component {
    render() { 
        return (
            <section className='offers' id="buy">
                <div className='offer__topic'>
                    <div>
                        <h2 className='offer__title'>That is Our Best Offer</h2>
                        <div className='offer__control'>
                            <button onClick={this.props.onRight} className='offer__button offer__button--left'><img alt='arrow' src={arrow} /></button>
                            <button onClick={this.props.onLeft} className='offer__button offer__button--right'><img alt='arrow' src={arrow} /></button>
                        </div>
                    </div>
                    <p className='offer__text'>A coffee shop will help you to tell the audience what your business.</p>
                </div>
                <OffersList articles={this.props.articles} onAdd={this.props.onAdd} />
            </section>
        )
    }
}

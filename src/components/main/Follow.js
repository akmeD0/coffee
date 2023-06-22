import React, { Component } from 'react'
import FollowTop from './FollowTop'

import leftCoffee from '../../img/left_coffee.png'
import rightCoffee from '../../img/right_coffee.png'
import FollowBottom from './FollowBottom'

export default class Follow extends Component {
    render() {
        return (
            <section className='follow' id='contact'>
                <div className='follow__cont'>
                    <img src={leftCoffee} alt='Coffee beans' className='coffee__beans left'/>
                    <FollowTop />
                    <FollowBottom
                        contacts={this.props.contacts}
                        mail={this.props.mail}
                        phone={this.props.phone}
                    />
                    <img src={rightCoffee} alt='Coffee beans' className='coffee__beans right' />
                </div>
            </section>
        )
    }
}

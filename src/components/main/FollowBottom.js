import React, { Component } from 'react'

export default class FollowBottom extends Component {
    render() {
        return (
            <div className='follow__bottom'>
                <div className='follow__contacts'>
                    <a className='follow__phone' href="tel:+8801742527137">
                        <img src={this.props.phone} alt='Phone Number' />
                        +8801742-527137
                    </a>
                    <a className='follow__mail' href='mailto:mdmaksedur17@gmail.com'>
                        <img src={this.props.mail} alt='Email' />
                        mdmaksedur17@gmail.com
                    </a>
                </div>
                <div className='follow__soc'>
                    {this.props.contacts.map((el) => (
                        <button key={el.id}>
                            <img src={el.image} alt='Social logo' />
                        </button>
                    ))}
                </div>
            </div>
        )
    }
}

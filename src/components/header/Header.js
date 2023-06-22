import React, { Component } from 'react'
import HeaderTop from './HeaderTop'
import HeaderMain from './HeaderMain'

export default class Header extends Component {
    logo = this.props.logo
    nav = this.props.nav
    render() {
        return (
            <header  className='header' id='home'>
                <div className='header__top--box' id='header__top' ></div>
                <div className='cont'>
                    <HeaderTop
                        totalSum={this.props.totalSum}
                        cartList={this.props.cartList}
                        logo={this.logo} nav={this.nav}
                        cartSum={this.props.cartSum}
                        onClear={this.props.onClear}
                        scrollToAnchor={this.props.scrollToAnchor}
                    />
                    <HeaderMain
                        scrollToAnchor={this.props.scrollToAnchor}
                    />
                </div>
            </header>
        )
    }
}
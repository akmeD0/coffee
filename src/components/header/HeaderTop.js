import React, { Component } from 'react'

export default class HeaderTop extends Component {
    logo = this.props.logo
    nav = this.props.nav
    coffee1 = this.props.coffee1
    coffee2 = this.props.coffee2
    coffee3 = this.props.coffee3

    constructor(props) {
        super(props)
        this.className = this.className.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.className);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.className);
    }

    render() {
        return (
            <div className='header__top'>
                <button onClick={() => {
                    window.location.reload()
                }} className='header__logo'>
                    <img alt='Coffee' className='header__logo' src={this.logo} />
                </button>
                <div className='header__side'>
                    <nav className='header__nav'>
                        {this.nav.map((el) => (
                            <p onClick={() => this.props.scrollToAnchor(`${el.link}`)} key={el.text} className={el.class}>{el.text}</p>
                        ))}
                    </nav>
                    <div className='header__btns'>
                        <button className='header__btn header__btn--search'></button>
                        <button className='header__btn header__btn--cart' onClick={() => {
                            document.getElementById('cartList').classList.toggle('active')
                        }}>
                            <div>
                                <span>{this.props.cartSum}</span>
                            </div>
                        </button>
                        <div className='cart__list' id='cartList'>
                            <ul>
                                {this.props.cartList.map((el) => (
                                    <li key={el.id}>
                                        <p className='count'>x{el.count}</p>
                                        <img src={el.pic} alt='Coffee' />
                                        <p className='name'>{el.name}</p>
                                        <p className='price' id='price'><span>$</span>{el.price.toFixed(2)}</p>
                                    </li>
                                ))}
                                <hr className='hr'/>
                                <div className='total'>
                                    <div className='total__btns'>
                                        <button className='total__buy'>Buy</button>
                                        <button className='total__clear' onClick={this.props.onClear}>Clear</button>
                                    </div>
                                    <div className='total__info'>
                                        <span className='title'>Total:</span>
                                        <span className='full__price'><span>$</span>{this.props.totalSum.toFixed(2)}</span>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    className() {
        if (window.scrollY >= 100) {
            document.getElementById('header__top').classList.add('active');
        } else {
            document.getElementById('header__top').classList.remove('active');
        }
    }
}

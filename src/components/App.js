import React, { Component } from 'react'
import Header from './header/Header'
import Main from './main/Main'

import coffee1 from '../img/coffee1.png'
import coffee2 from '../img/coffee2.png'
import coffee3 from '../img/coffee3.png'
import coffee4 from '../img/coffee4.png'
import coffee5 from '../img/coffee5.png'
import logo from '../img/logo.svg'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigation: [
                {
                    text: "Home",
                    link: "#home"
                },
                {
                    text: "About Us",
                    link: "#about"
                },
                {
                    text: "Menu",
                    link: "#menu"
                },
                {
                    text: "Review",
                    link: "#review"
                },
                {
                    text: "Contact",
                    link: "#contact"
                }
            ],
            cartList: [
                {
                    id: 0,
                    pic: coffee1,
                    count: 0,
                    name: "Brazilian coffe beans",
                    price: 0
                },
                {
                    id: 1,
                    pic: coffee2,
                    count: 0,
                    name: "Vietnam coffe beans",
                    price: 0
                },
                {
                    id: 2,
                    pic: coffee3,
                    count: 0,
                    name: "Indonesian coffe beans",
                    price: 0
                },
                {
                    id: 3,
                    pic: coffee4,
                    count: 0,
                    name: "Ukrainian coffe beans",
                    price: 0
                },
                {
                    id: 4,
                    pic: coffee5,
                    count: 0,
                    name: "Brazilian coffe beans",
                    price: 0
                }
            ],
            articles: [
                {
                    id: 0,
                    pic: coffee1,
                    ident: "coffee1",
                    price: "5.99",
                    name: "Brazilian coffe beans",
                    desc: "Coffee that’s always you handle your own the way you like. "
                },
                {
                    id: 1,
                    pic: coffee2,
                    ident: "coffee2",
                    price: "4.99",
                    name: "Vietnam coffe beans",
                    desc: "Coffee that’s always you handle your own the way you like. "
                },
                {
                    id: 2,
                    pic: coffee3,
                    ident: "coffee3",
                    price: "3.99",
                    name: "Indonesian coffe beans",
                    desc: "Coffee that’s always you handle your own the way you like. "
                },
                {
                    id: 3,
                    pic: coffee4,
                    ident: "coffee4",
                    price: "6.99",
                    name: "Ukrainian coffe beans",
                    desc: "Coffee that’s always you handle your own the way you like. "
                },
                {
                    id: 4,
                    pic: coffee5,
                    ident: "coffee5",
                    price: "2.99",
                    name: "Brazilian coffe beans",
                    desc: "Coffee that’s always you handle your own the way you like. "
                }
            ],
            cartSum: 0,
            first: 0,
            sec: 0,
            third: 0
        }
        this.onAdd = this.onAdd.bind(this)
        this.onClear = this.onClear.bind(this)
        this.onLeft = this.onLeft.bind(this)
        this.onRight = this.onRight.bind(this)
    }
    render() {
        return (
            <div className='wrapper'>
                <Header
                    onClear={this.onClear}
                    totalSum={this.state.first + this.state.sec + this.state.third}
                    logo={logo}
                    nav={this.state.navigation}
                    cartSum={this.state.cartSum}
                    cartList={this.state.cartList}
                />
                <Main
                    onAdd={this.onAdd}
                    onLeft={this.onLeft}
                    onRight={this.onRight}
                    articles={this.state.articles}
                />
                <footer></footer>
            </div>
        )
    }
    onAdd(number, spanEl, elId) {
        if (elId === "coffee1") {
            this.state.cartList.forEach((el) => {
                if (el.id === 0) {
                    el.count = el.count + number
                    el.price = el.count * 5.99
                    this.setState({ first: el.price })
                }
            })
        } else if (elId === "coffee2") {
            this.state.cartList.forEach((el) => {
                if (el.id === 1) {
                    el.count = el.count + number
                    el.price = el.count * 4.99
                    this.setState({ sec: el.price })
                }
            })
        } else if (elId === "coffee3") {
            this.state.cartList.forEach((el) => {
                if (el.id === 2) {
                    el.count = el.count + number
                    el.price = el.count * 3.99
                    this.setState({ third: el.price })
                }
            })
        } else if (elId === "coffee4") {
            this.state.cartList.forEach((el) => {
                if (el.id === 3) {
                    el.count = el.count + number
                    el.price = el.count * 6.99
                    this.setState({ third: el.price })
                }
            })
        } else {
            this.state.cartList.forEach((el) => {
                if (el.id === 4) {
                    el.count = el.count + number
                    el.price = el.count * 2.99
                    this.setState({ third: el.price })
                }
            })
        }
        const nullNumb = 0;
        spanEl.innerText = nullNumb.toString();
        this.setState({ cartSum: this.state.cartSum + number })
    }
    onClear() {
        let cleared = 0;
        const updatedCartList = this.state.cartList.map((el) => ({
            ...el,
            price: cleared,
            count: cleared
        }));
        this.setState({
            cartList: updatedCartList,
            first: cleared,
            sec: cleared,
            third: cleared,
            cartSum: cleared
        });
    }
    onLeft() {
        const limit = -405 * (this.state.articles.length - 3);
        const coffee = document.querySelectorAll('#coffee')

        coffee.forEach(el => {
            let currentLeft = parseInt(el.style.left) || 0;
            let newLeft = currentLeft - 405;
            if (newLeft < limit) {
                newLeft = limit;
            }

            el.style.left = `${newLeft}px`;
        })
    }
    onRight() {
        const coffee = document.querySelectorAll('#coffee')

        coffee.forEach(el => {
            let currentLeft = parseInt(el.style.left) || 0;
            if (currentLeft < 0) {
                el.style.left = currentLeft + 405 + "px";
            }
        })
    }
}

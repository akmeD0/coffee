import React, { Component } from 'react'

export default class OffersList extends Component {
    onAdd = this.props.onAdd
    render() {
        return (
            <div className='list'>
                {this.props.articles.map((el) => (
                    <div className='coffee' key={el.id} id='coffee'>
                        <img alt='Coffee' src={el.pic} className='pic' />
                        <p className='price'><span>$</span>{el.price}</p>
                        <p className='name'>{el.name}</p>
                        <p className='desc'>{el.desc}</p>
                        <div className='bottom'>
                            <div className='counter'>
                                <span id={el.ident} className='number'>0</span>
                                <div className='counter__btns'>
                                    <button className='counter__button counter__button--add' onClick={() => {
                                        const spanId = el.ident;
                                        const spanElement = document.getElementById(spanId);
                                        const currentNumber = parseInt(spanElement.innerText);
                                        if (currentNumber === 99) {
                                            alert("Limit!")
                                        } else {
                                            const newNumber = currentNumber + 1;
                                            spanElement.innerText = newNumber.toString();
                                        }
                                    }}></button>
                                    <button className='counter__button counter__button--min' onClick={() => {
                                        const spanId = el.ident;
                                        const spanElement = document.getElementById(spanId);
                                        const currentNumber = parseInt(spanElement.innerText);
                                        if (currentNumber===0) {
                                            alert("The number cannot be less than 0!")
                                        } else {
                                            const newNumber = currentNumber - 1;
                                            spanElement.innerText = newNumber.toString();
                                        }
                                    }}></button>
                                </div>
                            </div>
                            <button className='add__coffee' onClick={() => {
                                const spanId = el.ident;
                                const spanElement = document.getElementById(spanId);
                                const currentNumber = parseInt(spanElement.innerText);
                                if (currentNumber===0) {
                                    alert("The number must be greater than 0!")
                                } else {
                                    this.onAdd(currentNumber, spanElement, spanId)
                                }
                            }}>Get Delivery</button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

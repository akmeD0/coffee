import React, { Component } from 'react'
import Offers from './Offers'

export default class Main extends Component {
    render() {
        return (
            <main className='main'>
                <div className='cont'>
                    <Offers
                        onAdd={this.props.onAdd}
                        onLeft={this.props.onLeft}
                        onRight={this.props.onRight}
                        articles={this.props.articles}
                    />
                </div>
            </main>
        )
    }
}

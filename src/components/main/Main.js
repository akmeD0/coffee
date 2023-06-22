import React, { Component } from 'react'
import Offers from './Offers'
import Gallery from './Gallery'
import Follow from './Follow'

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
                    <Gallery />
                </div>
                <Follow
                    contacts={this.props.contacts}
                    mail={this.props.mail}
                    phone={this.props.phone}
                />
            </main>
        )
    }
}

import React, { Component } from "react"
import ReactPlayer from 'react-player'
import './App.css'

import User from '../components/User'
import Title from '../components/Title'

class App extends Component {

    render() {

        const user1 = {
            name: 'Dan',
            lastName: 'Mihail',
            age: 45,
            postalCode: 28002,
            avatar: 'https://images.cdn2.stockunlimited.net/clipart/a-grandmother_1240564.jpg'
        },
            user2 = {
                name: 'Ger',
                lastName: 'Alv',
                age: 32,
                postalCode: 28119,
                avatar: 'https://images.cdn2.stockunlimited.net/clipart/a-grandmother_1240564.jpg'
            },
            user3 = {
                name: 'Laura',
                lastName: 'Martín',
                age: 32,
                postalCode: 8653,
                avatar: 'https://images.cdn2.stockunlimited.net/clipart/a-grandmother_1240564.jpg'
            }


        return (
            <main className="App">

                <Title text="Lista de usuarios" />
                <User {...user1} />
                <User {...user2} />
                <User {...user3} />

                <Title text="Vídeo promocional" />
                <ReactPlayer
                    url="https://vimeo.com/channels/top/22439234"
                    playing
                    muted
                />
            </main>
        )
    }
}

export default App
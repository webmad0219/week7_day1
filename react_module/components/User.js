import React from 'react'
import Separator from './Separator'

function User(props) {

    console.log(props)

    return (
        <article className="user">
            <img src={props.avatar} alt={props.name}></img>
            <p>Mi nombre es {props.name} {props.lastName}.</p>
            <p>Tengo {props.age} años.</p>
            <Separator />
            <small>Código postal: {props.postalCode}</small>
        </article>
    )
}

export default User
import React from 'react';
import Separator from './Separator';

function Title(props) {
    return (
        <header>
            <h2>{props.text}</h2>

            <Separator />
        </header>
    )
}

export default Title
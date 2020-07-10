import React from 'react'
import './NoBackgroundButton.css'

export default function NoBackgroundButton(props) {
    
    return (
        <button className={`Button ${props.buttonType}`} onClick={props.click}>
            {props.children}
        </button>
    )
}

import React from 'react'
import './Layout.css'


export default function Layout(props) {
    return (
        <div className="Layout">
            {props.children}
        </div>
    )
}

import React from 'react'
import logo from '../../../../assets/Logo.png';
import './Logo.css'

export default function Logo() {
    return (
        <div className="Logo">
            <img src={logo} alt="main logo"/>
        </div>
    )
}

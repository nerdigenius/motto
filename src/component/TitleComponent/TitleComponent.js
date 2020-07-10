import React from 'react'
import TitleComponentBackGround from './TitleComponentBackground/TitleComponentBackGround'
import SearchBar from './SearchBar/SearchBar'
import './TitleComponent.css'

export default function TitleComponent() {
    return (
        <div className="TitleComponent">
            <TitleComponentBackGround/>             
            <SearchBar/>
        </div>
    )
}

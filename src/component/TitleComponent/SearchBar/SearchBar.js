import React from 'react'
import './SearchBar.css'
import searchicon from '../../../assets/search.png'

export default function SearchBar() {
    return (
        <div className='SearchBar'>
            <h1 style={{color:'white'}}>
            Your local source of high quality images
and videos directly from their creators
            </h1>
            
            <div className='input'>
                <input className='text-area'/>
                <img className='searchicon'src={searchicon} alt="searchIcon"/>
            </div>
            
        </div>
    )
}

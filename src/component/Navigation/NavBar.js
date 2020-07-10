import React, { Component } from 'react'
import Logo from './NavigationItems/Logo/Logo'
import './NavBar.css';
import NoBackgroundButton from './NavigationItems/NoBackgroundButton/NoBackgroundButton';
export default class NavBar extends Component {
    state={
        active:false,
        menuClass:'dots'
    }
    menuclick=()=>{
        
        
        console.log('works')
    }
    render() {
        return (
            <div className='NavBar'>
                <Logo />
                <nav style={{ display: 'flex'}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderRight: '2px solid #B9B9B9', paddingRight: '20px', alignItems: 'center' }}>
                        <NoBackgroundButton buttonType='text-gray'>Explore</NoBackgroundButton>
                        <NoBackgroundButton buttonType='text-gray'>Discover</NoBackgroundButton>
                        <NoBackgroundButton buttonType='text-gray'>For Professionals</NoBackgroundButton>
                        <NoBackgroundButton buttonType={this.state.menuClass} click={this.menuclick}>
                            <span></span>
                        </NoBackgroundButton>
                        <NoBackgroundButton buttonType='grey-border' style={{ marginRight: '20px' }}>Submit Photos</NoBackgroundButton>
                    </div>
                    <div>
                        <NoBackgroundButton buttonType='text-gray'>Login</NoBackgroundButton>
                        <NoBackgroundButton buttonType='orange-background'>Join Free</NoBackgroundButton>
                    </div>

                </nav>
            </div>
        )
    }
}

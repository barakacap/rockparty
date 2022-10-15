import React from 'react'
import './index.scss'

import logo from '../../assets/images/logo.webp'


import instaIcn from '../../assets/images/social/instagram.png'
import discordIcn from '../../assets/images/social/discord.png'
import emailIcn from '../../assets/images/social/mail.png'
import twitterIcn from '../../assets/images/social/twitter.png'



function index() {
    const openLink=(link)=>{
        window.open(link)
    }
    return (
        <div className='footer'>
            <div className='footer-inner'>
                <img className='footer-logo' src={logo}/>
                <div className='footer-social-wrapper'>
                    <button onClick={()=>openLink('https://www.instagram.com/rockpartynft/')}>
                        <img src={instaIcn}/>
                    </button>
                    <button onClick={()=>openLink('https://twitter.com/RockPartyNFT')}>
                        <img src={twitterIcn}/>
                    </button>
                    <button onClick={()=>openLink('https://dsc.gg/RockPartyNFT')}>
                        <img src={discordIcn}/>
                    </button>
                    <button onClick={()=>openLink('mailto:backstage@rockparty.io')}>
                        <img src={emailIcn}/>
                    </button>
                </div>

                <p className='ffam-lato fs-s tc-white'>
                    © 2021 Rock Party Labs LLC
                </p>
            </div>
        </div>
    )
}

export default index
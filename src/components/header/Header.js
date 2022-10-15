import React, { useEffect,useState } from 'react'

import logo from '../../assets/images/logo.webp'
import './Header.scss'

import { useNavigate,useLocation } from "react-router-dom";



import instaIcn from '../../assets/images/social/instagram.png'
import discordIcn from '../../assets/images/social/discord.png'
import emailIcn from '../../assets/images/social/mail.png'
import twitterIcn from '../../assets/images/social/twitter.png'

function Header() {
    const [headerMobileOpen, setHeaderMobileOpen] = useState(false)
    const navigateTo=useNavigate()
    const location=useLocation()
    const [locations,setLocations]=useState([])


    const openLink = (link) => {
        window.open(link)
    }

    useEffect(()=>{
        switch(location.pathname){
            // case '/mint':
            //     setLocations(['home','backstage'])
            //     break
            case '/':
                // setLocations(['mint','about','backstage','basics','roadmap'])
                setLocations(['about','basics','roadmap'])

                break
            // case '/backstage':
            //     setLocations(['home','mint'])
            //     break
        }


        const app=document.getElementsByClassName('App')[0]
        const header=document.getElementsByClassName('header')[0]

        const aboutTop=document.getElementsByClassName('about')[0]?.getBoundingClientRect().top
        app.addEventListener('scroll', () => {
            let currentTop=document.getElementsByClassName('about')[0]?.getBoundingClientRect().top
            console.log(currentTop)
            const scrollFraction =1 - (currentTop / (aboutTop*0.8));

            if(currentTop<50){
                header.style.background='rgba(0,0,0,0.6)'
                // if(window.innerWidth>750){
                //     header.style.backdropFilter="blur(14px)";
                // }
            }
            else{
                header.style.background='transparent'
        
                // if(window.innerWidth>750){
                //     header.style.backdropFilter="blur(0px)";                
                // }
            }
        });
       
    },[location])

    const navigate=(loc)=>{

        var height = document.getElementsByClassName("header")[0].offsetHeight;
        var container = document.getElementsByClassName('App')[0]
        var offsetTop;

        if(window.innerWidth<=750){
            openNavBar()
        }

        switch(loc){

            case 'about':
                offsetTop = document.getElementsByClassName("about")[0].offsetTop;
                container.scroll({ top: offsetTop, left: 0, behavior: "smooth" });
                break
            case 'basics':
                offsetTop = document.getElementsByClassName("facts-section")[0].offsetTop ;
                container.scroll({ top: offsetTop, left: 0, behavior: "smooth" });
                break
            case 'roadmap':
                offsetTop = document.getElementsByClassName("roadmap")[0].offsetTop- height ;
                container.scroll({ top: offsetTop, left: 0, behavior: "smooth" });
                break
            case 'mint':
                navigateTo('/mint')
                break
            case 'home':
                navigateTo('/')
                break
            case 'backstage':
                navigateTo('/backstage')
                break
          
        }
        
    }

    const openNavBar = () => {
        let header = document.getElementsByClassName('header')[0]

        let hamTop = document.getElementsByClassName('hamburger-top')[0]
        let hamBottom = document.getElementsByClassName('hamburger-bottom')[0]
        let mobileNav = document.getElementsByClassName('header-mobile-nav')[0]

        if (!headerMobileOpen) {
            hamTop.style.transition = 'all 250ms ease-in-out'
            hamBottom.style.transition = 'all 250ms ease-in-out'
            hamTop.style.top = '19px'
            hamTop.style.transform = 'rotate(45deg)'
            hamBottom.style.bottom = '19px'
            hamBottom.style.transform = 'rotate(-45deg)'

            mobileNav.style.display = 'block'
            setTimeout(() => {
                mobileNav.style.opacity = '1'
            }, [15])
            // header.style.backdropFilter='blur(25px)'
        }
        else {
            hamTop.style.transition = 'transform 100ms ease,bottom 300ms ease-in-out,top 300ms ease-in-out'
            hamBottom.style.transition = 'transform 100ms ease,bottom 300ms ease-in-out,top 300ms ease-in-out'
            hamTop.style.top = '14px'
            hamTop.style.transform = 'rotate(0deg)'
            hamBottom.style.bottom = '14px'
            hamBottom.style.transform = 'rotate(0deg)'

            mobileNav.style.opacity = '0'
            setTimeout(() => {
                mobileNav.style.display = 'none'
            }, [250])
            // header.style.backdropFilter='blur(3px)'

        }
        setHeaderMobileOpen(!headerMobileOpen)
    }


    console.log(location.pathname,locations)
    const[width,setWidth]=useState()
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWidth(window.innerWidth)
        })


    })
    return (
        <div className='header'>
            {/* <span style={{color:'white',position:'absolute'}}>{width}</span> */}
            <div className='header-inner'>
                <img className='header-logo' src={logo}/>
                <div className='header-links'>
                    {/* <button onClick={()=>{navigate('mint')}} className='tc-white fs-xs fw-bold'>MINT</button>
                    <button className='tc-white fs-xs fw-bold'>ABOUT</button>
                    <button className='tc-white fs-xs fw-bold'>BACKSTAGE</button>
                    <button className='tc-white fs-xs fw-bold'>THE FACTS</button> */}
                    {locations.map((location)=>{
                 
                        return(
                            <button key={location} onClick={()=>{navigate(location)}} className='tc-white fs-xs fw-bold'>
                                {location.toUpperCase()}
                            </button>
                        )
                    })}
               </div>
               <button  onClick={()=>{openNavBar()}} className='header-hamburger'>
                        <div className='header-hamburger-inner'>
                            <div className='hamburger-top'></div>
                            <div className='hamburger-bottom'></div>
                        </div>
                </button>
               <div className='header-mobile-nav'>
                    <div className='header-mobile-nav-inner '>
                        <img src={logo} className='header-mobile-logo' />
                        {/* <button className='fs-s tc-white mobile-nav-button ffam-lato fw-bold ' onClick={() => { navigateTo('mint') }}>MINT</button>
                        <button className='fs-s tc-white mobile-nav-button ffam-lato fw-bold' onClick={() => { navigateTo('roadmap') }}>ROADMAP</button>
                        <button className='fs-s tc-white mobile-nav-button ffam-lato fw-bold' onClick={() => { navigateTo('about') }}>ABOUT</button>
                        <button className='fs-s tc-white mobile-nav-button ffam-lato fw-bold' onClick={() => { navigateTo('team') }}>TEAM</button>
                        <button className='fs-s tc-white mobile-nav-button ffam-lato fw-bold' onClick={() => { navigateTo('charity') }}>CHARITY</button>
                        <button className='fs-s tc-white mobile-nav-button ffam-lato fw-bold' onClick={() => { navigateTo('sanctuary') }}>THE SANCTUARY</button>
                        <button className='fs-s tc-white mobile-nav-button ffam-lato fw-bold' onClick={() => { navigateTo('faq') }}>FAQ</button> */}

                        {locations.map((location)=>{
                    
                            return(
                                <button key={location} className='fs-s tc-white mobile-nav-button ffam-lato fw-bold' onClick={() => { navigate(location) }}>
                                    {location.toUpperCase()}
                                </button>
                            )
                        })}
                        <button onClick={() => openLink('https://dsc.gg/RockPartyNFT')} className='fs-s  tc-white mobile-nav-button ffam-lato fw-bold'>
                            DISCORD
                            <img className='header-discord-icn' src={discordIcn}></img>
                        </button>
                        <button onClick={() => openLink('https://twitter.com/RockPartyNFT')} className='fs-s  tc-white mobile-nav-button ffam-lato fw-bold'>
                            TWITTER
                            <img className='header-twitter-icn' src={twitterIcn}></img>
                        </button>
                        <button onClick={() => openLink('https://www.instagram.com/rockpartynft/')} className='fs-s  tc-white mobile-nav-button ffam-lato fw-bold'>
                            INSTAGRAM
                            <img className='header-twitter-icn' src={instaIcn}></img>
                        </button>
                        <button onClick={() => openLink('mailto:backstage@rockparty.io')} className='fs-s  tc-white mobile-nav-button ffam-lato fw-bold'>
                            EMAIL US
                            <img className='header-twitter-icn' src={emailIcn}></img>
                        </button>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
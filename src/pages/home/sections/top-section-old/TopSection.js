import React, { useRef, useState } from 'react'
import './TopSection.scss'

import mainVideo from '../../assets/videos/stage.mp4'
import mainVideoWebm from '../../assets/videos/stage.webm'


import instaIcn from '../../assets/images/social/instagram.png'
import discordIcn from '../../assets/images/social/discord.png'
import emailIcn from '../../assets/images/social/mail.png'
import twitterIcn from '../../assets/images/social/twitter.png'


function TopSection() {
  const[playing,setPlaying]=useState(false)
  const video = useRef()
  const openLink=(link)=>{
    window.open(link)
  }

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     video.current.muted=false;
  //     document.getElementsByClassName('arrow-down')[0].click()
  //   },[2500])
  // },[])
  const navigateTo=(location)=>{
    var height = document.getElementsByClassName("header")[0].offsetHeight ;

    var container = document.getElementsByClassName("App")[0];
    var offsetTop;

    offsetTop =document.getElementsByClassName("about")[0].offsetTop ;
    container.scroll({ top: offsetTop, left: 0, behavior: "smooth" });

  }

  const setAudio=()=>{
    video.current.muted=playing;
    setPlaying(!playing)
  }
  // console.log(playing)
  return (
    <div className='top-section'>
      <div className='top-section-video-wrapper'>
        <video ref={video} autoPlay playsInline muted loop> 
          <source src={mainVideoWebm}/>
          <source src={mainVideo}/>
        </video>
      </div>
      <div className='top-section-old-social-wrapper'>
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

      <p className='top-section-old-copyright ffam-lato fs-s tc-white'>
        © 2022 Rock Party Labs LLC
      </p>
    </div>
  )
}

export default TopSection
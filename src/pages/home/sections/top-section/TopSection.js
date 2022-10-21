import React, {useEffect, useRef, useState} from 'react'
import './TopSection.scss'
import mainVideo from '../../../../assets/videos/STAGE-CROWD.mp4'
import mainVideoWebm from '../../../../assets/videos/STAGE-CROWD.webm'

// import mainVideoMobile from '../../../../assets/videos/stage-mobile.mp4'


import playingImg from '../../../../assets/images/playing.png'
import mutedImg from '../../../../assets/images/muted.png'
import rockMusic from '../../../../assets/music/rock.mp3'

function TopSection() {
  const[playing,setPlaying]=useState(false)
  const[music,setMusic]=useState({})
  // const[videoLink,setVideoLink]=useState(mainVideo)


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

    offsetTop =document.getElementById("story").offsetTop - height;
    container.scroll({ top: offsetTop, left: 0, behavior: "smooth" });

  }

  const setAudio=()=>{
  
    if(playing){
      music.pause()
    }
    else{
      music.play()
    }
    setPlaying(!playing)
  
  }
  

  useEffect(()=>{

    let music=new Audio;
    music.src=rockMusic
    music.loop=true
    setMusic(music)

    // let topSectionVideo=document.getElementsByClassName('top-section-video')[0]
    // let app=document.getElementsByClassName('App')[0]
    // let size=1
    // let pos=0
    // let height=window.innerHeight
    // const topSectionTop=document.getElementsByClassName('top-section')[0].getBoundingClientRect().bottom

    // app.addEventListener('scroll',()=>{
    //   let distance=document.getElementsByClassName('top-section')[0].getBoundingClientRect().bottom;
    //   console.log(distance)
    //   // console.log(height)
   
    //   // console.log(document.scrollingElement.scrollTop)
    //   if(distance<height){
    //     size-=0.01;
    //     pos+=6.5;
    //   }

    //   else {
    //     size+=0.004003;
    //     pos-=6.5;
    //   }
    //   topSectionVideo.style.transform=`matrix(${size}, 0, 0, ${size}, 0, ${pos})`

    // })  


    // let topSectionVideo=document.getElementsByClassName('top-section-video')[0]
    // let app=document.getElementsByClassName('App')[0]
    // let size=1
    // let pos=0
    // let height=window.innerHeight
    // const topSectionTop=document.getElementsByClassName('top-section')[0].getBoundingClientRect().bottom

    // app.addEventListener('scroll', () => {
    //   const currentTop=document.getElementsByClassName('top-section')[0].getBoundingClientRect().bottom
    //   console.log(currentTop,topSectionTop)
    //   if(currentTop<=topSectionTop){
    //     const scrollFraction= (currentTop / (topSectionTop)) ;
    //     console.log(scrollFraction)
    //     topSectionVideo.style.transform=`matrix(${scrollFraction},0,0,${scrollFraction},0,1)`   
    //   }
    // });


    // console.log('scroll')

    // if(window.innerWidth<=500){
    //   setVideoLink(mainVideoMobile)
    // }
    // else{
    //   setVideoLink(mainVideo)
    // }
    // window.addEventListener('resize',()=>{
    //   if(window.innerWidth<=500){
    //     setVideoLink(mainVideoMobile)
    //   }
    //   else{
    //     setVideoLink(mainVideo)
    //   }
    // })
  },[])
  // console.log(videoLink)
  return (
    <div className='top-section'>
      <div className='top-section-video-wrapper'>
        <video  className='top-section-video' ref={video} autoPlay playsInline loop muted > 
          {/* <source src="https://drive.google.com/uc?export=download&id=1UTbBmVNLd8w4Fxwgwa_nG5oKvjExmVpf"/> */}
          <source src={mainVideoWebm}/>
          <source src={mainVideo}/>
        </video>
      </div>
      <p onClick={()=>{openLink('https://dsc.gg/RockPartyNFT')}} className='ffam-lato fs-ms top-section-welcome-text'>Fair and Equal Distribution Whitelist Now Open To Public-Limited Availability</p>

      <div className='top-section-inner'>
      </div>
      <div onClick={()=>{setAudio()}} className='top-section-audio'>
        {
          playing===true?
          <img id='top-section-playing' src={playingImg}/>
          :playing===false?
          <img src={mutedImg}/>
          :null
        }
       
      </div>
  
    </div>
  )
}

export default TopSection
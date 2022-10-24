import React, { useEffect, useRef ,useState} from 'react'
import './index.scss'

import nftVideo from '../../../../assets/videos/nft.mp4'
import nftVideoWebm from '../../../../assets/videos/nft.webm'

// import ProjectCarousel from '../../../../components/carousel'
import playingImg from '../../../../assets/images/playing.png'
import mutedImg from '../../../../assets/images/muted.png'

function index() {
    const video = useRef()
    const[playing,setPlaying]=useState(false)
    const setAudio=()=>{
    
        if(playing){
            video.current.muted=true
        }
        else{
            video.current.muted=false
        }
        setPlaying(!playing)
    
    }
  
    return (
        <div className='roadmap'>
            
            <div className='roadmap-title ffam-lato fs-l tc-white fw-black'>ROADMAP</div>

            
            <div className='roadmap-inner'>
                <div className='roadmap-left'>
                    <video ref={video} loop muted autoPlay playsInline>
                        {/* <source src="https://drive.google.com/uc?export=download&id=1z4RtgfwbEv8HtpywJB6WwNm_XGBkHI7y"/> */}
                        <source src={nftVideoWebm}/>
                        <source src={nftVideo} />
                    </video>
                    {/* <ProjectCarousel/> */}

                    <div onClick={()=>{setAudio()}} className='roadmap-audio'>
                        {
                        playing===true?
                        <img id='top-section-playing' src={playingImg}/>
                        :playing===false?
                        <img src={mutedImg}/>
                        :null
                        }
                    
                    </div>

                </div>
                {/* <iframe frameborder="0"  className='roadmap-left' src="https://drive.google.com/file/d/1z4RtgfwbEv8HtpywJB6WwNm_XGBkHI7y/preview?controls=0" allow="autoplay"></iframe> */}

                <div className='roadmap-right'>
                    <div className='project-progress'>
                    </div>
                    <div id='mint-road1'  className='mint-roadmap-section'>
                        <div className='mint-roadmap-circle  fs-roadmap ffam-mont fw-bold'>1</div>
                        <span className='font-m ffam-montserrat fw-bold tc-white'>October 1, 2022</span>
                   
                        <p className='fs-roadmap ffam-helv-thin tc-white'>
                            <div className='indented-section'><div></div><div>Official Project Announcement </div></div>
                        </p>
                    </div>
                    <div id='mint-road2'  className='mint-roadmap-section'>
                        <div className='mint-roadmap-circle  fs-roadmap ffam-mont fw-bold'>2</div>
                        <span className='font-m ffam-montserrat fw-bold tc-white'>October 17, 2022</span>
                      
                        <p className='fs-roadmap ffam-helv-thin tc-white'>
                            <div className='indented-section'><div></div><div>Web Site Partial Unveil - Press and Public Information Released</div></div>
                            <div className='indented-section'><div></div><div>Fair and Equal Distribution Whitelist Open To Public Via Discord (Limited Supply)</div></div>
                        </p>
                    </div>
                
                    <div id='mint-road3' className='mint-roadmap-section'>
                        <div className='mint-roadmap-circle  fs-roadmap ffam-mont fw-bold'>3</div>
                        <span className='font-m ffam-montserrat fw-bold tc-white'>October 21, 2022</span>
                   
                        <p className='fs-roadmap ffam-helv-thin tc-white'>
                            <div className='indented-section'><div></div><div>Web Site Full Unveil</div></div>
                            <div className='indented-section'><div></div><div>Rock Party NFT at Guns And Roses (Mexico City, Mexico)</div></div>
                            <div className='indented-section'><div></div><div>Sneak Peak</div></div>
                        </p>
                    </div>
                    <div id='mint-road4' className='mint-roadmap-section'>
                        <div className='mint-roadmap-circle  fs-roadmap ffam-mont fw-bold'>4</div>
                        <span className='font-m ffam-montserrat fw-bold tc-white'>October 31, 2022</span>
                      
                        <p className='fs-roadmap ffam-helv-thin tc-white'>
                            <div className='indented-section'><div></div><div>Pre-Sale 15:00 UTC</div></div>
                        </p>
                    </div>
                    <div id='mint-road4' className='mint-roadmap-section'>
                        <div className='mint-roadmap-circle  fs-roadmap ffam-mont fw-bold'>5</div>
                        <span className='font-m ffam-montserrat fw-bold tc-white'>November 2, 2022</span>
                       
                        <p className='fs-roadmap ffam-helv-thin tc-white'>
                            <div className='indented-section'><div></div><div>Public Sale 15:00 UTC</div></div>
                        </p>
                    </div>
                    <div id='mint-road4' className='mint-roadmap-section'>
                        <div className='mint-roadmap-circle  fs-roadmap ffam-mont fw-bold'>6</div>
                        <span className='font-m ffam-montserrat fw-bold tc-white'>November 3, 2022</span>
                       
                        <p className='fs-roadmap ffam-helv-thin tc-white'>
                            <div className='indented-section'><div></div><div>Rock Party NFT Reveal 15:00 UTC</div></div>
                        </p>
                    </div>
                    <div id='mint-road4' className='mint-roadmap-section'>
                        <div className='mint-roadmap-circle  fs-roadmap ffam-mont fw-bold'>7</div>
                        <span className='font-m ffam-montserrat fw-bold tc-white'>November 11, 2022</span>
                       
                        <p className='fs-roadmap ffam-helv-thin tc-white'>
                            <div className='indented-section'><div></div><div>Private Discord For Rock Party Fans (Members Only)</div></div>
                        </p>
                    </div>
                    <div id='mint-road4' className='mint-roadmap-section'>
                        <div className='mint-roadmap-circle  fs-roadmap ffam-mont fw-bold'>8</div>
                        <span className='font-m ffam-montserrat fw-bold tc-white'>November 24, 2022</span>
                       
                        <p className='fs-roadmap ffam-helv-thin tc-white'>
                            <div className='indented-section'><div></div><div>Exclusive Rock Party Fan SWAG Launch</div></div>
                        </p>
                    </div>
                    <div id='mint-road4' className='mint-roadmap-section'>
                        <div className='mint-roadmap-circle  fs-roadmap ffam-mont fw-bold'>9</div>
                        <span className='font-m ffam-montserrat fw-bold tc-white'>March 3, 2023</span>
                       
                        <p className='fs-roadmap ffam-helv-thin tc-white'>
                            <div className='indented-section'><div></div><div> Eighties Collaboration Release</div></div>
                        </p>
                    </div>
                    <div id='mint-road4' className='mint-roadmap-section'>
                        <div className='mint-roadmap-circle  fs-roadmap ffam-mont fw-bold'>10</div>
                        <span className='font-m ffam-montserrat fw-bold tc-white'>June 1, 2023 </span>
                       
                        <p className='fs-roadmap ffam-helv-thin tc-white'>
                            <div className='indented-section'><div></div><div>  Summer Concert Season Passes Solely For Rock Party Fans Available
                            </div></div>
                        </p>
                    </div>
                    <div id='mint-road4' className='mint-roadmap-section'>
                        <div className='mint-roadmap-circle  fs-roadmap ffam-mont fw-bold'>11</div>
                        <span className='font-m ffam-montserrat fw-bold tc-white'>October 21, 2023</span>
                       
                        <p className='fs-roadmap ffam-helv-thin tc-white'>
                            <div className='indented-section'><div></div><div>  Rock Party 2023 Fan Experience
                            </div></div>
                        </p>
                    </div>
                    <div id='mint-road4' className='mint-roadmap-section'>
                        <div className='mint-roadmap-circle  fs-roadmap ffam-mont fw-bold'>12</div>
                        <span className='font-m ffam-montserrat fw-bold tc-white'>November 23, 2023</span>
                       
                        <p className='fs-roadmap ffam-helv-thin tc-white'>
                            <div className='indented-section'><div></div><div> Exclusive Rock Party Fan SWAG Collection Update</div></div>
                            <div className='indented-section'><div></div><div> Rock Party Front Row Release</div></div>

                        </p>
                    </div>
                    <div id='mint-road4' className='mint-roadmap-section'>
                        <div className='mint-roadmap-circle  fs-roadmap ffam-mont fw-bold'>13</div>
                        <span className='font-m ffam-montserrat fw-bold tc-white'>…2024 and beyond</span>
                       
                        <p className='fs-roadmap ffam-helv-thin tc-white'>
                            <div className='indented-section'><div></div><div>Rock Party will continue to be the Superior Rock ‘n’ Roll Web3 Experience</div></div>
                        </p>
                    </div>
                </div>
            </div>
           
        </div>
        
    )
}

export default index

import React, { useEffect } from 'react'
import './index.scss'

import nftVideo from '../../../../assets/videos/nft2.mp4'
import nftVideoWebm from '../../../../assets/videos/nft2.mp4'

function index() {
    let observer= new IntersectionObserver(function(entries) {
        let progress=document.getElementsByClassName('project-progress-inner')[0]
        for(var i=0;i<entries.length;i++){
          if(entries[i].intersectionRect.top>0&&entries[i].isIntersecting===true){
            switch(Math.round(entries[i].intersectionRatio*10)){
                case 0:
                    entries[i].target.style.top='-70px';
                    entries[i].target.style.opacity=`1`;
                    break;
                case 1:
                    entries[i].target.style.top='-70px';
                    entries[i].target.style.opacity=`1`;

                    break;
                case 2:
                    entries[i].target.style.top='-70px';
                    entries[i].target.style.opacity=`1`;

                    break;
                case 3:
                    entries[i].target.style.top='-70px';
                    entries[i].target.style.opacity=`1`;

                    break;
                case 4:
                    entries[i].target.style.top='-70px';
                    entries[i].target.style.opacity=`1`;

                    break;
                case 5:
                    entries[i].target.style.top='-70px';
                    entries[i].target.style.opacity=`1`;

                    break;
                case 6:
                    entries[i].target.style.top='-70px';
                    entries[i].target.style.opacity=`1`;

                    break;
                case 7:
                    entries[i].target.style.top='-70px';
                    entries[i].target.style.opacity=`1`;

                    break;
                case 8:
                    entries[i].target.style.top='-70px';
                    entries[i].target.style.opacity=`1`;

                    break;
                case 9:
                    entries[i].target.style.top='-70px';
                    entries[i].target.style.opacity=`1`;

                    break;
                case 10:
                    entries[i].target.style.top='-70px';
                    entries[i].target.style.opacity=`1`;

                    break;
                default:
                    break;
            }
          }
        }
    },{ threshold: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1] });

    useEffect(()=>{
        // observer.observe(document.getElementById('mint-road1'));
        // observer.observe(document.getElementById('mint-road2'));
        // observer.observe(document.getElementById('mint-road3'));
        // observer.observe(document.getElementById('mint-road4'));
        // // observer.observe(document.getElementById('mint-road5'));

    },[])
    
    return (
        <div className='roadmap'>
            
            <div className='roadmap-title ffam-lato fs-l tc-white fw-black'>ROADMAP</div>

            
            <div className='roadmap-inner'>
                <div className='roadmap-left'>
                    <video loop muted autoPlay playsInline>
                        <source src={nftVideoWebm} />
                        <source src={nftVideo} />
                    </video>
                </div>
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
                
                    <div id='mint-road4' className='mint-roadmap-section'>
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

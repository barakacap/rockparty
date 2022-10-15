import React, { useEffect } from 'react'
import './index.scss'

import Video from '../../../../assets/videos/roadmap.mp4'

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
        <div className='mint-roadmap'>
            
            <div className='about-title ffam-lato fs-l tc-white fw-black'>ROADMAP</div>

            
            <div className='mint-roadmap-inner'>
                
                <div className='project-progress'>
                </div>
                <div id='mint-road1' style={{top:'-70px'}} className='mint-roadmap-section'>
                    <div className='mint-roadmap-circle  fs-s ffam-helv-bold'>1</div>
                    <span className='font-m weight-bold ffam-helv-bold tc-white'>October 1, 2022</span>
                    <br/>
                    <br/>
                    <p className='fs-xs ffam-helv-thin tc-white'>
                        <div className='indented-section'><div>–</div><div>Official Project Announcement </div></div>
                    </p>
                </div>
                <div id='mint-road2'  className='mint-roadmap-section'>
                    <div className='mint-roadmap-circle  fs-s ffam-helv-bold'>2</div>
                    <span className='font-m weight-bold ffam-helv-bold tc-white'>October 17, 2022</span>
                    <br/>
                    <br/>
                    <p className='fs-xs ffam-helv-thin tc-white'>
                        <div className='indented-section'><div>–</div><div>Web Site Partial Unveil - Press and Public Information Released</div></div>
                        <div className='indented-section'><div>–</div><div>Fair and Equal Distribution Whitelist Open To Public Via Discord (Limited Supply)</div></div>
                    </p>
                </div>
              
                <div id='mint-road4' className='mint-roadmap-section'>
                    <div className='mint-roadmap-circle  fs-s ffam-helv-bold'>3</div>
                    <span className='font-m weight-bold ffam-helv-bold tc-white'>October 21, 2022</span>
                    <br/>
                    <br/>
                    <p className='fs-xs ffam-helv-thin tc-white'>
                        <div className='indented-section'><div>–</div><div>Web Site Full Unveil</div></div>
                        <div className='indented-section'><div>–</div><div>Rock Party NFT at Guns And Roses (Mexico City, Mexico)</div></div>
                        <div className='indented-section'><div>–</div><div>Sneak Peak</div></div>
                   </p>
                </div>
                <div id='mint-road4' className='mint-roadmap-section'>
                    <div className='mint-roadmap-circle  fs-s ffam-helv-bold'>4</div>
                    <span className='font-m weight-bold ffam-helv-bold tc-white'>October 31, 2022</span>
                    <br/>
                    <br/>
                    <p className='fs-xs ffam-helv-thin tc-white'>
                        <div className='indented-section'><div>–</div><div>Pre-Sale 15:00 UTC</div></div>
                    </p>
                </div>
                <div id='mint-road4' className='mint-roadmap-section'>
                    <div className='mint-roadmap-circle  fs-s ffam-helv-bold'>4</div>
                    <span className='font-m weight-bold ffam-helv-bold tc-white'>October 31, 2022</span>
                    <br/>
                    <br/>
                    <p className='fs-xs ffam-helv-thin tc-white'>
                        <div className='indented-section'><div>–</div><div>Pre-Sale 15:00 UTC</div></div>
                    </p>
                </div>
                {/* <div id='mint-road5' className='mint-roadmap-section'>
                    <div className='mint-roadmap-circle  fs-s ffam-helv-bold'>5</div>
                    <span className='font-m weight-bold ffam-helv-bold tc-white'>THE LORE</span>
                    <br/>
                    <br/>
                    <p className='fs-xs ffam-helv-thin tc-white'>
                        <div className='indented-section'><div>–</div><div>On the 22nd of November, 1718; after shielding several comrades from swords and musket balls at the bloody battle of Hape island, Teddy Beard breathed his last breath on earth before ascending into the realms of legends as the greatest Teddy that ever lived.</div></div>
                        <div className='indented-section'><div>–</div><div>Shortly before arriving in North Carolina, sensing the end is near, Teddy Beard hid the bulk of his new generation on a little-known island off the Bahamas on the Atlantic Sea.</div></div>
                        <div className='indented-section'><div>–</div><div>To ensure his Club is not lost forever in event of his death, he drew up the location of the new generation on a scroll. He then put the scroll in a bottle and threw it into the North Atlantic Sea.</div></div>
                        <div className='indented-section'><div>–</div><div>Hundreds of years would go by before Teddy Beard's time capsule would be found again.</div></div>
                    </p>
                </div> */}
            
            </div>
           
        </div>
        
    )
}

export default index

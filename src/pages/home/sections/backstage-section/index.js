

import React,{useEffect} from 'react'
import './index.scss'

import bgImg from '../../../../assets/images/stage-floor.webp'

function index() {

    useEffect(() => {

        const backstageTop=document.getElementsByClassName('backstage-section')[0].getBoundingClientRect().top
        const bgWrapper=document.getElementsByClassName('backstage-section-bg-wrapper')[0]
        const app=document.getElementsByClassName('App')[0]

        app.addEventListener('scroll', () => {
            if(window.innerWidth<=1050)return;
            let currentTop=document.getElementsByClassName('backstage-section')[0]?.getBoundingClientRect().top
            const scrollFraction =1 - (currentTop / (backstageTop*0.8));

            if(currentTop<backstageTop*0.8){
               
                // const frameIndex = Math.min(
                //     frameCount - 1,
                //     Math.ceil(scrollFraction )
                // );
                // console.log(scrollFraction)

                bgWrapper.style.transform=`scale3d(${scrollFraction},${scrollFraction},1)`   
            }
        });
        
    })


    return (
        <div className='backstage-section'>
            <div className='backstage-section-bg-wrapper'>
                <img src={bgImg}/>
            </div>
            <div className='backstage-section-inner'>
                <div>
                    <div className='ffam-lato fs-l tc-white fw-black'>BACKSTAGE</div>

                    <p className='ffam-mont fs-s tc-white'>
                        Your pass grants you access to a special backstage area. There you will find unique Rock Party Fans (members only) SWAG-exclusive access to upcoming collaborations-and of course entrance to Official Rock Party Events including backstage stage passes to some of the biggest concerts in 2023 and beyond.                        
                        <br/>
                        <br/>
                        * To access The Backstage Area-Fans will need to be signed into their Metamask Wallet.                    
                    </p>
                    {/* <button className='mint-page-mint-btn '>
                        <span className='ffam-lato fs-ms tc-white fw-black'>
                            Go to Backstage!
                        </span>
                    </button> */}
                </div>
            

              
                <div className='backstage-section-text'>
                    <div className='ffam-lato fs-l tc-white fw-black'>WELCOME TO THE PARTY</div>

                    <p className='ffam-mont fs-s tc-white'>
                        When you buy a Rock Party Commemorative Backstage Pass, you become an Official Rock Party Fan. Besides joining an exclusive circle of Rock 'n' Roll enthusiast with immediate backstage access you will be in the front row of brining Rock ‘n’ Roll to Web3.
                        <br/>
                        <br/>
                        
                        <span className='ffam-lato fs-l tc-white fw-black'>SEE YOU BACKSTAGE!</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default index
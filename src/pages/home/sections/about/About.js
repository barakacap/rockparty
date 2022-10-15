import React from 'react'
import './About.scss'

import Guitar from '../../../../components/white-guitar'

function About() {
    return (
        <div className='about'>
            <div className='about-inner'>
                {/* <div className='about-guitar'> */}
                    
                    <Guitar/>
                {/* </div> */}
                <div className='about-text'>
                    <div className='about-title ffam-lato fs-l tc-white fw-black'>ROCK 'n' ROLL</div>
                    <p className='ffam-mont fs-s tc-white'>
                        The Rock Party Classic Collection is an NFT 3D collection of 2,542 Commemorative Backstage Passes celebrating the most iconic rock bands performing some of their most memorable concerts from the classic era of music’s most infamous genre-1960 thru 1979.                     
                        <br/>
                        <br/>
                        John, Paul, George, and Ringo-Mick and the Boys-as well as Stevie and her Boys-The Boss-Carlos-Jimmy playing The Star Spangle Banner-Roger not getting fooled again-get some Led for your Head-and of course if your ready to Rock 'n' Roll All Night and Party Every Freaking Day…this is the perfect NFT collection for you.                    
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
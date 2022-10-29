

import React,{useEffect} from 'react'
import './index.scss'


import Amplifier from '../../../../components/amplifier'


function index() {

 
    const openLink=(link)=>{
        window.open(link)
      }

    return (
        <div className='facts-section'>
              <p onClick={()=>{openLink('https://dsc.gg/RockPartyNFT')}} className='ffam-lato fs-ms facts-whitelist-text'>Fair and Equal Distribution Whitelist Now Open To Public-Limited Availability</p>

            <div className='facts-inner'>
                <div className='facts-text'>
                    <div>
                        <div className='facts-title ffam-lato fs-l tc-white fw-black'>BASICS</div>

                        <p className='ffam-mont fs-s tc-white'>

                            Each Rock Party Commemorative Backstage Pass is unique for a specific concert-there is ONLY ONE backstage pass minted per event-2542 specific concerts translates into 2542 one of a kind traits-furthermore each Rock Party 3D Commemorative Backstage Pass is programmatically generated with a potential additional 22 more traits per pass.                            
                            <br/>
                            <br/>
                            {/* *The passes are stored as ERC721a tokens on the Ethereum blockchain and hosted on IPFS. (See Record and Proof.)
                            <br/>
                            <br/> */}
                            
                        </p>
                    </div>
                
                    
                
                    <div className='facts-section-text'>
                        <div className='facts-title ffam-lato fs-l tc-white fw-black'>FAIR AND EQUAL DISTRIBUTION</div>

                        <p className='ffam-mont fs-s tc-white'>
                            No Price Tiers. No Bonding Curves. Every Rock Party Backstage Pass is the same price for everyone .15 ETH. 22 passes are being withheld from the launch. These will be utilized for promotional purposes as well as creators and launch supporters.
                        </p>
                    </div>


                    
                </div>
                <Amplifier/>
            </div>
        </div>
    )
}

export default index
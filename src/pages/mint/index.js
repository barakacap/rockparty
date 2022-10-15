import React, { useState } from 'react'
import './index.scss'
import guitarImg from '../../assets/images/guitars.webp'

import nftWebm from '../../assets/videos/nft.webm'
import nftMain from '../../assets/videos/nft.mp4'
import Header from '../../components/header/Header'

function index() {

    const [mintAmount,setMintAmount]=useState(1)
    const [limit,setLimit]=useState(3)

    const decrementMintAmount=()=>{
        if(mintAmount===1)return
        setMintAmount(mintAmount-1)
    }
    const incrementMintAmount=()=>{
        if(mintAmount===limit)return
        setMintAmount(mintAmount+1)
    }

    return (
        <div className='mint-page'>
            <Header/>
            <div className='mint-page-bg'>
                <img src={guitarImg}/>
            </div>
            <div className='mint-page-inner'>
                <div className='mint-page-nft-video'>
                    <video playsInline loop muted autoPlay>
                        <source src={nftWebm}></source>
                        <source src={nftMain}></source>
                    </video>
                </div>
                <div className='mint-page-mint-wrapper'>
                    <div className='mint-page-mint-amount-wrapper '>
                        <button onClick={()=>{decrementMintAmount()}}  className='mint-page-mint-amount-btn ffam-lato fs-ms tc-white fw-bold'>-</button>
                        <span className='ffam-lato fs-m tc-white fw-bold'>{mintAmount}</span>
                        <button onClick={()=>{incrementMintAmount()}} className='mint-page-mint-amount-btn  ffam-lato fs-ms tc-white fw-bold'>+</button>
                    </div>
                    <button className='mint-page-mint-btn '>
                        <span className='ffam-lato fs-ms tc-white fw-black'>
                            Connect Wallet
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default index
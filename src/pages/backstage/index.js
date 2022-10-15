import React, { useState } from 'react'
import WalletModal from '../../components/wallet-modal/WalletModal'
import { useDispatch, useSelector } from "react-redux"; 
import mainVideo from '../../assets/videos/backstage.mp4'
import './index.scss'
import Header from '../../components/header/Header'

function index() {
    const [modalOpen, setModalOpen] = useState(true);

    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    
    return (
        <div className='backstage-page'>
            {/* <Header/> */}
            <WalletModal open={modalOpen} setOpen={setModalOpen}/>
            <div className='backstage-page-inner'>
                {blockchain.account!==null&&
                    <div className='backstage-video-wrapper'>
                        <video  className='top-section-video' autoPlay playsInline loop muted> 
                            <source src={mainVideo}/>
                        </video> 
                    </div>
                }
            </div>
        </div>
    )
}

export default index
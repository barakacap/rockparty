
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from "react-redux";
import { walletConnect,connectMetamask,connectCoinbase } from "../../redux/blockchain/blockchainActions";


import './WalletModal.scss'

import metamaskIcn from '../../assets/images/wallet/metamask.webp'
import coinbaseIcn from '../../assets/images/wallet/coinbase.webp'
import walletConnectIcn from '../../assets/images/wallet/walletconnect.webp'



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'transparent',
  borderRadius:25,
  // boxShadow: 24,
  outline:'none'
};

export default function WalletModal({open,setOpen}) {

  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);

  const connectMetamaskWallet=()=>{
    dispatch(connectMetamask());
    handleClose();
  }
  const connectCoinbaseWallet=()=>{
    dispatch(connectCoinbase());
    handleClose();
  }

  const connectWalletConnect=()=>{
    dispatch(walletConnect());
    handleClose();
  };
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style} >
            <div className='wallet-modal'>
                <button onClick={()=>{connectMetamaskWallet()}} className='modal-connect-button tc-white fs-xs fw-black ffam-lato'>
                    <img id="wallet-metamask-icn" src={metamaskIcn}/>
                    Metamask
                </button>
                <button onClick={()=>{connectCoinbaseWallet()}} className='modal-connect-button tc-white fs-xs fw-black ffam-lato'>
                    <img src={coinbaseIcn}/>
                    Coinbase Wallet
                </button>
                <button onClick={()=>{connectWalletConnect()}} id='wallet-button-3' className='modal-connect-button tc-white fs-xs fw-black ffam-lato'>
                    <img src={walletConnectIcn}/>
                  
                    Wallet Connect
                </button>
            </div>
        </Box>
      </Modal>
    </div>
  );
}
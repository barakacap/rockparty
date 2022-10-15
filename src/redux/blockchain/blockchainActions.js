import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
// log
import { fetchData } from "../data/dataActions";

import { toast } from "react-toastify";

import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
import projectUrl from '../../assets/images/logo.png'

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const connectMetamask = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    
    const abi = await abiResponse.json();


    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const CONFIG = await configResponse.json();

    const metamaskWallet = window?.ethereum?.providers!==undefined?window?.ethereum?.providers?.find((x) => x?.isMetaMask):window.ethereum
   
 
    const { ethereum } = window;
    const metamaskIsInstalled = metamaskWallet;
    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(metamaskWallet);
      let web3 = new Web3(metamaskWallet);
      try {
       
        const address=CONFIG.CONTRACT_ADDRESS


        const accounts = await metamaskWallet.request({
          method: "eth_requestAccounts",
        });
        const networkId = await metamaskWallet.request({
          method: "net_version",
        });
        if (networkId == CONFIG.NETWORK.ID) {
          
          const SmartContractObj = new Web3EthContract(
            abi,
            address
          );
          
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );

          toast.success("Connected!");

          // Add listeners start
          ethereum.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          toast.error(`Change network to ${CONFIG.NETWORK.NAME}.`);
        }
      } catch (err) {
        console.log(err)
        toast.error("Something went wrong.");
      }
    } else {
      // toast.error("Install Metamask.");
      window.location.href='https://metamask.app.link/dapp/test-c3f85.web.app/'
      
    }
  };
};

export const connectCoinbase =()=>{

  const DEFAULT_ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/ea9a811f60b741ee829405320dea2ba8'
  const DEFAULT_CHAIN_ID = 1

  return async (dispatch) => {
    const coinbaseWallet = new CoinbaseWalletSDK({
      appName: 'Rock Party',
      appLogoUrl: projectUrl,
      darkMode: true
    })
    const ethereum = coinbaseWallet
    .makeWeb3Provider(DEFAULT_ETH_JSONRPC_URL, DEFAULT_CHAIN_ID)


    console.log(ethereum)

    dispatch(connectRequest());
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

  
    const Abi = await abiResponse.json();
 
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const CONFIG = await configResponse.json();
    // const { ethereum } = window;


   
      Web3EthContract.setProvider(ethereum);
      let web3 = new Web3(ethereum);

      const address=CONFIG.CONTRACT_ADDRESS
      try {
   
       
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' }).then(response => {
          const accounts  = response ;
         
          return accounts
        })
        // //  Get Chain Id
        const networkId = await web3.eth.getChainId();
        // const accounts = await web3.eth.getAccounts()
        // const networkId = await web3.eth.net.getId()
        console.log(accounts[0],networkId,CONFIG.NETWORK.ID)

        //  Get Network Id
      
        // console.log(web3.eth,CONFIG.NETWORK.ID)
        if (networkId == CONFIG.NETWORK.ID) {

          const SmartContractObj = new Web3EthContract(
            Abi,
            address
          );

          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );

          toast.success("Connected!");

          // Add listeners start
          // ethereum.on("accountsChanged", (accounts) => {
          //   dispatch(updateAccount(accounts[0]));
          // });
          // ethereum.on("chainChanged", () => {
          //   window.location.reload();
          // });
          // Add listeners end
        } else {
          toast.error(`Change network to ${CONFIG.NETWORK.NAME}.`);
        }
      } catch (err) {
        console.log(err)
        toast.error("Something went wrong.");
      }
  
  }

    
}


export const walletConnect =()=>{
  return async (dispatch) => {
   
    //  Create WalletConnect Provider
    const provider = new WalletConnectProvider({
      infuraId: "bb6fd729a4894ed6aecc8b83ac02b816",
      rpc: {
        1: "https://mainnet.infura.io/v3/ea9a811f60b741ee829405320dea2ba8",
        4: "https://rinkeby.infura.io/v3/ea9a811f60b741ee829405320dea2ba8",
        100: "https://dai.poa.network",
      },
    });

    //  Enable session (triggers QR Code modal)
    await provider.enable();

    dispatch(connectRequest());
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const Abi = await abiResponse.json();
 
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const CONFIG = await configResponse.json();
    // const { ethereum } = window;


   
    Web3EthContract.setProvider(provider);
    let web3 = new Web3(provider);
    
    const address=CONFIG.CONTRACT_ADDRESS
    
    try {
  
      
      const accounts = await web3.eth.getAccounts();

      //  Get Chain Id
      const networkId = await web3.eth.getChainId();
      
      //  Get Network Id
      // const networkId = await web3.eth.net.getId();


      if (networkId == CONFIG.NETWORK.ID) {

        const SmartContractObj= new Web3EthContract(
          Abi,
          address
        );
          
       
        dispatch(
          connectSuccess({
            account: accounts[0],
            smartContract: SmartContractObj,
            web3: web3,
          })
        );

        toast.success("Connected!");

        // Add listeners start
        provider.on("accountsChanged", (accounts) => {
          dispatch(updateAccount(accounts[0]));
        });
        provider.on("chainChanged", () => {
          window.location.reload();
        });
        // Add listeners end
      } else {
        toast.error(`Change network to ${CONFIG.NETWORK.NAME}.`);
      }
    } catch (err) {
      console.log(err)
      toast.error("Something went wrong.");
    }
  
  }

    
}

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
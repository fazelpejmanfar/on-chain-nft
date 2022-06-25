/* eslint-disable no-unused-vars */
import Web3 from 'web3';
import Web3EthContract from "web3-eth-contract";
import { useState, useEffect, useRef } from 'react';
import { chdir } from 'process';
import styled from 'styled-components';
import 'rsuite/styles/index.less';
import "rsuite/dist/rsuite.min.css";
import Header from './Components/Header';
import { Input, InputGroup, MaskedInput } from 'rsuite';
import { HexColorPicker, HexColorInput } from "react-colorful";

function App() {

  const Screen = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #101820FF;
  `;

  const HEADING = styled.p`
  font-size: 3rem;
  text-align: center;
  color: #FEE715FF;
  `;

  const TEXT = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #FEE715FF;
  `;

  const InpDIV = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 30px;
  `;

  const InpDIV2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 30px;
  `;

  const InpDIVW = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px;
  align-content: center;
  `;

  const SVGDIV = styled.div`
  width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
  `;

  const COlordiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  gap: 20px;
  `;

  const CTNDIV = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  `;

  const CTNBTN = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  margin-top: 5px;
  :hover {
      background: #FEE715FF ;
      color: #101820FF;
  }
  `;



  const abi =  [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ApprovalCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalToCurrentOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApproveToCaller",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BalanceQueryForZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintZeroQuantity",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OwnerQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferFromIncorrectOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToNonERC721ReceiverImplementer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "URIQueryForNonexistentToken",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "Maxsupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "buildImage",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "buildMetadata",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "cost",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "text",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "bgcolor",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "textcolor",
          "type": "string"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_state",
          "type": "bool"
        }
      ],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_mod",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_seed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_salt",
          "type": "uint256"
        }
      ],
      "name": "randomNum",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_newCost",
          "type": "uint256"
        }
      ],
      "name": "setCost",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_newsupply",
          "type": "uint256"
        }
      ],
      "name": "setMaxsupply",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "words",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "bgHue",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "textHue",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "value",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  let contract = '0x6ea185662A035c125b9eA12Fb003fff945D62c8D';
  let chainid = "4";
  let CHID = Web3.utils.toHex(chainid.toString());
  let Gas = '285000';
  let PRice = '0.05';
  let TotalPrice = Web3.utils.toWei(PRice.toString(), 'ether');
  const [NFTNAME, setNFTNAME] = useState("fazel nft");
  const [NAME, setNAME] = useState("fazel");
  const [BGCOLOR, setBGCOLOR] = useState("#FEE715");
  const [TXTCOLOR, setTXTCOLOR] = useState("#38340c");
  const AmountInputRef = useRef();
  const TXTInputRef = useRef();
  const NAMEInputRef = useRef();
  const [account, setaccount] = useState(null);
  const [msg, setmsg] = useState(null);
  const [CTN, setCTN] = useState(null);
  const [web3, setweb3] = useState(null);

  const handleChangeNFTNAME = e => {
    setNFTNAME(e)
  };

  const handleChangeNAME = e => {
    setNAME(e)
  };

  const connect = async() => {
      const { ethereum } = window;
      const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
      if (metamaskIsInstalled) {
        Web3EthContract.setProvider(ethereum);
        let web3 = new Web3(ethereum);
        setweb3(web3);
        try {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          setaccount(accounts[0]);
          const networkId = await ethereum.request({
            method: "net_version",
          });
          if (networkId === chainid) {
            const SmartContractObj = new Web3EthContract(
              abi,
              contract
            );
            setCTN(SmartContractObj);

            // Add listeners start
            ethereum.on("accountsChanged", (accounts) => {
              setaccount(accounts[0]);
            });
            ethereum.on("chainChanged", () => {
              window.location.reload();
            });
  
            // Add listeners end
          } else {
            try {
              await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: CHID }],
              });
            } catch (switchError) {
              // This error code indicates that the chain has not been added to MetaMask.
              if (switchError.code === 4902) {
                try {
                  await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                      {
                        chainId: CHID,
                        chainName: 'Ethereum',
                        rpcUrls: ['https://eth-mainnet.public.blastapi.io']
                      },
                    ],
                  });
                } catch (addError) {
                  // handle "add" error
                }
              }
            }
          }
        } catch (err) {
          setmsg("Something went wrong.");
        }
      } else {
        setmsg("Install Metamask.");
      }
    };
  

    const check = () => {
      CTN.methods.totalSupply().call({from: account})
      .then((receipt) => {
        console.log(receipt);
      });
    };

    const mint = () => {
      setmsg("Minting your NFT...")
      CTN.methods.mint(NFTNAME, NAME, BGCOLOR, TXTCOLOR).send({
        from: account,
         to: contract,
          value: TotalPrice,
          gasLimit: Gas
          })
      .once("error", (err) => {
        console.log(err.message);
        setmsg("Something Wrong Happend");
      })
      .then((receipt) => {
        console.log(receipt);
        setmsg("WOW YOUR NFT HAS BEEN MINTED")
      });
    };



  return (
    <Screen>
      <Header CONNECT={connect} account={account} MSG={msg}/>
      <CTNDIV>
        {account === null ? (
          <>
          
          </>
        ) : (
         <>
               <CTNBTN onClick={(e) => {
        e.preventDefault();
        mint();
      }} >
        Mint
        </CTNBTN>
         </> 
        )}

      </CTNDIV>
<InpDIVW>
      <InpDIV>

      <InputGroup style={{width: 400}}>
      <Input placeholder='FAZEL NFT' ref={NAMEInputRef} value={NFTNAME} onChange={handleChangeNFTNAME}/>
      <InputGroup.Addon>NFT NAME</InputGroup.Addon>
    </InputGroup>

    <InputGroup style={{width: 400}}>
      <Input placeholder='FAZEL' ref={TXTInputRef} value={NAME} onChange={handleChangeNAME}/>
      <InputGroup.Addon>Your NAME</InputGroup.Addon>
    </InputGroup>
    </InpDIV>
    <InpDIV2>

<COlordiv>
    <HexColorPicker color={BGCOLOR}  onChange={setBGCOLOR} ref={AmountInputRef}  />
      <HexColorInput  color={BGCOLOR} onChange={setBGCOLOR}  placeholder="Type a BG color HEX"  />
      </COlordiv>

      <COlordiv>
    <HexColorPicker color={TXTCOLOR}  onChange={setTXTCOLOR} ref={AmountInputRef}  />
      <HexColorInput color={TXTCOLOR} onChange={setTXTCOLOR}  placeholder="Type a TXT color HEX"  />
      </COlordiv>

      </InpDIV2>
      </InpDIVW>
      <SVGDIV>
      <svg width="350" height="350" xmlns="http://www.w3.org/2000/svg">
              <rect height="350" width="350" fill={BGCOLOR}/>
              <text x="50%" y="50%" dominant-baseline="middle" fill={TXTCOLOR} text-anchor="middle" font-size="41">{NAME}</text>
              </svg>
      </SVGDIV>
    </Screen>
  );
}

export default App;

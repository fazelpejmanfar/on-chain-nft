import React from 'react'
import styled from 'styled-components';

const HEADING = styled.p`
font-size: 3rem;
text-align: center;
color: #101820FF;
`;

const Head = styled.div`
height: 150px;
background-color: #FEE715FF;
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
align-items: center;
`;

const TEXT = styled.p`
font-size: 1rem;
text-align: center;
color: #101820FF;
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
    background: #101820FF;
    color: #FEE715FF;
}
`;




function Header( { CONNECT, account, MSG } ) {
  return (
    <Head>
        <HEADING>
            Create Your Name as an On-chain NFT
        </HEADING>
        <CTNDIV>
      <CTNBTN onClick={(e) => {
        e.preventDefault();
        CONNECT();
      }} >
        {account === null ? (
          <>
          CONNECT
          </>
        ) : (
          <>
          {account.substring(0,4)}...{account.substring(38,46)}
          </>
        )}
        
        </CTNBTN>
        <TEXT>
          {MSG}
        </TEXT>
      </CTNDIV>
    </Head>
  )
}

export default Header
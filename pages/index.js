import React, {useState, useEffect, useContext } from "react";

import {
    Footer,
    Header,
    About,
    Brand,
    Contact,
    Faq,
    Features,
    Hero,
    Loader,
    Progress,
    Roadmap,
    Sidebar,
    Team,
    Token,
    TokenInfo,
    Popup,
    TransferToken,
    Owner,
    TransferCurrency,
    Donate,
    UpdatePrice,
    UpdateAddress
} from "../Components/index";

import { TOKEN_ICO_Context } from "../context/index";
import { shortenAddress } from "../Utils/index";

const index = () => {
  const {
    TOKEN_ICO,
    BUY_TOKEN,
    TRANSFER_ETHER,
    DONATE,
    UPDATE_TOKEN,
    UPDATE_TOKEN_PRICE,
    TOKEN_WITHDRAW,
    TRANSFER_TOKEN,
    CONNECT_WALLET,
    ERC20,
    CHECK_ACCOUNT_BALANCE,
    setAccount,
    setLoader,
    addtokenToMetaMask,
    TOKEN_ADDRESS,
    loader,
    account,
    currency,
  } = useContext(TOKEN_ICO_Context);

  const [ownerModel , setOwnerModel] = useState(false);
  const [buyModel , setBuyModel] = useState(false);
  const [transferModel , setTransferModel] = useState(false);
  const [transferCurrency, setTransferCurrency] = useState(false);
  const [openDonate, setOpenDonate] = useState(false);
  const [openUpdatePrice, setOpenUpdatePrice] = useState(false);
  const [openUpdateAddress, setOpenUpdateAddress] = useState(false);
  const [detail, setDetail] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const items = await TOKEN_ICO();
      console.log(items);
      setDetail(items);
    };
    fetchData();
  }, [account]);

  return (
    <>
      <div className="body-wrap">
        {ownerModel && (
          <Owner 
            setOwnerModel={setOwnerModel} 
            currency={currency}
            detail={detail}
            acount={account}
            setTransferModel={setTransferModel}
            setTransferCurrency={setTransferCurrency}
            setOpenDonate={setOpenDonate}
            TOKEN_WITHDRAW={TOKEN_WITHDRAW}
            setOpenUpdateAddress={setOpenUpdateAddress}
            setOpenUpdatePrice={setOpenUpdatePrice}
          />
        )}

        {buyModel && (
          <Popup 
            setBuyModel={setBuyModel} 
            BUY_TOKEN={BUY_TOKEN}
            currency={currency}
            detail={detail}
            account={account}
            ERC20={ERC20}
            TOKEN_ADDRESS={TOKEN_ADDRESS}
            setLoader={setLoader}
          />
        )}

        {transferModel && (
          <TransferToken 
            setTransferModel={setTransferModel} 
            TRANSFER_TOKEN={TRANSFER_TOKEN}
            ERC20={ERC20}
            setLoader={setLoader}
          />
        )}

        {transferCurrency && (
          <TransferCurrency 
            setTransferCurrency={setTransferCurrency}
            TRANSFER_ETHER={TRANSFER_ETHER}
            detail={detail}
            currency={currency}
            CHECK_ACCOUNT_BALANCE={CHECK_ACCOUNT_BALANCE}
            setLoader={setLoader}
          />
        )}

        {openDonate && (
          <Donate 
            detail={detail}
            currency={currency}
            setOpenDonate={setOpenDonate}
            DONATE={DONATE}
          />
        )}

        {openUpdatePrice && (
          <UpdatePrice 
            setOpenUpdatePrice={setOpenUpdatePrice}
            UPDATE_TOKEN_PRICE={UPDATE_TOKEN_PRICE}
            detail={detail}
            currency={currency}
          />
        )}

        {openUpdateAddress && (
          <UpdateAddress 
            setOpenUpdateAddress={setOpenUpdateAddress}
            UPDATE_TOKEN={UPDATE_TOKEN}
            detail={detail}
            currency={currency}
            ERC20={ERC20}
            setLoader={setLoader}
          />
        )}

        { loader && <Loader /> }

        <Header
          account={account}
          CONNECT_WALLET={CONNECT_WALLET}
          setAccount={setAccount}
          setLoader={setLoader}
          setOwnerModel={setOwnerModel}
          shortenAddress={shortenAddress}
          detail={detail}
          currency={currency}
          ownerModel={ownerModel}
        />

        <Sidebar/>

        <Hero 
          setBuyModel={setBuyModel}
          account={account} 
          CONNECT_WALLET={CONNECT_WALLET}
          setAccount={setAccount}
          setLoader={setLoader}
          detail={detail}
          addtokenToMetaMask={addtokenToMetaMask}
        />

        <About/>
        <Features/>
        <Token />
        <TokenInfo detail={detail}/>
        <Team/>
        <Faq/>
        <Contact/>
        <Footer/>

        
      </div>
    </>
  );
};

export default index;

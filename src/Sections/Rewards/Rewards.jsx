import classes from "./Rewards.module.css"
import CryptoCard from "../../Components/cryptoCard/cryptoCard";
import typo from "../../typo.module.css"
import color from "../../textColor.module.css"
import React from "react";
import diamond from "../../Icons/diamond.svg"
import menu from "../../Icons/menu.svg"
import coin from "../../Icons/coin.svg"
import Algorand from "../../Icons/Algorand";
import Cardano from "../../Icons/Cardano";
import Ethereum from "../../Icons/Ethereum";
import Calestia from "../../Icons/Calestia";
import Cosmos from "../../Icons/Cosmos";
import Dymension from "../../Icons/Dymension";
import Flare from "../../Icons/Flare";
import Flow from "../../Icons/Flow";
import Kava from "../../Icons/Kava";
import Kusama from "../../Icons/Kusama";
import Mina from "../../Icons/Mina";
import Polkadot from "../../Icons/Polkadot";
import Polygon from "../../Icons/Polygon";
import Secret from "../../Icons/Secret";
import Sei from "../../Icons/Sei";
import Solana from "../../Icons/Solana";
import Tezos from "../../Icons/Tezos";
import TheGraph from "../../Icons/TheGraph";
import Tron from "../../Icons/Tron";
import Bitcoin from "../../Icons/Bitcoin";
import Euro from "../../Icons/Euro";
import Tether from "../../Icons/Tether";
import USDollar from "../../Icons/USDollar";
import USDC from "../../Icons/USDC";
import Wrapper from "../../Components/Wrapper/Wrapper";
import classNames from "classnames";
import DetectButton from "../../Components/DetectButton/DetectButton";


function Rewards() {
    const data = [{
        percent: "1-4% APR", cryptoName: "Algorand", cryptoAbbreviation: "ALGO", icon: <Algorand/>
    }, {
        percent: "3-6% APR", cryptoName: "Cardano", cryptoAbbreviation: "ADA", icon: <Cardano/>
    }, {
        percent: "3-6% APR", cryptoName: "Calestia", cryptoAbbreviation: "TIA", icon: <Calestia/>
    }, {
        percent: "6-10% APR", cryptoName: "Cosmos", cryptoAbbreviation: "ATOM", icon: <Cosmos/>
    }, {
        percent: "3-8% APR", cryptoName: "Dymension", cryptoAbbreviation: "DYM", icon: <Dymension/>
    }, {
        percent: "1-4% APR", cryptoName: "Ethereum", cryptoAbbreviation: "ETH", icon: <Ethereum/>
    }, {
        percent: "0.1-2% APR", cryptoName: "Flare", cryptoAbbreviation: "FLR", icon: <Flare/>
    }, {
        percent: "2-5% APR", cryptoName: "Flow", cryptoAbbreviation: "FLOW", icon: <Flow/>
    }, {
        percent: "3-6% APR", cryptoName: "Kava", cryptoAbbreviation: "KAVA", icon: <Kava/>
    }, {
        percent: "9-13% APR", cryptoName: "Kusama", cryptoAbbreviation: "KSM", icon: <Kusama/>
    }, {
        percent: "7-10% APR", cryptoName: "Mina", cryptoAbbreviation: "MINA", icon: <Mina/>
    }, {
        percent: "7-11% APR", cryptoName: "Polkadot", cryptoAbbreviation: "DOT", icon: <Polkadot/>
    }, {
        percent: "1-3% APR", cryptoName: "Polygon", cryptoAbbreviation: "MATICA", icon: <Polygon/>
    }, {
        percent: "6-10% APR", cryptoName: "Secret", cryptoAbbreviation: "SCRT", icon: <Secret/>
    }, {
        percent: "1-4% APR", cryptoName: "Sei", cryptoAbbreviation: "SEI", icon: <Sei/>
    }, {
        percent: "3-5% APR", cryptoName: "Solana", cryptoAbbreviation: "SOL", icon: <Solana/>
    }, {
        percent: "1-4% APR", cryptoName: "Tezos", cryptoAbbreviation: "XTZ", icon: <Tezos/>
    }, {
        percent: "1-4% APR", cryptoName: "The graph", cryptoAbbreviation: "GRT", icon: <TheGraph/>
    }, {
        percent: "1-4% APR", cryptoName: "Tron", cryptoAbbreviation: "TRX", icon: <Tron/>
    }, {
        percent: "1-4% APR", cryptoName: "Bitcoin", cryptoAbbreviation: "BTC", icon: <Bitcoin/>
    }, {
        percent: "4% APR", cryptoName: "Euro", cryptoAbbreviation: "EUR^", icon: <Euro/>
    }, {
        percent: "5.75% APR", cryptoName: "Tether", cryptoAbbreviation: "USDT^", icon: <Tether/>
    }, {
        percent: "5.75% APR", cryptoName: "US dollar", cryptoAbbreviation: "USD^", icon: <USDollar/>
    }, {
        percent: "5.75% APR", cryptoName: "USDC", cryptoAbbreviation: "USDC^", icon: <USDC/>
    },];

    return <div className={classes.rewards}>
        <Wrapper className={classes.wrapper}>
            <div className={classes.titleWrapper}>
                <h1 className={classNames(typo.displayMdRegular, color.primaryInverse)}>Earn rewards on your crypto</h1>
                <p className={classNames(classes.description, typo.lgRegular, color.primaryInverse)}>Rewards are
                    available on the assets listed below. Earnings are paid out on a weekly basis in the same asset that
                    earned them.*</p>
            </div>
            <div className={classes.cardWrapper}>
                {data.map((card, index) => (<CryptoCard
                    key={index}
                    percent={card.percent}
                    cryptoName={card.cryptoName}
                    cryptoAbbreviation={card.cryptoAbbreviation}
                    children={card.icon}
                />))}
            </div>
            <div>
                <div className={classes.infoCardWrapper}>
                    <div className={classes.infoCard}>
                        <img src={menu} alt="icon"/>
                        <span className={classNames(classes.infoCardDescription, typo.lgMedium, color.primaryInverse)}>18+ assets eligible for rewards</span>
                    </div>
                    <div className={classes.infoCard}>
                        <img src={diamond} alt="icon"/>
                        <span className={classNames(classes.infoCardDescription, typo.lgMedium, color.primaryInverse)}>Rewards grow in your account automatically</span>
                    </div>
                    <div className={classes.infoCard}>
                        <img src={coin} alt="icon"/>
                        <span className={classNames(classes.infoCardDescription, typo.lgMedium, color.primaryInverse)}>$800M+ in rewards earned by clients</span>
                    </div>
                </div>
                <DetectButton className={classes.button} btnText="Download"/>
                <div className={classes.textWrapper}>
                    <div className={classes.textContent}>
                        <span className={classNames(classes.infoText, typo.smRegular, color.secondary)}>* Rewards is not available to US and UK clients. Other geographic restrictions may apply. Reward rates are subject to change and compliance with Kraken’s terms and conditions. Neither your Kraken account nor staked assets are covered by insurance against losses or subject to Federal Deposit Insurance Corporation (FDIC) or Securities Investor Protection Corporation (SIPC) protections. For more information, please see our Terms of Service.</span>
                        <span className={classNames(classes.infoText, typo.smRegular, color.secondary)}>
⌃Asset availability for Opt-In Rewards may different due to geographic restrictions. Please see Kraken’s Where can I use Kraken? support page for more information.
                        </span>
                    </div>
                </div>
            </div>
        </Wrapper>


    </div>
}

export default Rewards
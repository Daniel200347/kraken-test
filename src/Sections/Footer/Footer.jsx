import classes from "./Footer.module.css"
import Wrapper from "../../Components/Wrapper/Wrapper";
import krakenGradient from "../../Icons/krakenGradient.png"
import krakenDark from "../../Icons/krakenDark.png"
import krakenViolet from "../../Icons/krakenViolet.png"
import DetectButton from "../../Components/DetectButton/DetectButton";
import logo from "../../Icons/logo.svg"
import color from "../../textColor.module.css"
import typo from "../../typo.module.css"
import classNames from "classnames";
import FooterNav from "../../Components/FooterNav/FooterNav";
import Instagram from "../../Icons/instagram";
import Facebook from "../../Icons/Facebook";
import Linkedin from "../../Icons/Linkedin";
import Twitter from "../../Icons/Twitter";
import Youtube from "../../Icons/Youtube";
import Tiktok from "../../Icons/Tiktok";
import Reddit from "../../Icons/Reddit";
import Telegram from "../../Icons/Telegram";
import arrowDown from "../../Icons/chevronDown.svg"
import {useState} from "react";

function Footer() {

    const data = [
        {
            title: 'Features',
            linkTexts: ['NFT Marketplace', 'Margin Trading', 'Futures Trading', 'OTC Trading', 'Institutions', 'API Trading', 'Staking Rewards', 'All features'],
            href: [
                'https://nft.kraken.com/',
                'https://www.kraken.com/features/margin-trading',
                'https://www.kraken.com/features/futures',
                'https://www.kraken.com/institutions/otc',
                'https://www.kraken.com/institutions',
                'https://www.kraken.com/institutions/api',
                'https://www.kraken.com/features/rewards',
                'https://www.kraken.com/features'
            ]
        },
        {
            title: 'Browse Prices',
            linkTexts: ['Bitcoin Price', 'Ethereum Price', 'Dogecoin Price', 'XRP Price', 'Cardano Price', 'Solana Price', 'Litecoin Price', 'All crypto prices'],
            href: [
                'https://www.kraken.com/prices/bitcoin',
                'https://www.kraken.com/prices/ethereum',
                'https://www.kraken.com/prices/dogecoin',
                'https://www.kraken.com/prices/xrp',
                'https://www.kraken.com/prices/cardano',
                'https://www.kraken.com/prices/solana',
                'https://www.kraken.com/prices/litecoin',
                'https://www.kraken.com/prices'
            ]
        },
        {
            title: 'Buying Guides',
            linkTexts: ['Buy Bitcoin', 'Buy Ethereum', 'Buy Dogecoin', 'Buy XRP', 'Buy Cardano', 'Buy Solana', 'Buy Litecoin', 'All crypto guides'],
            href: [
                'https://www.kraken.com/learn/buy-bitcoin-btc',
                'https://www.kraken.com/learn/buy-ethereum-eth',
                'https://www.kraken.com/learn/buy-dogecoin-doge',
                'https://www.kraken.com/learn/buy-ripple-xrp',
                'https://www.kraken.com/learn/buy-cardano-ada',
                'https://www.kraken.com/learn/buy-solana-sol',
                'https://www.kraken.com/learn/buy-litecoin-ltc',
                'https://www.kraken.com/learn/crypto-guides'
            ]
        },
        {
            title: 'Company',
            linkTexts: ['Kraken Security', 'Kraken Careers', 'Kraken Blog', 'Press Room', 'Affiliate Program', 'Asset Listings', 'Kraken Status', 'Support Center'],
            href: [
                'https://www.kraken.com/features/security',
                'https://www.kraken.com/careers',
                'https://blog.kraken.com/',
                'https://www.kraken.com/press',
                'https://support.kraken.com/hc/en-us/articles/360027545252-Kraken-Affiliate-program',
                'https://www.kraken.com/listings',
                'https://status.kraken.com/',
                'https://support.kraken.com/hc/en-us'
            ]
        },
        {
            title: 'Popular Markets',
            linkTexts: ['BTC to USD', 'ETH to USD', 'DOGE to USD', 'XRP to USD', 'ADA to USD', 'SOL to USD', 'LTC to USD', 'All crypto markets'],
            href: [
                'https://www.kraken.com/convert/btc/usd',
                'https://www.kraken.com/convert/eth/usd',
                'https://www.kraken.com/convert/doge/usd',
                'https://www.kraken.com/convert/xrp/usd',
                'https://www.kraken.com/convert/ada/usd',
                'https://www.kraken.com/convert/sol/usd',
                'https://www.kraken.com/convert/ltc/usd',
                'https://www.kraken.com/convert'
            ]
        },
        {
            title: 'Features',
            linkTexts: ['What is cryptocurrency?', 'Types of cryptocurrency', 'What is a blockchain?', 'What is Bitcoin?', 'What is Ethereum?', 'What is an NFT?', 'What is a DAO?', 'Learn crypto'],
            href: [
                'https://www.kraken.com/learn/what-is-cryptocurrency',
                'https://www.kraken.com/learn/types-of-cryptocurrency',
                'https://www.kraken.com/learn/what-is-blockchain-technology',
                'https://www.kraken.com/learn/what-is-bitcoin-btc',
                'https://www.kraken.com/learn/what-is-ethereum-eth',
                'https://www.kraken.com/learn/what-are-non-fungible-tokens-nft',
                'https://www.kraken.com/learn/what-is-decentralized-autonomous-organization-dao',
                'https://www.kraken.com/learn'
            ]
        },
    ];

    return (
        <div className={classes.footer}>
            <Wrapper>
                <div className={classes.section}>
                    <div className={classes.left}>
                        <div className={classes.logoWrapper}>
                            <div><img src={logo} alt="logo"/></div>
                            <p className={classNames(typo.xlSemibold, color.accentSubdued)}>Take your crypto trading to
                                the next level.</p>
                        </div>
                        <DetectButton className={classes.button} isActive={true} btnText="Download"/>
                        <div className={classes.iconWrapper}>
                            <div className={classes.image}><img src={krakenViolet} alt="icon"/></div>
                            <div className={classes.image}><img src={krakenDark} alt="icon"/></div>
                            <div className={classes.image}><img src={krakenGradient} alt="icon"/></div>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.linkContainerWrapper}>
                            <div className={classes.linkContainer}>
                                {data.map((footer, index) => (
                                    <FooterNav
                                        key={index}
                                        title={footer.title}
                                        links={footer.linkTexts.map((linkText, i) => ({
                                            href: footer.href[i],
                                            linkText,
                                        }))}
                                    />
                                ))}
                                <div></div>
                                <div></div>
                                <div className={classes.iconSection}>
                                    <h3 className={classNames(typo.xlSemibold, color.accentSubdued)}>Community</h3>
                                    <div className={classes.communityIconWrapper}>
                                        <div className={classes.communityIconContainer}><a target="_blank"
                                                                                           rel="noopener noreferrer"
                                                                                           href="https://www.instagram.com/krakenfx/"><Instagram
                                            className={classes.communityIcon}/></a></div>
                                        <div className={classes.communityIconContainer}><a target="_blank"
                                                                                           rel="noopener noreferrer"
                                                                                           href="https://www.facebook.com/KrakenFX/"><Facebook
                                            className={classes.communityIcon}/></a></div>
                                        <div className={classes.communityIconContainer}><a target="_blank"
                                                                                           rel="noopener noreferrer"
                                                                                           href="https://www.linkedin.com/company/krakenfx/"><Linkedin
                                            className={classes.communityIcon}/></a></div>
                                        <div className={classes.communityIconContainer}><a target="_blank"
                                                                                           rel="noopener noreferrer"
                                                                                           href="https://twitter.com/krakenfx"><Twitter
                                            className={classes.communityIcon}/></a></div>
                                        <div className={classes.communityIconContainer}><a target="_blank"
                                                                                           rel="noopener noreferrer"
                                                                                           href="https://www.youtube.com/c/KrakenBitcoinExchange"><Youtube
                                            className={classes.communityIcon}/></a></div>
                                        <div className={classes.communityIconContainer}><a target="_blank"
                                                                                           rel="noopener noreferrer"
                                                                                           href="https://www.tiktok.com/@krakenfx"><Tiktok
                                            className={classes.communityIcon}/></a></div>
                                        <div className={classes.communityIconContainer}><a target="_blank"
                                                                                           rel="noopener noreferrer"
                                                                                           href="https://www.reddit.com/r/Kraken/?rdt=45589"><Reddit
                                            className={classes.communityIcon}/></a></div>
                                        <div className={classes.communityIconContainer}><a target="_blank"
                                                                                           rel="noopener noreferrer"
                                                                                           href="https://t.me/kraken_exchange_official"><Telegram
                                            className={classes.communityIcon}/></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{paddingBottom: "80px"}}>
                    <div className={classes.footerSection}>
                        <div className={classNames(classes.textWrapper)}>
                            <p className={classNames(typo.xsRegular, color.accentSubdued)}>© 2011 - 2024 Payward,
                                Inc.</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.kraken.com/legal/privacy"
                               className={classNames(typo.xsRegular, classes.footerText)}>Privacy Notice</a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.kraken.com/legal"
                               className={classNames(typo.xsRegular, classes.footerText)}>Terms of Service</a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.kraken.com/legal/cookies"
                               className={classNames(typo.xsRegular, classes.footerText)}>Cookie Settings</a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.kraken.com/legal/disclosures"
                               className={classNames(typo.xsRegular, classes.footerText)}>Disclosures</a>
                        </div>
                    </div>
                    <p className={classNames(classes.descriptionFooter, typo.smRegular, color.accentSubdued)}>These
                        materials are for general information purposes only and are not investment advice or a
                        recommendation or solicitation to buy, sell, stake or hold any cryptoasset or to engage in any
                        specific trading strategy. Kraken does not and will not work to increase or decrease the price
                        of any particular cryptoasset it makes available. Some crypto products and markets are
                        unregulated, and you may not be protected by government compensation and/or regulatory
                        protection schemes. The unpredictable nature of the crypto-asset markets can lead to loss of
                        funds. Tax may be payable on any return and/or on any increase in the value of your cryptoassets
                        and you should seek independent advice on your taxation position. Geographic restrictions may
                        apply.</p>
                </div>
            </Wrapper>
        </div>
    );
}

export default Footer;

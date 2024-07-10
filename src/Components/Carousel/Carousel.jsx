import React from 'react';
import styles from './Carousel.module.css';
import typo from '../../typo.module.css';
import Marquee from 'react-fast-marquee'; // import the library
import BitcoinIcon from '../../Icons/bitcoinIcon.svg';
import UniswapIcon from '../../Icons/uniswapIcon.svg';
import UsdCoinIcon from '../../Icons/usdCoinIcon.svg';
import DogecoinIcon from '../../Icons/dogecoinIcon.svg';
import PolkadotIcon from '../../Icons/polkadotIcon.svg';
import SolanaIcon from '../../Icons/solanaIcon.svg';
import RippleIcon from '../../Icons/rippleIcon.svg';
import TetherUSDIcon from '../../Icons/tetherUSD.svg';
import CardanoIcon from '../../Icons/cardanoIcon.svg';
import EthereumIcon from '../../Icons/ethereumIcon.svg';
import PolygonIcon from '../../Icons/polygonIcon.svg';
import MoneroIcon from '../../Icons/moneroIcon.svg';
import WrappedBitcoinIcon from '../../Icons/wrappedBitcoinIcon.svg';
import AlgorandIcon from '../../Icons/algorandIcon.svg';
import FileCoinIcon from '../../Icons/filecoinIcon.svg';
import TronIcon from '../../Icons/tronIcon.svg';
import LumenIcon from '../../Icons/lumenIcon.svg';
import ChainlinkIcon from '../../Icons/chainlinkIcon.svg';
import LitecoinIcon from '../../Icons/litecoinIcon.svg';
import BitcoinCashIcon from '../../Icons/bitcoinCashIcon.svg';
import WavesIcon from '../../Icons/wavesIcon.svg';
import EthereumClassicIcon from '../../Icons/ethereumClassicIcon.svg';
import KusamaIcon from '../../Icons/kusamaIcon.svg';
import AxsIcon from '../../Icons/axsIcon.svg';
import TheGraphIcon from '../../Icons/theGraphIcon.svg';
import EosIcon from '../../Icons/eosIcon.svg';
import AaveIcon from '../../Icons/aaveIcon.svg';
import TezosIcon from '../../Icons/tezosIcon.svg';
import DaiIcon from '../../Icons/daiIcon.svg';
import CosmosIcon from '../../Icons/cosmosIcon.svg';
import DecentralandIcon from '../../Icons/decentralandIcon.svg';
import SynthetixIcon from '../../Icons/synthetixIcon.svg';
import ZcashIcon from '../../Icons/zcashIcon.svg';
import SushiIcon from '../../Icons/sushiIcon.svg';
import ChilsIcon from '../../Icons/chilzIcon.svg';
import DashIcon from '../../Icons/dashIcon.svg';
import CompoundIcon from '../../Icons/compoundIcon.svg';
import MakerDAOIcon from '../../Icons/makerdaoIcon.svg';
import EnjinIcon from '../../Icons/enjinIcon.svg';
import CryptoIcon from '../../Icons/cryptoIcon.svg';

// Data for carousel items with imported icons
const carouselItems = [
    { icon: BitcoinIcon, label: "Bitcoin" },
    { icon: UniswapIcon, label: "Uniswap" },
    { icon: UsdCoinIcon, label: "USD coin" },
    { icon: DogecoinIcon, label: "Dogecoin" },
    { icon: PolkadotIcon, label: "Polkadot" },
    { icon: SolanaIcon, label: "Solana" },
    { icon: RippleIcon, label: "Ripple" },
    { icon: TetherUSDIcon, label: "Tether USD" },
    { icon: CardanoIcon, label: "Cardano" },
    { icon: EthereumIcon, label: "Ethereum" },
    { icon: PolygonIcon, label: "Polygon" },
    { icon: MoneroIcon, label: "Monero" },
    { icon: WrappedBitcoinIcon, label: "Wrapped Bitcoin" },
    { icon: AlgorandIcon, label: "Algorand" },
    { icon: FileCoinIcon, label: "Filecoin" },
    { icon: TronIcon, label: "TRON" },
    { icon: LumenIcon, label: "Lumen" },
    { icon: ChainlinkIcon, label: "Chainlink" },
    { icon: LitecoinIcon, label: "Litecoin" },
    { icon: BitcoinCashIcon, label: "Bitcoin Cash" },
    { icon: WavesIcon, label: "Waves" },
    { icon: EthereumClassicIcon, label: "Ethereum Classic" },
    { icon: KusamaIcon, label: "Kusama" },
    { icon: AxsIcon, label: "AXS" },
    { icon: TheGraphIcon, label: "The Graph" },
    { icon: EosIcon, label: "EOS" },
    { icon: AaveIcon, label: "Aave" },
    { icon: TezosIcon, label: "Tezos" },
    { icon: DaiIcon, label: "DAI" },
    { icon: CosmosIcon, label: "Cosmos" },
    { icon: DecentralandIcon, label: "Decentraland" },
    { icon: SynthetixIcon, label: "Synthetix" },
    { icon: ZcashIcon, label: "Zcash" },
    { icon: SushiIcon, label: "Sushi" },
    { icon: ChilsIcon, label: "Chils" },
    { icon: DashIcon, label: "Dash" },
    { icon: CompoundIcon, label: "Compound" },
    { icon: MakerDAOIcon, label: "MakerDAO" },
    { icon: EnjinIcon, label: "Enjin" },
    { icon: CryptoIcon, label: "Crypto" }
];

const Carousel = () => {
    const slides = Array.from({ length: 4 }, (_, slideIndex) =>
        carouselItems.slice(slideIndex * 10, (slideIndex + 1) * 10)
    );

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.boxShadowLeft}></div>
            <div className={styles.boxShadowRight}></div>
            <Marquee speed={10} className={styles.logos} gradient={false} direction="right">
                <div className={styles.horizontalSlideWrapper}>
                    {slides.map((slide, slideIndex) => (
                        <div className={styles.horizontalSlide} key={slideIndex}>
                            {slide.map((item, index) => (
                                <div className={styles.item} key={index}>
                                    <img src={item.icon} alt={item.label} />
                                    <span className={typo.mdMedium}>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default Carousel;

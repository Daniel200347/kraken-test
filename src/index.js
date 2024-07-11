import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@nextcss/reset';
import Header from "./Sections/Header/Header";
import Faq from "./Sections/Faq/Faq";
import CryptoCard from "./Components/cryptoCard/cryptoCard";
import Rewards from "./Sections/Rewards/Rewards";
import Start from "./Sections/Start/Start";
import Footer from "./Sections/Footer/Footer";
import Carousel from "./Components/Carousel/Carousel";

import Portfolio from "./Sections/Portfolio/Portfolio";
import StartScreen from "./Sections/StartScreen/StartScreen";
import Main from "./Sections/Main/Main";
import Pro from "./Sections/Pro/Pro";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>
            <Header/>
            <section id="startScreen"><StartScreen/></section>
            <section id="Main"><Main/></section>
            <section id="Portfolio"><Portfolio/></section>
            <section id="Faq"><Faq/></section>
            <section id="Rewards"><Rewards/></section>
            <section id="Pro"><Pro/></section>
            <section id="Start"><Start/></section>
            <Footer/>
        </>
    </React.StrictMode>
);

import React from 'react';
import Header from './Header';
import Contact from './Contact';
import jets_img from './images/jets.jpg';
import './About.css';

import ikkei_img from './images/ikkei.jpg';
import nobu_img from './images/nobu.jpg';
import michi_img from './images/tanaka.jpg';
import fun_img from './images/us.jpg';

const About = () => {
    return (
        <div className="About">
            <Header />
            <div className="about-content">
                <div className="about-intro">
                    <h1>
                        JETS (Japanese English Tutor Service) 
                        とは高校生によって立ち上げられた、
                        補習校小学部の宿題をサポートするボランティア団体です。
                        私たちは、保護者の方々が忙しい時などにお子さんの
                        宿題のサポートをすることを目標して活動を行っております。
                    </h1>
                    <p>ようこそ、JETSへ</p>
                    <img src={jets_img} alt="JETS"/>
                </div>
                <div className="members">
                    <div className="member-title">
                        <h1>メンバー紹介</h1>
                        <p>
                            私達は補習校の勉強と他の勉強・習い事を頑張ってバランスとってました。
                            この経験を生徒さんにも共有したいと思っています。
                            JETSとして、わかりやすく丁寧な指導を心がけ、
                            一緒に楽しく学ぶことができるようサポートします。
                            どうぞよろしくお願いします！
                        </p>
                    </div>
                    <div className="member-intros">
                        <div className="ikkei">
                            <h2>安田一敬（やすだいっけい）</h2>
                            <img src={ikkei_img} alt="Ikkei"/>
                            <p>
                                こんにちは、JETSの創設者です。補習校はこれで8年目になります。
                                僕はサッカーを真剣に取り組んでいるので、勉強との両立がとても大事でした。
                                習い事や現地校の宿題で、一人で補習校の宿題をする時間がない、
                                という生徒さんにJETSを作り上げました。よろしくお願いします。
                            </p>
                        </div>
                        <div className="nobu">
                            <h2>石黒信寿（いしぐろのぶひさ）</h2>
                            <img src={nobu_img} alt="Nobu"/>
                            <p>
                                初めまして、私は12年間補習校に通い、小学部の学習は、
                                中高部の学習の土台であり、とても大切だと感じています。
                                毎日のワークや音読、漢字学習などの補習校の宿題を続けるのはとても大変です。
                                そこで、補習校の宿題のサポートをするためにJETSを立ち上げました。
                            </p>
                        </div>
                        <div className="michi">
                            <h2>田中道（たなかみち）</h2>
                            <img src={michi_img} alt="Michi"/>
                            <p>
                                こんにちは。私は補習校に小学1年生の時から通っているので保護者の方にとって
                                ワークの丸つけや音読を聞いてあげることが大変だと理解しているつもりです。
                                少しでもその重荷を肩代わりできればと思ってJETS創立に協力しました。
                            </p>
                        </div>
                        <div className="funtime">
                            <img src={fun_img} alt="Fun"/>
                            <p>✌️✌️✌️</p>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default About;
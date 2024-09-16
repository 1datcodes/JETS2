import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import jets_img from "./images/jets.jpg";
import "./About.css";

import default_img from "./images/default.png";
import ikkei_img from "./images/ikkei.jpg";
import nobu_img from "./images/nobu.jpg";
import michi_img from "./images/tanaka.jpg";
import yamada_img from "./images/yamada.jpg";
import hatayama_img from "./images/hatayama.jpg";
// import fun_img from "./images/us.jpg";

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
          <img src={jets_img} alt="JETS" />
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
            <div className="founding-members">
              <h1>創設メンバー</h1>
              <div class="founding-members-intro">
                <div className="ikkei">
                  <h2>安田一敬（やすだいっけい）</h2>
                  <img src={ikkei_img} alt="Ikkei" />
                  <p>
                    こんにちは、JETSの創設者です。補習校はこれで8年目になります。
                    僕はサッカーを真剣に取り組んでいるので、勉強との両立がとても大事でした。
                    習い事や現地校の宿題で、一人で補習校の宿題をする時間がない、
                    という生徒さんにJETSを作り上げました。よろしくお願いします。
                  </p>
                </div>
                <div className="nobu">
                  <h2>石黒伸寿（いしぐろのぶひさ）</h2>
                  <img src={nobu_img} alt="Nobu" />
                  <p>
                    初めまして、私は11年間補習校に通い、小学部の学習は、
                    中高部の学習の土台であり、とても大切だと感じています。
                    毎日のワークや音読、漢字学習などの補習校の宿題を続けるのはとても大変です。
                    そこで、補習校の宿題のサポートをするためにJETSを立ち上げました。
                  </p>
                </div>
                <div className="michi">
                  <h2>田中道（たなかみち）</h2>
                  <img src={michi_img} alt="Michi" />
                  <p>
                    こんにちは。私は補習校に小学1年生の時から通っているので保護者の方にとって
                    ワークの丸つけや音読を聞いてあげることが大変だと理解しているつもりです。
                    少しでもその重荷を肩代わりできればと思ってJETS創立に協力しました。
                  </p>
                </div>
              </div>
            </div>
            <div className="tutors">
              <h1>チューター</h1>
              <div className="tutors-intro">
                <div className="yamada">
                  <h3>山田麻里衣（やまだまりい）</h3>
                  <img src={yamada_img} alt="Yamada" />
                  <p>
                    こんにちは、私は小学2年生まで補習校を続けましたが、
                    現地校とスポーツの両立が難しくなりやめてしまいましたが、
                    中学でまた入って沢山の思い出を作れました。
                    日本語と英語を両立している子たちをサポートや頑張っている子たちをサポート
                    できるように頑張りたいです。よろしくお願いします。
                  </p>
                </div>
                <div className="hatayama">
                  <h3>畑山香穂（はたやまかほ）</h3>
                  <img src={hatayama_img} alt="Hatayama" />
                  <p>
                    こんにちは。私は日本に小学6年生まで住んでいて、アメリカ住んで5年です。
                    現地校と補習校の言語の違いから両立が難しいのをとても理解しているので、
                    少しでもたくさんの生徒さんをお手伝いできたらなと思います。よろしくお願いします。
                  </p>
                </div>
                <div className="ohashi">
                  <h3>大橋月香（おおはしるか）</h3>
                  <img src={default_img} alt="Ohashi" />
                  <p>
                    こんにちは、私は幼稚部から補習校に通っています。
                    現地校の勉強、新体操の練習、補習校の宿題を掛け持ちするのはとても大変で、
                    苦痛に思う時もありました。そのため、日本語の勉強が楽しいと思えるような時間を提供したいと思います。
                    よろしくお願いします。
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="funtime">
              <img src={fun_img} alt="Fun" />
              <p>✌️✌️✌️</p>
            </div> */}
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default About;

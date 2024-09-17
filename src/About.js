import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import "./About.css";

const images = require.context("./images", false, /\.(png|jpe?g|svg)$/);
const randomImages = require.context(
  "./images/random",
  false,
  /\.(png|jpe?g|svg)$/,
);
const randomImagePaths = randomImages.keys().map(randomImages);

const About = () => {
  const importedImages = images.keys().reduce((acc, path) => {
    acc[path.replace("./", "")] = images(path);
    return acc;
  }, {});

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * randomImagePaths.length);
    return randomImagePaths[randomIndex];
  };

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
          <img src={importedImages["jets.jpg"]} alt="JETS" />
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
              <div className="founding-members-intro">
                <div className="ikkei">
                  <h2>安田一敬（やすだいっけい）</h2>
                  <img src={importedImages["ikkei.jpg"]} alt="Ikkei" />
                  <p>
                    こんにちは、JETSの創設者です。補習校はこれで8年目になります。
                    僕はサッカーを真剣に取り組んでいるので、勉強との両立がとても大事でした。
                    習い事や現地校の宿題で、一人で補習校の宿題をする時間がない、
                    という生徒さんにJETSを作り上げました。よろしくお願いします。
                  </p>
                </div>
                <div className="nobu">
                  <h2>石黒伸寿（いしぐろのぶひさ）</h2>
                  <img src={importedImages["nobu.jpg"]} alt="Nobu" />
                  <p>
                    初めまして、私は11年間補習校に通い、小学部の学習は、
                    中高部の学習の土台であり、とても大切だと感じています。
                    毎日のワークや音読、漢字学習などの補習校の宿題を続けるのはとても大変です。
                    そこで、補習校の宿題のサポートをするためにJETSを立ち上げました。
                  </p>
                </div>
                <div className="michi">
                  <h2>田中道（たなかみち）</h2>
                  <img src={importedImages["tanaka.jpg"]} alt="Michi" />
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
                  <img src={importedImages["yamada.jpg"]} alt="Yamada" />
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
                  <img src={importedImages["hatayama.jpg"]} alt="Hatayama" />
                  <p>
                    こんにちは。私は日本に小学6年生まで住んでいて、アメリカ住んで5年です。
                    現地校と補習校の言語の違いから両立が難しいのをとても理解しているので、
                    少しでもたくさんの生徒さんをお手伝いできたらなと思います。よろしくお願いします。
                  </p>
                </div>
                <div className="ohashi">
                  <h3>大橋月香（おおはしるか）</h3>
                  <img src={getRandomImage()} alt="Ohashi" />
                  <p>
                    こんにちは、私は幼稚部から補習校に通っています。
                    現地校の勉強、新体操の練習、補習校の宿題を掛け持ちするのはとても大変で、
                    苦痛に思う時もありました。そのため、日本語の勉強が楽しいと思えるような時間を提供したいと思います。
                    よろしくお願いします。
                  </p>
                </div>
                <div className="ushiyama">
                  <h3>牛山翔矢（うしやましょうや）</h3>
                  <img src={importedImages["ushiyama.jpg"]} alt="Ushiyama" />
                  <p>
                    始めまして、中学2年生に日本からアメリカに来て、三育に一年半、
                    補習校には高等部から入りました。日本からアメリカという大きな壁を乗り越え、
                    現地校と補習校の勉強の両立はとても大変で大事だと強く実感しました。
                    そこでワークや音読のチェックを少しでも手伝えたらなと思っています。よろしくお願いします。
                  </p>
                </div>
                <div className="koto">
                  <h3>古藤慶次（ことうけいじ）</h3>
                  <img src={getRandomImage()} alt="Koto" />
                  <p>
                    こんにちは、補習校は8年目になります。サッカー、病気、現地校の掛け持ちするのがとても大変でした。
                    それでも中高部でいろいろな思い出が作れました。日本語が楽しいと思えるようなお手伝いができたらいいなと思います。
                    よろしくお願いします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default About;

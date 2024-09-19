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
                <div className="profile ikkei">
                  <h2>安田一敬（やすだいっけい）</h2>
                  <img src={importedImages["ikkei.jpg"]} alt="Ikkei" />
                  <p>
                    こんにちは、JETSの創設者です。補習校はこれで8年目になります。
                    僕はサッカーを真剣に取り組んでいるので、勉強との両立がとても大事でした。
                    習い事や現地校の宿題で、一人で補習校の宿題をする時間がない、
                    という生徒さんにJETSを作り上げました。よろしくお願いします。
                  </p>
                </div>
                <div className="profile nobu">
                  <h2>石黒伸寿（いしぐろのぶひさ）</h2>
                  <img src={importedImages["nobu.jpg"]} alt="Nobu" />
                  <p>
                    初めまして、私は11年間補習校に通い、小学部の学習は、
                    中高部の学習の土台であり、とても大切だと感じています。
                    毎日のワークや音読、漢字学習などの補習校の宿題を続けるのはとても大変です。
                    そこで、補習校の宿題のサポートをするためにJETSを立ち上げました。
                  </p>
                </div>
                <div className="profile michi">
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
                <div className="profile yamada">
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
                <div className="profile hatayama">
                  <h3>畑山香穂（はたやまかほ）</h3>
                  <img src={importedImages["hatayama.jpg"]} alt="Hatayama" />
                  <p>
                    こんにちは。私は日本に小学6年生まで住んでいて、アメリカ住んで5年です。
                    現地校と補習校の言語の違いから両立が難しいのをとても理解しているので、
                    少しでもたくさんの生徒さんをお手伝いできたらなと思います。よろしくお願いします。
                  </p>
                </div>
                <div className="profile ohashi">
                  <h3>大橋月香（おおはしるか）</h3>
                  <img src={getRandomImage()} alt="Ohashi" />
                  <p>
                    こんにちは、私は幼稚部から補習校に通っています。
                    現地校の勉強、新体操の練習、補習校の宿題を掛け持ちするのはとても大変で、
                    苦痛に思う時もありました。そのため、日本語の勉強が楽しいと思えるような時間を提供したいと思います。
                    よろしくお願いします。
                  </p>
                </div>
                <div className="profile ushiyama">
                  <h3>牛山翔矢（うしやましょうや）</h3>
                  <img src={importedImages["ushiyama.jpg"]} alt="Ushiyama" />
                  <p>
                    始めまして、中学2年生に日本からアメリカに来て、三育に一年半、
                    補習校には高等部から入りました。日本からアメリカという大きな壁を乗り越え、
                    現地校と補習校の勉強の両立はとても大変で大事だと強く実感しました。
                    そこでワークや音読のチェックを少しでも手伝えたらなと思っています。よろしくお願いします。
                  </p>
                </div>
                <div className="profile koto">
                  <h3>古藤慶次（ことうけいじ）</h3>
                  <img src={getRandomImage()} alt="Koto" />
                  <p>
                    こんにちは、補習校は8年目になります。サッカー、病気、現地校の掛け持ちするのがとても大変でした。
                    それでも中高部でいろいろな思い出が作れました。日本語が楽しいと思えるようなお手伝いができたらいいなと思います。
                    よろしくお願いします。
                  </p>
                </div>
                <div className="profile namekawa">
                  <h3>滑川佳祐（なめかわけいすけ）</h3>
                  <img src={importedImages["namekawa.jpg"]} alt="Namekawa" />
                  <p>
                    初めまして。私は補習校に通い始めてまだ4ヶ月ほどですが、16年間日本で生活をしていて中学受験も経験しました。
                    現地校と補習校の両立が大変なのは私が1番感じていることなので、
                    少しでも皆さんの役に立てるようにお手伝いさせて頂けたらなと思っています。よろしくお願いします。
                  </p>
                </div>
                <div className="profile senba">
                  <h3>仙波歩乃佳（せんばほのか）</h3>
                  <img src={importedImages["senba.jpg"]} alt="Senba" />
                  <p>
                    こんにちは。私は中学3年生でアメリカに来たので、英語の勉強、現地校の勉強、補習校の勉強、
                    スポーツなどと色々なことを両立するのに苦戦していた時期がありました。
                    なので皆さんの気持ちに寄り添いながら勉強のお手伝いをしたいです。よろしくお願いします。
                  </p>
                </div>
                <div className="profile kawai">
                  <h3>河合静（かわいしずか）</h3>
                  <img src={getRandomImage()} alt="Kawai" />
                  <p>
                    こんにちは。私は小学2年生から補習校に通い、5年生から並行してENA でもクラスをとっています。
                    マーチングバンドでの活動もあり、大変に思う毎日です。けれど、すべて苦しいだけのことではありません。
                    生徒さんにもそう思ってもらえるよう、お手伝いをしたいです。よろしくお願いします。
                  </p>
                </div>
                <div className="profile oka">
                  <h3>岡優那（おかゆうな）</h3>
                  <img src={importedImages['oka.jpg']} alt="Oka" />
                  <p>
                    はじめまして。私は補習校に12年間通っていて、中高部の生徒会長を務めさせていただいています。
                    これまで補習校をやめたいと思う時期もありましたが、続けられるようにサポートしてくれた両親に感謝しています。
                    Kumonで英語と算数を小学生に3年間教えた経験があります。
                    補習校のお子さんがいずれ補習校に行ってよかったと思えるように全力でお手伝いさせてください。
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

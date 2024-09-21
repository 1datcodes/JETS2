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

const memberData = 
[
  {
    container: "founders",
    members: 
    [
      {
        className: "yasuda",
        name: "安田一敬（やすだいっけい）",
        image: "ikkei.jpg",
        message: `こんにちは、JETSの創設者です。補習校はこれで8年目になります。
                  僕はサッカーに真剣に取り組んでいるので、サッカーと勉強の両立がとても大事でした。
                  習い事や現地校の宿題で、ひとりで補習校の宿題をする時間がない、
                  という生徒さんの力になりたいと、JETSを作りました。よろしくお願いします。`
      },
      {
        className: "ishiguro",
        name: "石黒伸寿（いしぐろのぶひさ）",
        image: "nobu.jpg",
        message: `初めまして、私は11年間補習校に通い、小学部の学習は、
                  中高部の学習の土台であり、とても大切だと感じています。
                  しかし毎日のワークや音読、漢字学習などをひとりで続けるのはとても大変です。
                  そこで、補習校の宿題のサポートをするためにJETSを立ち上げました。`
      },
      {
        className: "tanaka",
        name: "田中道（たなかみち）",
        image: "tanaka.jpg",
        message: `こんにちは。私は補習校に小学1年生の時から通っているので保護者の方にとって
                  ワークの丸つけや音読を聞いてあげることが大変だと理解しているつもりです。
                  少しでもその重荷を肩代わりできればと思ってJETS創立に協力しました。`
      }
    ]
  },
  {
    container: "tutors",
    members: 
    [
      {
        className: "yamada",
        name: "山田麻里衣（やまだまりい）",
        image: "yamada.jpg",
        message: `こんにちは、私は小学2年生まで補習校を続けましたが、
                  現地校とスポーツの両立が難しくなりやめてしまいました。
                  中学でまた補習校に入ってたくさんの思い出を作れました。
                  日本語と英語を両立して、頑張っている子たちをサポート
                  したいと思っています。よろしくお願いします。`
      },
      {
        className: "hatayama",
        name: "畑山香穂（はたやまかほ）",
        image: "hatayama.jpg",
        message: `こんにちは。私は日本に小学6年生まで住んでいて、アメリカに引っ越して来て5年です。
                  言語の違いから現地校と補習校の両立が難しいのを理解しているので、
                  少しでも多くの生徒さんをお手伝いできたらなと思います。よろしくお願いします。`
      },
      {
        className: "ohashi",
        name: "大橋月香（おおはしるか）",
        image: "",
        message: `こんにちは、私は幼稚部から補習校に通っています。
                  現地校の勉強、新体操の練習、補習校の宿題を掛け持ちするのはとても大変で、
                  苦痛に思う時もありました。そのため、日本語の勉強が楽しいと思えるような時間を提供したいと思います。
                  よろしくお願いします。`
      },
      {
        className: "ushiyama",
        name: "牛山翔矢（うしやましょうや）",
        image: "ushiyama.jpg",
        message: `始めまして、中学2年生で日本からアメリカに来て、三育に一年半、
                  補習校には高等部から入りました。日本からアメリカという大きな環境の変化を乗り越え、
                  現地校と補習校の勉強の両立はとても大変でした。しかし、それは大事なことだと強く思いました。
                  そこでワークや音読のチェックを少しでも手伝えたらなと思っています。よろしくお願いします。`
      },
      {
        className: "koto",
        name: "古藤慶次（ことうけいじ）",
        image: "",
        message: `こんにちは、補習校は8年目になります。サッカー、持病の治療、現地校の勉強や予定を
                  掛け持ちするのがとても大変でした。
                  それでも中高部でいろいろな思い出が作れました。
                  日本語が楽しいと思えるようなお手伝いができたらいいなと思います。よろしくお願いします。`
      },
      {
        className: "namekawa",
        name: "滑川佳祐（なめかわけいすけ）",
        image: "namekawa.jpg",
        message: `初めまして。私は補習校に通い始めてまだ4ヶ月ほどですが、16年間日本で生活をしていて中学受験も経験しました。
                  現地校と補習校の両立が大変なのは私が1番感じていることなので、
                  少しでも皆さんの役に立てるようにお手伝いさせて頂けたらなと思っています。よろしくお願いします。`
      },
      {
        className: "senba",
        name: "仙波歩乃佳（せんばほのか）",
        image: "senba.jpg",
        message: `こんにちは。私は中学3年生でアメリカに来たので、英語の勉強、現地校の勉強、補習校の勉強、
                  スポーツなどと色々なことをするのに苦戦していた時期がありました。
                  なので皆さんの気持ちに寄り添いながら勉強のお手伝いをしたいです。よろしくお願いします。`
      },
      {
        className: "kawai",
        name: "河合静（かわいしずか）",
        image: "",
        message: `こんにちは。私は小学2年生から補習校に通い、5年生から並行してENAでもクラスをとっています。
                  マーチングバンドでの活動もあり、大変に思う毎日です。けれど、すべて苦しいだけのことではありません。
                  生徒さんにもそう思ってもらえるよう、お手伝いをしたいです。よろしくお願いします。`
      },
      {
        className: "oka",
        name: "岡優那（おかゆうな）",
        image: "oka.jpg",
        message: `はじめまして。私は補習校に12年間通っていて、中高部の生徒会長を務めさせていただいています。
                  これまで補習校をやめたいと思う時期もありましたが、続けられるようにサポートしてくれた両親に感謝しています。
                  Kumonで英語と算数を小学生に3年間教えた経験があります。
                  補習校のお子さんがいずれ補習校に通ってよかったと思えるように全力でお手伝いさせてください。`
      }
    ]
  }
]

const profiles = memberData.map((container) => {
  return {
    ...container,
    members: container.members.sort((a, b) => {
      return a.className.localeCompare(b.className);
    })
  };
});

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
            とは補習校高校生有志が立ち上げた、
            小学部の宿題をサポートするボランティア団体です。
            私たちは、保護者の方々が忙しい時などにお子さんの
            宿題のサポートをすることを目指して活動を行っております。
          </h1>
          <p>ようこそ、JETSへ</p>
          <img src={importedImages["jets.jpg"]} alt="JETS" />
        </div>
        <div className="members">
          <div className="member-title">
            <h1>メンバー紹介</h1>
            <p>
              私達は補習校の勉強と現地校の勉強や習い事のバランスを取ろうと
              日々頑張って工夫をしてきました。
              この経験を小学部の生徒さんにも共有したいと願っています。
              JETSとして、わかりやすく丁寧な指導を心がけ、
              一緒に楽しく学ぶことができるようサポートします。
              どうぞよろしくお願いします！
            </p>
          </div>
          <div className="member-intros">
            <div className="founding-members">
              <h1>創設メンバー</h1>
              <div className="founding-members-intro">
                {profiles[0].members.map((member, index) => (
                  <div key={index} className={`profile ${member.className}`}>
                    <h2>{member.name}</h2>
                    <img src={member.image ? importedImages[member.image] : getRandomImage()} alt={member.className} />
                    <p>{member.message}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="tutors">
              <h1>チューター</h1>
              <div className="tutors-intro">
                {profiles[1].members.map((member, index) => (
                  <div key={index} className={`profile ${member.className}`}>
                    <h3>{member.name}</h3>
                    <img src={member.image ? importedImages[member.image] : getRandomImage()} alt={member.className} />
                    <p>{member.message}</p>
                  </div>
                ))}
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

import { React, useState } from "react";
import Header from "./Header";
import Contact from "./Contact";
import "./HomePage.css";

import jets_img from "./images/jets.jpg";

const benefits = [
  {
    title: "やさしい高校生たち",
    description:
      "経験豊富な補習校高校生が、小学生に寄り添い、１対１で丁寧にサポートします。",
    svg: (
      <svg
        preserveAspectRatio="xMidYMid meet"
        data-bbox="29.5 29.5 141 141"
        viewBox="29.5 29.5 141 141"
        height="200"
        width="200"
        xmlns="http://www.w3.org/2000/svg"
        data-type="color"
        role="presentation"
        aria-hidden="true"
        aria-label=""
      >
        <g>
          <path
            d="M100 29.5c-38.874 0-70.5 31.626-70.5 70.5s31.626 70.5 70.5 70.5 70.5-31.626 70.5-70.5-31.626-70.5-70.5-70.5zm0 133c-34.463 0-62.5-28.038-62.5-62.5S65.537 37.5 100 37.5s62.5 28.038 62.5 62.5-28.037 62.5-62.5 62.5zm29.8-46.8c-.456.608-11.387 14.9-29.8 14.9s-29.344-14.292-29.8-14.9a4 4 0 0 1 6.393-4.81c.091.12 9.073 11.711 23.407 11.711 14.336 0 23.318-11.594 23.407-11.711a4.006 4.006 0 0 1 5.599-.776 3.994 3.994 0 0 1 .794 5.586zM73.583 80.05c0-3.59 2.877-6.5 6.467-6.5h.066a6.5 6.5 0 1 1 0 13c-3.59 0-6.533-2.91-6.533-6.5zm39.9 0c0-3.59 2.877-6.5 6.467-6.5h.066a6.5 6.5 0 1 1 0 13c-3.59 0-6.533-2.91-6.533-6.5z"
            fill="#000001"
            data-color="1"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    title: "いつでもできます！",
    description:
      "お子さまのスケジュールに合わせて、オンラインでレッスンを受けることができます。",
    svg: (
      <svg
        preserveAspectRatio="xMidYMid meet"
        data-bbox="43 29.501 114 140.999"
        viewBox="43 29.501 114 140.999"
        height="200"
        width="200"
        xmlns="http://www.w3.org/2000/svg"
        data-type="color"
        role="presentation"
        aria-hidden="true"
        aria-label=""
      >
        <g>
          <path
            d="M156.92 72.609c-.03-.148-.084-.286-.13-.428-.034-.106-.056-.216-.099-.319-.062-.148-.146-.284-.225-.423-.049-.087-.087-.18-.143-.264-.102-.152-.225-.288-.347-.424-.05-.056-.089-.121-.142-.174l-39.75-39.9-.004-.003a4.034 4.034 0 0 0-.602-.495c-.05-.034-.107-.055-.159-.086a3.89 3.89 0 0 0-.529-.283c-.073-.03-.151-.044-.225-.07-.171-.06-.341-.123-.523-.159a3.948 3.948 0 0 0-.792-.08h-53C50.738 29.5 43 37.261 43 46.8v106.4c0 9.539 7.738 17.3 17.25 17.3h79.5c9.512 0 17.25-7.761 17.25-17.3V73.4a4.02 4.02 0 0 0-.08-.791zm-39.67-29.426L143.369 69.4H117.25V43.183zm22.5 119.317h-79.5c-5.101 0-9.25-4.172-9.25-9.3V46.8c0-5.128 4.149-9.3 9.25-9.3h49v35.9a4 4 0 0 0 4 4H149v75.8c0 5.128-4.149 9.3-9.25 9.3zm-9.25-55.85a4 4 0 0 1-4 4h-53a4 4 0 0 1 0-8h53a4 4 0 0 1 4 4zm0 26.6a4 4 0 0 1-4 4h-53a4 4 0 0 1 0-8h53a4 4 0 0 1 4 4zm-61-53.2a4 4 0 0 1 4-4h13.25a4 4 0 0 1 0 8H73.5a4 4 0 0 1-4-4z"
            fill="#000001"
            data-color="1"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    title: "バイリンガル",
    description: "日本語と英語の両方の知識を使って全力でサポートします。",
    svg: (
      <svg
        preserveAspectRatio="xMidYMid meet"
        data-bbox="29.5 29.5 141 141"
        viewBox="29.5 29.5 141 141"
        height="200"
        width="200"
        xmlns="http://www.w3.org/2000/svg"
        data-type="color"
        role="presentation"
        aria-hidden="true"
        aria-label=""
      >
        <g>
          <path
            d="M100 29.5c-38.874 0-70.5 31.626-70.5 70.5 0 38.874 31.626 70.5 70.5 70.5s70.5-31.626 70.5-70.5c0-38.874-31.626-70.5-70.5-70.5zM162.358 96h-31.93a105.684 105.684 0 0 0-21.335-57.831C137.968 42.397 160.48 66.437 162.358 96zm-84.785 8h44.854A97.706 97.706 0 0 1 100 160.416 97.706 97.706 0 0 1 77.573 104zm0-8A97.706 97.706 0 0 1 100 39.584 97.706 97.706 0 0 1 122.427 96H77.573zm13.333-57.831A105.683 105.683 0 0 0 69.572 96h-31.93c1.878-29.563 24.39-53.603 53.264-57.831zM37.642 104h31.93a105.684 105.684 0 0 0 21.335 57.831C62.032 157.603 39.52 133.563 37.642 104zm71.452 57.831A105.692 105.692 0 0 0 130.429 104h31.93c-1.879 29.563-24.391 53.603-53.265 57.831z"
            fill="#000001"
            data-color="1"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    title: "素早い対応",
    description: "お問い合わせには２４時間以内に対応します。",
    svg: (
      <svg
        preserveAspectRatio="xMidYMid meet"
        data-bbox="36.5 29.499 127 141.001"
        viewBox="36.5 29.499 127 141.001"
        height="200"
        width="200"
        xmlns="http://www.w3.org/2000/svg"
        data-type="color"
        role="presentation"
        aria-hidden="true"
        aria-label=""
      >
        <g>
          <path
            d="M163.126 85.006a3.966 3.966 0 0 0-3.595-2.306h-55.034l6.056-48.703a4.005 4.005 0 0 0-2.355-4.166 3.947 3.947 0 0 0-4.629 1.104l-66.146 79.8a4.024 4.024 0 0 0-.549 4.259 3.966 3.966 0 0 0 3.595 2.306h55.034l-6.056 48.703a4.005 4.005 0 0 0 2.355 4.166 3.95 3.95 0 0 0 4.628-1.104l66.146-79.8a4.023 4.023 0 0 0 .55-4.259zm-64.123 68.477 4.935-39.686a4.023 4.023 0 0 0-.962-3.145 3.956 3.956 0 0 0-2.976-1.353H48.956l52.041-62.783-4.935 39.686a4.023 4.023 0 0 0 .962 3.145A3.956 3.956 0 0 0 100 90.7h51.044l-52.041 62.783z"
            fill="#000001"
            data-color="1"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    title: "オンラインの集中したサポート",
    description:
      "Google Meetを使い、１対１で集中したレッスンを受けることができます。",
    svg: (
      <svg
        preserveAspectRatio="xMidYMid meet"
        data-bbox="29.5 29.5 141 141"
        viewBox="29.5 29.5 141 141"
        height="200"
        width="200"
        xmlns="http://www.w3.org/2000/svg"
        data-type="color"
        role="presentation"
        aria-hidden="true"
        aria-label=""
      >
        <g>
          <path
            d="M100 29.5c-38.874 0-70.5 31.626-70.5 70.5s31.626 70.5 70.5 70.5 70.5-31.626 70.5-70.5-31.626-70.5-70.5-70.5zm0 133c-34.463 0-62.5-28.037-62.5-62.5S65.537 37.5 100 37.5s62.5 28.037 62.5 62.5-28.037 62.5-62.5 62.5zm0-106.4c-24.207 0-43.9 19.693-43.9 43.9s19.693 43.9 43.9 43.9 43.9-19.693 43.9-43.9-19.693-43.9-43.9-43.9zm0 79.8c-19.796 0-35.9-16.104-35.9-35.9S80.204 64.1 100 64.1s35.9 16.104 35.9 35.9-16.104 35.9-35.9 35.9zm0-53.2c-9.539 0-17.3 7.761-17.3 17.3s7.761 17.3 17.3 17.3 17.3-7.761 17.3-17.3-7.761-17.3-17.3-17.3zm0 26.6c-5.128 0-9.3-4.172-9.3-9.3s4.172-9.3 9.3-9.3 9.3 4.172 9.3 9.3-4.172 9.3-9.3 9.3z"
            fill="#000001"
            data-color="1"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    title: "補習校在籍８年以上",
    description:
      "私達は補習校小学部での経験を活かして生徒のサポートをしています。",
    svg: (
      <svg
        preserveAspectRatio="xMidYMid meet"
        data-bbox="30 33 140.001 134.001"
        viewBox="30 33 140.001 134.001"
        height="200"
        width="200"
        xmlns="http://www.w3.org/2000/svg"
        data-type="color"
        role="presentation"
        aria-hidden="true"
        aria-label=""
      >
        <g>
          <path
            d="M140.805 167c-.63 0-1.263-.151-1.843-.457L100 145.986l-38.962 20.558a3.947 3.947 0 0 1-4.181-.31 4.014 4.014 0 0 1-1.577-3.912l7.436-43.497-31.51-30.793a4.02 4.02 0 0 1-1.013-4.102 3.98 3.98 0 0 1 3.207-2.728l43.564-6.388 19.478-39.59C97.111 33.862 98.49 33 100 33s2.889.862 3.559 2.224l19.478 39.59 43.564 6.388a3.981 3.981 0 0 1 3.207 2.728 4.021 4.021 0 0 1-1.013 4.102l-31.51 30.793 7.436 43.497a4.013 4.013 0 0 1-1.577 3.912 3.952 3.952 0 0 1-2.339.766zM100 137.47a3.94 3.94 0 0 1 1.843.457l33.684 17.773-6.428-37.598a4.018 4.018 0 0 1 1.149-3.549l27.224-26.604-37.641-5.52a3.969 3.969 0 0 1-2.986-2.182L100 46.009 83.155 80.246a3.972 3.972 0 0 1-2.986 2.182l-37.641 5.52 27.224 26.604a4.016 4.016 0 0 1 1.149 3.549L64.472 155.7l33.684-17.773a3.96 3.96 0 0 1 1.844-.457z"
            fill="#000001"
            data-color="1"
          ></path>
        </g>
      </svg>
    ),
  },
];

const HomePage = () => {
  const [flippedStates, setFlippedStates] = useState(
    Array(benefits.length).fill(false),
  );

  const handleFlip = (index) => {
    setFlippedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="homepage">
      <Header />
      <section className="homepage-content">
        <div className="book-lesson">
          <div className="book-lesson-text">
            <p>サンノゼ補習校小学部の算数・国語の宿題や勉強をサポートします</p>
            <div className="handy-buttons">
              <a
                className="book-lesson-button"
                href="https://forms.gle/VNosV8pXzE58j2A1A"
                target="_blank"
                rel="noreferrer noopener"
                aria-disabled="false"
              >
                レッスンを予約する
              </a>
              <a
                className="send-message-button"
                href="https://forms.gle/Dy22nkreZSpqjMADA"
                target="_blank"
                rel="noreferrer noopener"
                aria-disabled="false"
              >
                お問い合わせ
              </a>
            </div>
          </div>
          <div className="jets-image">
            <img src={jets_img} alt="JETS" />
          </div>
        </div>
        <div className="why-us">
          <div className="why-us-title">
            <h2>なぜJETS？</h2>
            <div className="bar" />
            <a href="/about" className="link-to-about">
              JETSについて
            </a>
          </div>
          <div className="benefits-panel">
            {benefits.map((panel, index) => (
              <div
                className={`container ${flippedStates[index] ? "flipped" : ""}`}
                key={index}
                onClick={() => handleFlip(index)}
              >
                <div className="inner">
                  <div className="back">
                    <h3>{panel.title}</h3>
                    <p>{panel.description}</p>
                  </div>
                  <div className="front">
                    {panel.svg}
                    <h3>{panel.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default HomePage;

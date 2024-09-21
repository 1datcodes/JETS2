import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-us">
      <div className="contact-us-title">
        <h1>お問い合わせ</h1>
        <p>お気軽にご連絡ください</p>
      </div>
      <div className="contact-us-info">
        <div className="links">
          <a href="/about">JETSについて</a>
          <a
            href="https://forms.gle/boZvNp3kJao3ZtqA6"
            target="_blank"
            rel="noreferrer noopener"
            aria-disabled="false"
          >
            ボランティア活動
          </a>
          <a
            href="https://forms.gle/NCWaLvhgjRAbiCwM8"
            target="_blank"
            rel="noreferrer noopener"
            aria-disabled="false"
          >
            お問い合わせ
          </a>
        </div>
        {/* <div className="info-section">
          <a href="mailto:jets4hoshuko@gmail.com">jets4hoshuko@gmail.com</a>
          <p>408-426-7267</p>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;

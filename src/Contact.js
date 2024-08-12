import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact" className="contact-us">
            <div className="contact-us-title">
                <h1>お問い合わせ</h1>
                <p>ご質問などある場合はお気軽にご連絡ください</p>
            </div>
            <div className="contact-us-info">
                <div>    
                    <a href="/about">JETSについて</a>
                </div>
                <div className="info-section">
                    <a href="mailto:jets4hoshuko@gmail.com">jets4hoshuko@gmail.com</a>
                    <p>408-426-7267</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
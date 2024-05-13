import React from "react";
import Logo from "../img/Logo.png";
import MasterCard from "../img/MasterCard.png";
import VCB from "../img/VCB.jpg";
import Visa from "../img/Visa.png";
import PayPal from "../img/PayPal.png";

function Footer() {
    return ( 
        <footer>
            <img src={Logo} alt="Logo" />
            <span>Freelancer Việt Nam - Lựa chọn số 1 của doanh nghiệp<b>© 2024 FFERENELINCE.vn</b></span>
            <div className="allLogo">
                <img src={Visa} alt="Logo" />
                <img src={PayPal} alt="Logo" />
                <img src={MasterCard} alt="Logo" />
                <img src={VCB} alt="Logo" />
            </div>
        </footer>
     );
}

export default Footer;
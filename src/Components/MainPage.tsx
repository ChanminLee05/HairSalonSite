import React from 'react';
import {Link} from "react-router-dom";
import {HairSalon} from "../Model/HairSalon";
import './MainPage.css';
import ServicePage from "./ServicePage";
import PricePage from "./PricePage";
import ProfileImage from '../Assets/profile-img.jpg';
import MainImage from '../Assets/main-picture.jpg';
import Pic1 from '../Assets/pic-1.png';
import Pic2 from '../Assets/pic-2.png';
import Pic3 from '../Assets/pic-3.png';
import Pic4 from '../Assets/pic-4.png';
import Pic5 from '../Assets/pic-5.png';
import FAQPage from "./FAQPage";
import FooterPage from "./FooterPage";

interface OwnProps {
    info: HairSalon
}
const MainPage:React.FC<OwnProps> = ({info}) => {
    return (
        <div className="main-page-body">
            <div className="main-pic-container">
                <div className="main-txt-container">
                    <h6 className="main-txt1">Welcome To</h6>
                    <h4 className="main-txt2">Shine Hair Salon</h4>
                    <p className="main-txt3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa earum nam optio, porro quam rem
                        velit. Assumenda cum cupiditate debitis, eum id iure, minima nam, odit officia repudiandae sint.
                    </p>
                </div>
                <img src={MainImage} alt={MainImage} className="main-img"/>
            </div>
            <div id="about-us">
                <img src={ProfileImage} alt={ProfileImage} className="profile-img"/>
                <div className="about-us-txt-container">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci blanditiis dignissimos eius
                        eligendi, harum libero maiores necessitatibus nesciunt veritatis. Aut dolores explicabo fuga nam
                        natus nihil nostrum sit voluptates?
                    </p>
                </div>
            </div>

            <ServicePage />
            <PricePage info={info}/>
            <FAQPage />
            <FooterPage info={info}/>
        </div>
    );
};

export default MainPage;

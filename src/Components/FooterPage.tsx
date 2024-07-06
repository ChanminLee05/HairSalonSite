import React from 'react';
import {Link} from "react-router-dom";
import {HairSalon} from "../Model/HairSalon";
import "./FooterPage.css";

interface OwnProps {
    info: HairSalon
}

const FooterPage: React.FC<OwnProps> = ({info}) => {
    return (
        <div className="footer">
            <div className="footer-operation-container">
                <h4>Hours of Operation</h4>
                <ul className="operation-list">
                    <li className="operation-item row"><p className="col-4 day">Monday</p><p className="col-8 time">10:00 - 18:00</p></li>
                    <li className="operation-item row"><p className="col-4 day">Tuesday</p><p className="col-8 time">10:00 - 18:00</p></li>
                    <li className="operation-item row"><p className="col-4 day">Wednesday</p><p className="col-8 time">10:00 - 18:00</p></li>
                    <li className="operation-item row"><p className="col-4 day">Thursday</p><p className="col-8 time">10:00 - 18:00</p></li>
                    <li className="operation-item row"><p className="col-4 day">Friday</p><p className="col-8 time">10:00 - 18:00</p></li>
                    <li className="operation-item row"><p className="col-4 day">Saturday</p><p className="col-8 time">10:00 - 18:00</p></li>
                    <li className="operation-item row"><p className="col-4 day">Sunday</p><p className="col-8 time">Closed</p></li>
                </ul>
            </div>
            <div className="footer-contact-container">
                <h4 className="mb-4">VISIT US</h4>
                <p>Contact us anytime</p>
                <div className="contact-info-container">
                    <div className="contact-info-address">
                        <h6 className="contact-info-label">ADDRESS:</h6>
                        <p className="label-address">{info.address.streetNumber}, {info.address.city}, {info.address.province}, {info.address.zipCode}</p>
                    </div>
                    <div className="contact-info-phone">
                        <h6 className="contact-info-label">PHONE:</h6>
                        <p className="label-phone">+1 {info.phoneNumber}</p>
                    </div>
                </div>
                <Link to="/contact" className="button contact-btn type--A">
                    <div className="button__line"></div>
                    <div className="button__line"></div>
                    <span className="button__text"><Link to="/book" className="book-link">BOOK A RESERVATION</Link></span>
                    <div className="button__drow1"></div>
                    <div className="button__drow2"></div>
                </Link>
            </div>
            <div className="footer-map">
                <h4 className="location-label">Our Location</h4>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.4415227398795!2d-113.60808352300963!3d53.40692947018837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x539ff5e823d7fa2d%3A0x27d9945676e2e2f9!2s581%20Glenridding%20Ravine%20Dr%20SW%2C%20Edmonton%2C%20AB%20T6W%201A6!5e0!3m2!1sen!2sca!4v1720243758522!5m2!1sen!2sca"
                    className="google-map"
                    style={{border:0}}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
};

export default FooterPage;

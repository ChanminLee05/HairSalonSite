import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Book.css';
import FormImage from "../Assets/main-pic1.jpg";
import InstagramImg from "../Assets/instagram-icon.png";
import {Bounce, toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Book:React.FC = () => {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const formatPhoneNumber = (value: string) => {
        if (!value) return value;
        const phoneNumber = value.replace(/\D/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
        }
        return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6,10)}`;
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setPhoneNumber(formattedPhoneNumber);
    }

    const handleSubmit = async (e: React.FormEvent)=> {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const data = {
            service_id: 'service_d81mncs',
            template_id: 'template_r4n8hxn',
            user_id: '0nvJhzv3ynWsfR13-',
            template_params: {
                'name': formData.get('name'),
                'email': formData.get('email'),
                'phoneNumber': formData.get('phoneNumber'),
                'date': formData.get('date'),
                'time': formData.get('time'),
                'subject': formData.get('subject'),
                'message': formData.get('message')
            }
        };

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Message sent successfully');
                toast.success('Message sent successfully. We will respond to you as soon as possible.', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: "light",
                    transition: Bounce,
                });
                setTimeout(() => {
                    navigate('/')
                }, 5000);
            } else {
                console.error('Error sending message');
                toast.error('Error sending message', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: "light",
                    transition: Bounce,
                });
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <>
            <ToastContainer/>
            <div className="contact-page">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-left">
                        <h3 className="form-title">BOOKING REQUEST FORM</h3>
                        <div className="contact-message-container">
                            <input type="text" id="name" name="name" placeholder="Name" className="contact-input" required={true}/>
                            <input type="email" id="email" name="email" placeholder="Email" className="contact-input" required={true}/>
                            <input type="tel" id="tel" name="phoneNumber" placeholder="Phone Number" className="contact-input"
                                value={phoneNumber} onChange={handlePhoneNumberChange} required={true}/>
                            <input type="date" id="date" name="date" className="contact-input" required={true}/>
                            <input type="time" id="time" name="time" className="contact-input" required={true}/>
                            <input type="text" id="subject" name="subject" placeholder="Subject" className="contact-input" required={true}/>
                            <textarea id="message" name="message" placeholder="Create a message here" className="contact-input message-input" required={true}/>
                            <button type="submit" className="submit-btn">Send Message</button>
                        </div>

                            <a href="https://www.instagram.com/shine_0113/" className="link-instagram">
                                <img src={InstagramImg} alt={InstagramImg} className="instagram-icon"/>
                                <span className="instagram-txt">IG@Shine_0113</span>
                            </a>

                    </div>
                    <div className="form-right">
                        <img src={FormImage} alt={FormImage} className="form-img"/>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Book;

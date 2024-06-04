import React from 'react';
import './FAQPage.css';

const FAQPage: React.FC = () => {
    return (
        <div id="FAQ">
            <h3 className="FAQ-title">FAQ</h3>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <p className="FAQ-question">What are your hours of operation?</p>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p className="FAQ-answer">Our operation hours are from 10:00 AM to 6:00 PM, Monday through Saturday. Please note that we are closed on Sundays.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <p className="FAQ-question">How do I book an appointment?</p>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p className="FAQ-answer">Please submit the booking request form and we will contact you as soon as possible.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <p className="FAQ-question">How do I cancel or modify an appointment?</p>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p className="FAQ-answer">Please call or text us for cancelling an appointment</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourth" aria-expanded="false" aria-controls="collapseFourth">
                            <p className="FAQ-question">Where do I park?</p>
                        </button>
                    </h2>
                    <div id="collapseFourth" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p className="FAQ-answer">Customers are welcome to park on the street or utilize our driveway for parking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;

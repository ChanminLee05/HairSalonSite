import React from 'react';
import "./ServicePage.css";
import Cut from '../Assets/cut.jpg';
import Perm from '../Assets/perm.jpg';
import Color from '../Assets/pic-3.png';
import Treatment from '../Assets/treatment.jpg';
import Extension from '../Assets/extension.png';
import Styling from "../Assets/styling.jpg";

const ServicePage:React.FC = () => {
    return (
        <div id="service-page">
            <h3>Services</h3>
            <div id="carouselExampleFade" className="carousel slide carousel-fade carousel-container">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div>
                            <img src={Cut} className="carousel-img" alt="..."/>
                        </div>
                        <div className="carousel-txt-container">
                            <h4>Hair Cut</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quam, ratione? Architecto
                                autem dignissimos facilis laboriosam magnam nam, nihil placeat sit ullam vero!
                                Asperiores expedita iure quibusdam, tempore vel voluptates.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Perm} className="carousel-img-color" alt="..."/>
                        <div className="carousel-txt-container">
                            <h4>Hair Perm</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quam, ratione? Architecto
                                autem dignissimos facilis laboriosam magnam nam, nihil placeat sit ullam vero!
                                Asperiores expedita iure quibusdam, tempore vel voluptates.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Color} className="carousel-img-color" alt="..."/>
                        <div className="carousel-txt-container">
                            <h4>Coloring</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quam, ratione? Architecto
                                autem dignissimos facilis laboriosam magnam nam, nihil placeat sit ullam vero!
                                Asperiores expedita iure quibusdam, tempore vel voluptates.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Treatment} className="carousel-img-color" alt="..."/>
                        <div className="carousel-txt-container">
                            <h4>Hair Treatment</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quam, ratione? Architecto
                                autem dignissimos facilis laboriosam magnam nam, nihil placeat sit ullam vero!
                                Asperiores expedita iure quibusdam, tempore vel voluptates.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Styling} className="carousel-img-color" alt="..."/>
                        <div className="carousel-txt-container">
                            <h4>Hair Styling</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quam, ratione? Architecto
                                autem dignissimos facilis laboriosam magnam nam, nihil placeat sit ullam vero!
                                Asperiores expedita iure quibusdam, tempore vel voluptates.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Extension} className="carousel-img-color" alt="..."/>
                        <div className="carousel-txt-container">
                            <h4>Hair Extension</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quam, ratione? Architecto
                                autem dignissimos facilis laboriosam magnam nam, nihil placeat sit ullam vero!
                                Asperiores expedita iure quibusdam, tempore vel voluptates.
                            </p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default ServicePage;

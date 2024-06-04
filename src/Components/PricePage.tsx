import React from 'react';
import {ServiceOnly} from "../Model/HairSalon";
import './PricePage.css';
import Scissors from "../Assets/scissors.png";
import Perm from "../Assets/perm.png";
import Coloring from "../Assets/hair-dye.png";
import Treatment from "../Assets/hair-treatment.png";
import Extension from "../Assets/hair-extension.png";

interface OwnProps {
    info: ServiceOnly
}
const PricePage: React.FC<OwnProps> = ({info}) => {
    const hairCuts = info.services.filter(service => service.category === 'Hair Cut');
    const hairPerms = info.services.filter(service => service.category === 'Hair Perm');
    const colorings = info.services.filter(service => service.category === 'Coloring');
    const treatments = info.services.filter(service => service.category === 'Treatment');
    const hairExtensions = info.services.filter(service => service.category === 'Hair Extension');
    return (
        <div className="price-form">
            <h4 className="price-form-title">Price List</h4>
            <div className="price-list-container">
                <div className="price-container">
                    <label className="label-category">
                        <img src={Extension} alt={Extension} className="price-icon-img"/>
                        Hair Extension
                    </label>
                    <ul className="sub-category-list">
                        {hairExtensions.map(service => (
                            <li key={service.id} className="sub-category-item">
                                <span className="sub-category">{service.subCategory}</span>
                                <span className="price">{service.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="price-container">
                    <label className="label-category">
                        <img src={Coloring} alt={Coloring} className="price-icon-img"/>
                        Coloring
                    </label>
                    <ul className="sub-category-list">
                        {colorings.map(service => (
                            <li key={service.id} className="sub-category-item">
                                <span className="sub-category">{service.subCategory}</span>
                                <span className="price">{service.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="price-container">
                    <label className="label-category">
                        <img src={Perm} alt={Perm} className="price-icon-img"/>
                        Hair Perm
                    </label>
                    <ul className="sub-category-list">
                        {hairPerms.map(service => (
                            <li key={service.id} className="sub-category-item">
                                <span className="sub-category">{service.subCategory}</span>
                                <span className="price">{service.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="price-container">
                    <label className="label-category">
                        <img src={Treatment} alt={Treatment} className="price-icon-img"/>
                        Treatment
                    </label>
                    <ul className="sub-category-list">
                        {treatments.map(service => (
                            <li key={service.id} className="sub-category-item">
                                <span className="sub-category">{service.subCategory}</span>
                                <span className="price">{service.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="price-container">
                    <label className="label-category">
                        <img src={Scissors} alt={Scissors} className="price-icon-img"/>
                        Hair Cut
                    </label>
                    <ul className="sub-category-list">
                        {hairCuts.map(service => (
                            <li key={service.id} className="sub-category-item">
                                <span className="sub-category">{service.subCategory}</span>
                                <span className="price">{service.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default PricePage;

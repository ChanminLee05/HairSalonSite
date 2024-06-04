import React from 'react';
import {HairSalon} from "../Model/HairSalon";
import NavBar from "./NavBar";
import MainPage from "./MainPage";

interface OwnProps {
    info: HairSalon
}

const Store:React.FC<OwnProps> = ({info}) => {
    return (
        <>
            <NavBar info={info}/>
            <MainPage info={info}/>
        </>
    );
};

export default Store;

import React from 'react';
import logo from "../../images/logo.png";
import "./LogoSearchBar.css";

const LogoSearchBar = () => {
    return (
        <div className='container-fluid searchContainer pt-2'>
            <a href='/'><img className='img-fluid' width="150" src={logo} alt='#'/></a>
            <input type="text" className='SearchInput' placeholder='Search in Baraz'></input>
            <button>Search</button>
        </div>
    );
};

export default LogoSearchBar;
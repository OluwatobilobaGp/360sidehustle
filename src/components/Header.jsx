import React from 'react'
import styles from '../styles/Global';
import assets from '../assets/index';


const Header = () => {
    return (
        <div className="flex px-4 py-2 justify-left items-center bg-black flex-row text-center banner02">
        <span className="left bold"><img src={assets.Hustle} alt="Side Hustle Logo" style={{width:'100px',}} srcset="" /></span>
        
        
        
        </div>
    )
}

export default Header
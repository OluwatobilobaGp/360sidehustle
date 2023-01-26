import React from 'react';

import styles from '../styles/Global';

const Button = ({ assetUrl, link }) => {
  return (

    
    
    <div 
    className=''
    onClick={() => window.open(link, "_blank")}
    >

    <button className={styles.btnPrimary}>Buy Now</button>
    </div>
  )
}

export default Button
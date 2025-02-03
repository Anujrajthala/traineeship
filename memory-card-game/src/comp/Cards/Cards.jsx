import React from 'react';
import styles from './CardsStyles.module.css'
import { useState } from 'react';
const Cards = ({children}) => {
  const [isHidden, setIsHidden]= useState(true)
  const handleHidden= function(){
    setIsHidden((prev)=> prev===true?false:true)
  }
  return (
    <div className={isHidden? styles.hidden: ''} onClick={handleHidden}>
    <div className={styles.card}>
     <h1 className= {styles.children}>{children}</h1> 
    </div>
    </div>
  );
};

export default Cards;
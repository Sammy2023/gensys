import React from 'react';
import styles from '../styles/Popup.module.css';

export default function Popup(props){
  return props.trigger ? (
    <div className={styles.container}>
      {props.children}
    </div>
  ):
  "";
}
import React from 'react'
import styles from './Title.module.css';

const Title = () => {
  return (
    <>
        <h2 className={styles["my-title"]}>Meu Titulo</h2>
        <h2 className={styles.my_title}>Meu Titulo</h2>
    </>
  )
}

export default Title
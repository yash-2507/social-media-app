import React from 'react'
import styles from './styles/Header.module.css'

const Header = ({user, setUser}) => {
    const handleLogout = () => {
        setUser('')
    }
  return (
    <div className={styles.header}>
        <h2>Welcome, {user}!</h2>
        <button className={styles.button} onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Header
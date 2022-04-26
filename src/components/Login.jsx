import React, { useState } from 'react'
import styles from './styles/Login.module.css'

const Login = ({setUser}) => {
    
    const [username, setUsername] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        setUser(username)
    }

    return (
        <div className={styles.parent}>
            <h1 style={{color: 'white', fontSize: '40px'}}>Login</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input 
                    className={styles.input}
                    placeholder="Input username"
                    onChange={event => setUsername(event.target.value)}
                />
                <button className={styles.button} type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
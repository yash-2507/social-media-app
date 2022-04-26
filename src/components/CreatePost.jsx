import React, { useRef, useState } from 'react'
import styles from './styles/CreatePost.module.css'

const CreatePost = ({user, setPosts, posts}) => {
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        const post = {
            content: content,
            image: image,
            user: user,
        }
        const newPosts = [post, ...posts]
        setPosts(newPosts)
        setContent('')
        imageRef.current.value = ''
    } 
  return (
    <div>
        <h3>Create New Post</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
            <input 
                className={styles.input}
                type="text" 
                placeholder="Add Post Content" 
                onChange={event => setContent(event.target.value)} 
                value = {content}
            />
            <input 
                className={styles.input}
                type="file" 
                ref={imageRef}
                onChange={event => setImage(event.target.files[0])}
            />
            <button className={styles.button} type="submit">Add Post</button>
        </form>
        {/* <div className="post">
            <p>{content}</p>
            { image && (
                <img 
                style = {{ height: '100px', width: '200px', objectFit: 'cover'}}
                src = {URL.createObjectURL(image)}
                alt = ''
                />
            )}
        </div> */}
    </div>
  )
}

export default CreatePost
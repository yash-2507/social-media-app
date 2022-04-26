import React from 'react'
import styles from './styles/Post.module.css'

const Post = ({ user, image, content }) => {
  return (
            <div className={styles.post}>
                <div>
                    <h4 className={styles.heading}>{`${user}'s post`}</h4>
                    <p className={styles.para}>{content}</p>
                </div>
                <div>
                    {image && (
                    <img
                        style={{
                            height: "80px",
                            width: "160px",
                            objectFit: "cover",
                        }}
                        src={URL.createObjectURL(image)}
                        alt="Post Cover"
                    />
                    )}
                </div>
                
                
                
            </div>
  )
}

export default Post
import "./App.css";
import Login from "./components/Login";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
    const [user, setUser] = useState("Yash");
    const [posts, setPosts] = useState([]);
    // console.log("posts: ", posts);
    useEffect(() => {
        user
            ? (document.title = `${user}'s Feed`)
            : (document.title = "Please Login");
    }, [user]);
    if (!user) {
        return (
            <div className="container_0">
                <Login setUser={setUser} />;
            </div>
        );
    }
    return (
        <div className="container">
            <div className="parent">
                <Header user={user} setUser={setUser} />
                <CreatePost user={user} setPosts={setPosts} posts={posts} />
                <PostList posts={posts} />
            </div>
        </div>
    );
}


export default App;

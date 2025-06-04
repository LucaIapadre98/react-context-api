import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const PostContext = createContext();
 
function PostsProvider ({children}){
    const [posts, setPosts] = useState ([]);
    
    const fetchPosts = () =>{
        axios.get("http://localhost:3000/posts").then((res)=>{
            setPosts(res.data.data)
        });
    };
    useEffect(fetchPosts, [])

    const postsData ={
        posts
    };
    return (
        <PostContext.Provider value={postsData}>{children}</PostContext.Provider>
    );
}

function usePosts (){
    return useContext(PostContext);
}

export {PostsProvider, usePosts}; 
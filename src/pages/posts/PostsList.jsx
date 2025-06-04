import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";

export default function PostsList (){
    const [posts, setPosts] = useState([]);
    const fetchPosts = () =>{
        axios.get("http://localhost:3000/posts").then((res)=>{
           setPosts(res.data.data)
        });
    };
    useEffect(fetchPosts, []);
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CONTENT</th>
                </tr>
            </thead> 
            <tbody>
                {posts.map((post)=> <PostCard post={post} />)}
            </tbody>           
        </table>
    )
}
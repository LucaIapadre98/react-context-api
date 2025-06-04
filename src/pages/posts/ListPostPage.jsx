import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListPostPage(){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/posts").then((res)=>{
           setPosts(res.data.data)
        });

    }, []);
    return (
        <div>
            <div className="container">
                <h3>Lista dei Post:</h3>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                         <th>TITLE</th>
                         <th>CONTENT</th>
                    </tr>
                </thead> 
                <tbody>
                    {posts.map((post)=>(
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.content}</td>
                            <td>
                                <Link to={`/posts/${post.id}`}>Show</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>           
            </table>
        </div>
    )
}
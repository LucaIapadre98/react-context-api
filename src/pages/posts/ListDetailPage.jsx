import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function ListDetailPage(){
    // USO LO USEPARAMS PER PRENDERE L'ID //
    const [post, setPost] = useState();
    const { id } = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3000/posts/${id}`)
        .then((res)=>{
            setPost(res.data.data);
        })
        .catch((err)=>{
            alert("Id non trovato in lista!")
        })
    }, [])
    return (
        <div>
            <div className="container">
                {post ? (
                    <>
                        <div className="card">
                            <div className="card-header">
                                <h3>{post.title}</h3>
                            </div>
                            <div className="card-body">
                                <img src={"http://localhost:3000" + post.image} alt={post.title} />
                                <h6>LISTA COSE DA FARE:</h6>
                                <ul>
                                    {post.tags.map((tag,i )=>(
                                        <li key={i}>{tag}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </>
                ) : (
                    <h1>Loading...</h1>
                )}
                <Link to={"/posts"}>Indietro</Link>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom";

export default function PostCard({post}){
    return (
        <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.content}</td>
            <td>
                <Link to={`/posts/${post.id}`}>Show</Link>
            </td>
        </tr>
    )
}
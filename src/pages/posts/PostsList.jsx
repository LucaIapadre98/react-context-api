import PostCard from "./PostCard";
import { usePosts } from "../../components/content/PostsContext";


export default function PostsList (){
   const{ posts } = usePosts();
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
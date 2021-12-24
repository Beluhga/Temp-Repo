import { PostCard } from "../PostCard";
import './estilo.css';

export const Posts = ({posts}) => (
    <div className="posts"> 
      {posts.map(post => (
        <PostCard
        key={post.id} //tudo aqui dentro e Props
        post={post}
        />
      ))}
    </div>
)
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";

const PostsList = () => {
    const posts = useSelector(state => state.posts); // useSelector : 스토어의 상태값을 반환, 바뀐 store의 상태값을 다시 가져옴, posts값은 store.js>reducer에 있음

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId}/>
            </p>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
    
}

export default PostsList;